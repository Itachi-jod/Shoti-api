const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/shoti/video", async (req, res) => {
  const start = Date.now();
  try {
    const tiktokData = await getRandomVideo();

    if (!tiktokData || !tiktokData.content) {
      return res.status(404).json({ error: "No video found" });
    }

    const response = {
      author: "Lord Itachi",
      responseTime: `${(Date.now() - start).toFixed(2)}ms`,
      data: tiktokData,
    };

    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Shoti API is running at http://localhost:${PORT}`);
});
