<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios';

const uploadVideoFile = async (event) => {
    const file = videoFileInput.value.files[0];  // 获取文件
    let formData = new FormData();

    formData.append('file', file);  // 添加文件
    formData.append('drone_id', '1');  // 添加 drone_id

    // 发送 post 请求
    axios.post('http://127.0.0.1:8000/api/video/upload/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(response => {
            console.log(response);
            if (response.status === 201) {
                videoUploadStatus.value = { success: true, message: 'Upload successful!' }
                video_imported.value = true
            }
        })
        .catch(error => {
            console.error(error);
            videoUploadStatus.value = { success: false, message: 'Upload failed!' }
            video_imported.value = false
        });
}

const uploadSRTFile = async (event) => {
    const file = srtFileInput.value.files[0];  // 获取文件
    let formData = new FormData();

    formData.append('file', file);  // 添加文件
    console.log(isFileNamesMatch())
    if (isFileNamesMatch()) {
        // 发送 post 请求
        axios.post('http://127.0.0.1:8000/api/video/srtupload/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                console.log(response);
                if (response.status === 201) {
                    srtUploadStatus.value = { success: true, message: 'Upload successful!' }
                    srt_imported.value = true
                }
            })
            .catch(error => {
                console.error(error);
                srtUploadStatus.value = { success: false, message: 'Upload failed!' }
                srt_imported.value = false
            });
    }
    else {
        srtUploadStatus.value = { success: false, message: 'SRT & Video Mismatch!' }
        srt_imported.value = false
    }

}

// Handle file change event
const handleVideoFileChange = (event) => {
    const file = event.target.files[0]
    videoFileName.value = file ? file.name : ''
}
// Handle file change event
const handleSrtFileChange = (event) => {
    const file = event.target.files[0]
    srtFileName.value = file ? file.name : ''
}

const isFileNamesMatch = () => {
    const videoName = videoFileName.value.substring(0, videoFileName.value.lastIndexOf('.'));
    const srtName = srtFileName.value.substring(0, srtFileName.value.lastIndexOf('.'));

    return videoName === srtName;
}

const deployVehicle = async () => {
    const videoName = videoFileName.value;
    // 发送 post 请求
    axios.get(`http://localhost:8000/api/vehicle/deploy/${videoName}/`)
        .then(response => {
            console.log(response);
            if (response.status === 200) {
                deployStatus.value = { success: true, message: 'Deployment successful!' }
            }
        })
        .catch(error => {
            console.error(error);
            deployStatus.value = { success: false, message: 'Deployment failed!' }
        });
}


const matchVehicle = async () => {
    const videoName = videoFileName.value;
    // 发送 post 请求
    axios.get(`http://localhost:8000/api/vehicle/matchvehicle/${videoName}/`)
        .then(response => {
            console.log(response);
            if (response.status === 200) {
                matchStatus.value = { success: true, message: 'Vehicle match successful!' }
            }
        })
        .catch(error => {
            console.error(error);
            matchStatus.value = { success: false, message: 'Vehicle match failed!' }
        });
}

const calculateSpeed = async () => {
    const videoName = videoFileName.value;
    // 发送 post 请求
    axios.get(`http://localhost:8000/api/vehicle/calculatespeed/${videoName}/`)
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          speedCalcStatus.value = { success: true, message: 'Speed calculation successful!' }
        }
      })
      .catch(error => {
        console.error(error);
        speedCalcStatus.value = { success: false, message: 'Speed calculation failed!' }
      });
  }


const speedCalcStatus = ref(null) // To store the speed calculation status
const matchStatus = ref(null) // To store the match status
const deployStatus = ref(null) // To store the deployment status
const videoFileName = ref('') // To store the file name
const srtFileName = ref('') // To store the file name
const videoFileInput = ref(null)
const srtFileInput = ref(null)
const videoUploadStatus = ref(null)
const srtUploadStatus = ref(null)
const video_imported = ref(false)
const srt_imported = ref(false)
</script>


<template>
    <div class="auth-wrapper">
        <div class="auth-inner">
            <div class="container">
                <h1>Welcome to Detection Page.</h1>
                <h5>Here, we accept videos uploaded for vehicle detection. Upload the video file first, then SRT file
                    associated with the video, and follows the vehicle detection & tracking procedure. Finally, vehicle info
                    can be saved into database.</h5>
                <div class="row justify-content-center">
                    <div class="col-md-6 justify-content-around" style="flex: 0 0 100%; max-width:fit-content;">
                        <form @submit.prevent="uploadVideoFile">
                            <div class="form-group d-flex align-items-center">
                                <label for="file" class="mr-2" style="margin: 6px; padding: 6px 6px 6px">Please Select your
                                    DRONE VIDEO file Here:</label>
                                <input id="file" type="file" class="form-control-file mr-2" ref="videoFileInput"
                                    @change="handleVideoFileChange" style="max-width: 30%;" />
                                <button type="submit" class="btn btn-primary">Upload Video File</button>
                            </div>
                        </form>
                    </div>
                    <!-- Display the upload status -->
                    <div v-if="videoUploadStatus" class="alert"
                        :class="videoUploadStatus.success ? 'alert-success' : 'alert-danger'">
                        {{ videoUploadStatus.message }}
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-6 justify-content-around" style="flex: 0 0 100%; max-width:fit-content;">
                        <form @submit.prevent="uploadSRTFile">
                            <div class="form-group d-flex align-items-center">
                                <label for="file" class="mr-2" style="margin: 6px; padding: 6px 6px 6px">Please Select your
                                    video SRT file Here:</label>
                                <input id="file" type="file" class="form-control-file mr-2" ref="srtFileInput"
                                    @change="handleSrtFileChange" style="max-width: 30%;" />
                                <button type="submit" class="btn btn-primary">Upload SRT File</button>
                            </div>
                        </form>
                    </div>
                    <!-- Display the upload status -->
                    <div v-if="srtUploadStatus" class="alert"
                        :class="srtUploadStatus.success ? 'alert-success' : 'alert-danger'">
                        {{ srtUploadStatus.message }}
                    </div>
                </div>
                <h6>When filming, DJI records aircraft data as well. Real-time position, altitude, zoom ratio, timeslot and so on are recorded with EACH FRAME. It is the detailed data that pursues precision.</h6>
                <div class="row justify-content-center">
                    <div class="col-md-6 justify-content-around" style="flex: 0 0 100%; max-width:fit-content; padding: 8px;">
                        <button class="btn btn-primary" @click="deployVehicle">Deploy Vehicle Detection Algorithm</button>
                    </div>
                    <!-- Display the deployment status -->
                    <div v-if="deployStatus" class="alert" :class="deployStatus.success ? 'alert-success' : 'alert-danger'">
                        {{ deployStatus.message }}
                    </div>
                </div>
                <h6>In this step, we will deploy YOLO and deepSORT algorithm into the video you have uploaded. A window will pop up to show the detection and tracking status. After the video is processed, please allow seconds for the system to store data to database. We will store vehicle positions, vehicle track id and so on from EACH frame. It is huge data.</h6>
                <div class="row justify-content-center">
                    <div class="col-md-6 justify-content-around"
                        style="flex: 0 0 100%; max-width:fit-content; padding: 8px;">
                        <button class="btn btn-primary" @click="matchVehicle">Match Vehicle Detection</button>
                    </div>
                    <!-- Display the match status -->
                    <div v-if="matchStatus" class="alert" :class="matchStatus.success ? 'alert-success' : 'alert-danger'">
                        {{ matchStatus.message }}
                    </div>
                </div>
                <h6>In this step, we match the detection and tracking data into each vehicle. We define each vehicle by the unique track_id and vehicle filename. We store data for each vehicle by each frame, with its position. What is more, we also extract the frame of the vehicle from the middle of the frames, and crop it as a photo and store it into folder and link it by filename. We can also call this vehicle classification.</h6>
                <div class="row justify-content-center">
                    <div class="col-md-6 justify-content-around" style="flex: 0 0 100%; max-width:fit-content; padding: 8px">
                        <button class="btn btn-primary" @click="calculateSpeed">Calculate Vehicle Speed</button>
                    </div>
                    <!-- Display the speed calculation status -->
                    <div v-if="speedCalcStatus" class="alert"
                        :class="speedCalcStatus.success ? 'alert-success' : 'alert-danger'">
                        {{ speedCalcStatus.message }}
                    </div>
                </div>
                <h6>Last but not least, we calculate the speed for each vehicle.</h6>
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
</style>