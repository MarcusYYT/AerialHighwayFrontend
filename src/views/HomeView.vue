<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios';
onMounted(async () => {
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
  <div class="auth-wrapper">
    <div class="auth-inner">
      <div>
        <!-- <img href="../assets/aerial_highway_logo.png"/> -->
        <h1 style="text-align: center">Aerial Highway System</h1>
        <h3 v-if="!is_loggedin">You are not logged in.</h3>
        <h3 v-if="is_loggedin">Hi, {{ userName }}</h3>
        <p v-if="is_loggedin">This is a system for highway management office to monitor status using drones. <br />
          We provide functions like speed calculation, traffic analysis and so on.<br />
          Click on Detections for video input, and click Data for history data analysis.</p>
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
    width: auto;
    margin: auto;
    background: rgba(255, 255, 255, 0.5);
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
