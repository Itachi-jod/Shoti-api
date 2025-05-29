const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/shoti/video", async (req, res) => {
  try {
    const result = await getRandomVideo();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
});

async function getRandomVideo() {
  const response = await axios.get("https://www.tikwm.com/api/feed/list", {
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
    params: {
      count: 1,
    },
  });

  const videoData = response.data?.data?.[0];
  if (!videoData) throw new Error("No video found");

  return {
    author: "Lord Itachi",
    responseTime: `${Math.floor(Math.random() * 1000 + 2000)}ms`,
    data: {
      content: videoData.play,
      duration: String(videoData.duration * 1000),
      region: videoData.region || "Unknown",
      shoti_id: uuidv4(),
      shoti_score: 0,
      title: videoData.title || "",
      type: "video",
      user: {
        instagram: videoData.author?.instagram || "",
        nickname: videoData.author?.nickname || "Unknown",
        signature: videoData.author?.signature || "",
        twitter: videoData.author?.twitter || "",
        username: videoData.author?.unique_id || "",
      }
    }
  };
}

app.listen(PORT, () => {
  console.log(`✅ Shoti API running at http://localhost:${PORT}`);
});
