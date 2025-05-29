const axios = require("axios");
const { v4: uuidv4 } = require("uuid");

const dummyUsers = [
  {
    username: "lizyyfizyy",
    nickname: "lizyyfizyy",
    instagram: "dewiiwhyn",
    twitter: "",
    signature: "",
  },
  {
    username: "cutiee_xoxo",
    nickname: "Cutie Pie",
    instagram: "cutiee.ig",
    twitter: "cutieeXoxo",
    signature: "Love you 3000 💖",
  },
  {
    username: "sunshinegirl",
    nickname: "Sunny ☀️",
    instagram: "sunny.gram",
    twitter: "",
    signature: "Smile more 🌻",
  },
];

async function getRandomVideo() {
  // Simulate TikTok or CDN-based real video links (you can rotate these)
  const videos = [
    "https://api.tiktokv.com/aweme/v1/play/?file_id=bffd71f414094eacbc70eaabf694c12a&is_play_url=1&item_id=7486487800930503943&line=0&video_id=v14044g50000cvilhm7og65porsjvbq0",
    "https://api.tiktokv.com/aweme/v1/play/?file_id=0c7162bd292e482eb3b676ec13938db9&is_play_url=1&item_id=7474887460737170693&line=0&video_id=v14044g50000cvisq5qg65g6dud6g7g0",
    "https://api.tiktokv.com/aweme/v1/play/?file_id=5cc18d2fbd98462d9ecf679b30dc87df&is_play_url=1&item_id=7478403963579356474&line=0&video_id=v14044g50000cvjjhr7og65pjshns930"
  ];

  const randomVideo = videos[Math.floor(Math.random() * videos.length)];
  const randomUser = dummyUsers[Math.floor(Math.random() * dummyUsers.length)];

  return {
    content: randomVideo,
    duration: Math.floor(Math.random() * 9000) + 1000, // 1s to 10s
    region: "ID",
    shoti_id: uuidv4(),
    shoti_score: 0,
    title: "",
    type: "video",
    user: randomUser,
  };
}

module.exports = getRandomVideo;
