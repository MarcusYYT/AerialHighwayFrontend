<script setup>
import { reactive, onMounted } from 'vue'
import axios from 'axios'
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
watch(route, (newRoute, oldRoute) => {
    checkLogin()
})

onMounted(async () => {
    checkLogin()
})


const checkLogin = async () => {
    try {
        const response = await axios.post("accounts/getuser/", {
            token: localStorage.getItem('token')
        })
        console.log(response)
        userName.username = response.data.username
        userName.is_loggedin = true
        console.log("username:", userName.username)
    } catch (err) {
        console.log(err)
        userName.is_loggedin = false
    }
}
const logOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('token_refresh')
    console.log("logged out")
    checkLogin
    router.push("/login")
}

const userName = reactive({
    username: "",
    is_loggedin: false,
});
</script>

<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
        <div class="container">
            <RouterLink to="/" class="navbar-brand">Home</RouterLink>
            <div class="collapse navbar-collapse">
                <div v-if="userName.is_loggedin" class="navbar-nav">
                    <RouterLink to="detection" class="nav-link">Detections</RouterLink>
                    <RouterLink to="data" class="nav-link">Data</RouterLink>
                </div>
                <ul v-if="userName.is_loggedin" class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <p class="nav-link disabled" style="margin: 0;">Welcome, {{ userName.username }}</p>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="login" @click="logOut" class="nav-link">Log Out</RouterLink>
                    </li>
                </ul>
                <ul v-else class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <RouterLink to="login" class="nav-link">Login</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="register" class="nav-link">Sign up</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>



<style lang="scss" scoped>
.navbar-light {
    background: rgba(255, 255, 255);
    backdrop-filter: blur(20px);
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 1);
}
</style>