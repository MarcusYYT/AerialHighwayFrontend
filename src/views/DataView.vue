<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const videos = ref([]);

onMounted(async () => {
    const response = await axios.get('http://localhost:8000/api/video/videos/');
    videos.value = response.data;
    videos.value.forEach(video => {
        video.video_filename = video.video_filename.replace("http://localhost:8000/media/", "");
    });
});
</script>

<template>
    <div class="auth-wrapper">
        <div class="auth-inner">
            <div class="container">
                <h1 class="my-4">Video List</h1>
                <div class="video-list">
                    <div class="card mb-3" v-for="video in videos" :key="video.id">
                        <div class="card-body">
                            <h5 class="card-title">
                                <RouterLink :to="`/vehicles/${video.video_filename}`" >
                                    {{ video.video_filename }}
                                </RouterLink>
                            </h5>
                            <p class="card-text">Resolution: {{ video.x_resolution }}x{{ video.y_resolution }}</p>
                            <p class="card-text">Date/Time: {{ video.start_datetime }}</p>
                            <p class="card-text">Position: {{ video.video_latitude }}, {{ video.video_longitude }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.auth-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
}

.auth-inner {
    width: 95%;
    height: 95%;
    margin: auto;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    box-shadow: 0px 14px 80px rgba(34, 35, 58);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
}

.auth-wrapper .form-control:focus {
    border-color: #167bff;
    box-shadow: none;
}

.auth-wrapper h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
}

.video-list {
    height: 600px;
    overflow-y: auto;
}
</style>