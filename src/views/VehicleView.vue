<template>
    <div class="auth-wrapper">
        <div class="auth-inner">
            <h1 class="my-4">Vehicles in this Video</h1>
            <div class="container" style="max-height: 500px; overflow: auto;">
                <div class="row">
                    <div class="col-12">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Track ID</th>
                                    <th scope="col">Avg Speed</th>
                                    <th scope="col">Max Speed</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in formItems" :key="item.id">
                                    
                                        <th scope="row">{{ item.id }}</th>
                                        <td><router-link :to="`/vehicleDetail/${item.id}`"><img :src="'http://localhost:8000/media/vehicles/' + item.image" alt=""
                                                width="100" /></router-link></td>
                                        <td>{{ item.track_id }}</td>
                                        <td>{{ item.avg_speed }}</td>
                                        <td>{{ item.max_speed }}</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute();

const formItems = ref([])

onMounted(async () => {
    const video_filename = route.params.video_filename

    const response = await axios.get(`http://localhost:8000/api/vehicle/vehicle/${video_filename}`)
    formItems.value = response.data
})

</script>

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
</style>