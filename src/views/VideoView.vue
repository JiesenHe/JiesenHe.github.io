

<script setup lang="ts">
import {onMounted, ref} from 'vue';

// const videos = ref<string[]>([
//   "public/videos/手机1.mp4",
//   "public/videos/天选.mp4",
//   "public/videos/华为pocket.mp4",
//   "public/videos/手表.mp4",
// ]);

const videos = ref<string[]>([
  "https://vod.300hu.com/vod/product/1212798833/21852/1087_5000_1_9dbbd490f_f.mp4?source=1&h265=1088_3000_1_20556ef69_f.mp4",
  "https://vod.300hu.com/vod/product/1451388049/21852/1087_5000_1_338119e0b_f.mp4?source=1&h265=1088_3000_1_75634a1f1_f.mp4",
  "https://vod.300hu.com/vod/product/1372714519/21852/1087_4805_1_7e07ef873_f.mp4?source=1&h265=1088_3000_1_65cecdbd3_f.mp4",
  "https://vod.300hu.com/vod/product/e67d9066-b81c-414d-9d95-49ed47ff2e26/1087_5000_1_23859f5fc_f.mp4?source=1&h265=1088_3000_1_e7e8fb302_f.mp4",
  "https://vod.300hu.com/24/4c1f7a6atransbjngwcloud1oss/0cabe57a913759220939132929/1097_5000_1_5d2c067b7_f.mp4?source=1&h265=1088_3000_1_b6340d952_f.mp4",
  "https://vod.300hu.com/vod/product/1212798833/21852/1087_5000_1_9dbbd490f_f.mp4?source=1&h265=1088_3000_1_20556ef69_f.mp4",
  "https://vod.300hu.com/vod/product/1451388049/21852/1087_5000_1_338119e0b_f.mp4?source=1&h265=1088_3000_1_75634a1f1_f.mp4",
  "https://vod.300hu.com/vod/product/1372714519/21852/1087_4805_1_7e07ef873_f.mp4?source=1&h265=1088_3000_1_65cecdbd3_f.mp4",
  "https://vod.300hu.com/vod/product/e67d9066-b81c-414d-9d95-49ed47ff2e26/1087_5000_1_23859f5fc_f.mp4?source=1&h265=1088_3000_1_e7e8fb302_f.mp4",
  "https://vod.300hu.com/24/4c1f7a6atransbjngwcloud1oss/0cabe57a913759220939132929/1097_5000_1_5d2c067b7_f.mp4?source=1&h265=1088_3000_1_b6340d952_f.mp4",
]);

const currentIndex = ref<number>(0);
const touchStartX = ref<number>(0);
const touchEndX = ref<number>(0);
const touchStartY = ref<number>(0);
const touchEndY = ref<number>(0);

const videoPlayer = ref<HTMLVideoElement | null>(null);

const onTouchStart = (event: TouchEvent) => {
  touchStartX.value = event.touches[0].clientX;
  touchStartY.value = event.touches[0].clientY;
};

const onTouchEnd = (event: TouchEvent) => {
  touchEndX.value = event.changedTouches[0].clientX;
  touchEndY.value = event.changedTouches[0].clientY;
  handleSwipe();
  if (document.hasFocus()) {
    playVideo();
  }
};

const handleSwipe = () => {
  const swipeDistance = touchEndX.value - touchStartX.value;
  const swipeDistanceY = touchEndY.value - touchStartY.value;
  if (swipeDistance > 50) {
    prevVideo();
  } else if (swipeDistance < -50) {
    nextVideo();
  }
  if (swipeDistanceY > 50) {
    prevVideo();
  } else if (swipeDistanceY < -50) {
    nextVideo();
  }
};

const nextVideo = () => {
  currentIndex.value = (currentIndex.value + 1) % videos.value.length;
  playVideo();
};

const prevVideo = () => {
  currentIndex.value = (currentIndex.value - 1 + videos.value.length) % videos.value.length;
  playVideo();
};

const playVideo = () => {
  if (videoPlayer.value) {
    videoPlayer.value.pause();
    videoPlayer.value.play();
  }
};

const navbarItems = [
  { text: "逛逛" },
  { text: "直播" },
  { text: "精选" },
  { text: "关注" },
  { text: "推荐" }
];

const handleNavbarClick = (text: string) => {
  console.log(`Clicked on ${text}`);
};


onMounted(() => {
  // 在组件挂载后，检查视频宽高比并设置样式
  checkVideoAspectRatio();
});

const checkVideoAspectRatio = () => {
  if (videoPlayer.value) {
    const video = videoPlayer.value;
    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;

    if (videoWidth > videoHeight) {
      // 宽度大于高度，使用 object-fit: cover
      video.style.objectFit = 'cover';
    } else {
      // 高度大于宽度，使用 object-fit: contain
      video.style.objectFit = 'contain';
    }
  }
};
</script>

<template>
  <div class="video video-container" @touchstart="onTouchStart" @touchend="onTouchEnd">
    <video ref="videoPlayer" class="video-player" :src="videos[currentIndex]" autoplay></video>

    <div class="top-navbar">
      <div class="navbar-item" v-for="item in navbarItems" :key="item.text" @click="handleNavbarClick(item.text)">
        <span>{{ item.text }}</span>
      </div>
      <div class="navbar-item">
        <van-icon name="search" size="20" color="white" />
      </div>
      <div class="navbar-item">
        <van-icon name="camera-o" size="20" color="white" />
      </div>
    </div>

    <mini-commodity />
    <like />
    <message />
    <favorite />
    <share />
  </div>
</template>
<style>
.video-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  overflow: hidden;
  position: relative;
}

.video-player {
  width: 100%;
  height: 90%;
  object-fit: contain;
  /* You can customize your player controls here */
}

.top-navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  z-index: 10; /* Ensure it appears above the video */
}

.navbar-item {
  color: white;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.navbar-item span {
  margin-right: 10px;
  margin-left: 10px;
}
</style>