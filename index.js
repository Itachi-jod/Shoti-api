const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

// Define the getRandomVideo function
async function getRandomVideo() {
  try {
    // Replace this with your actual logic to fetch a random video
    const response = await axios.get("https://api.example.com/random-video");
    const videoData = response.data;

    return {
      author: "Your Name",
      responseTime: `${Math.floor(Math.random() * 1000 + 2000)}ms`,
      data: {
        content: videoData.url,
        duration: String(videoData.duration),
        region: videoData.region || "Unknown",
        shoti_id: uuidv4(),
        shoti_score: 0,
        title: videoData.title || "",
        type: "video",
        user: {
          instagram: videoData.user?.instagram || "",
          nickname: videoData.user?.nickname || "Unknown",
          signature: videoData.user?.signature || "",
          twitter: videoData.user?.twitter || "",
          username: videoData.user?.username || "",
        },
      },
    };
  } catch (error) {
    throw new Error("Failed to fetch random video");
  }
}

// Define the route that uses getRandomVideo
app.get("/shoti/video", async (req, res) => {
  try {
    const result = await getRandomVideo();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Shoti API running at http://localhost:${PORT}`);
});
