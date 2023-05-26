<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
onMounted(async() => {
    const response = await axios.post("accounts/getuser/", {
        token: localStorage.getItem('token')
    })
    console.log(response)
    userName.value = response.data.username
    is_loggedin.value = true
})

const is_loggedin = ref(false)
const userName = ref("")
</script>

<template>
    <div>
        <h1 style="text-align: center">Aerial Highway System</h1>
        <h3 v-if="!is_loggedin">You are not logged in.</h3> 
        <h3 v-if="is_loggedin">Hi, {{ userName }}</h3> 
        <p v-if="is_loggedin">This is a system for highway management office to monitor status using drones. <br/> 
            We provide functions like speed calculation, traffic analysis and so on.<br/>
            Click on Detections for video input, and click Data for history data analysis.</p> 
    </div>
</template>



<style lang="scss" scoped>
</style>