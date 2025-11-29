import express from "express";
import cors from "cors";
import nmap from "node-nmap";

const { NmapScan } = nmap;

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/scan", async (req, res) => {
  try {
    const { ip, subnet, scanType } = req.body;

    const target = ip + '/' + subnet

    console.log(target , scanType);
    if (!target) {
        console.log("target not specified");
      return res.status(400).json({ error: "Target is required" });
    }

    // Scan options
    const scanArgs = scanType != 'simple' ? ["-sV", "-O"] : ["-sP"];

    const scan = new NmapScan(target, scanArgs);

    let responded = false; // <-- IMPORTANT

    scan.on("complete", (result) => {
      if (responded) return;          // prevents double-send
      responded = true;
    console.log(result);
      return res.json({
        success: true,
        result,
      });
    });

    scan.on("error", (err) => {
      if (responded) return;
      responded = true;
        console.log(err);
      return res.status(500).json({
        success: false,
        error: err.message || "Scan error",
      });
    });

    scan.startScan();
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
