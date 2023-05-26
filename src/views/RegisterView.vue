<script setup>
import { useRouter } from 'vue-router';
import { reactive, ref } from 'vue';
import axios from 'axios';

const handleSubmit = async () => {
    console.log(data)
    try {
        const res = await axios.post('accounts/register/', data);
        console.log(res);
        useRouter().push('/login');
    } catch (err) {
        console.log(err);
        errMsg.value = err.response.data.username
    }

}

const errMsg = ref("");
const data = reactive({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    // confirm_pwd: "",
});
</script>

<template>
    <div class="auth-wrapper">
    <div class="auth-inner">
            <form @submit.prevent="handleSubmit">
                <h3>Sign Up to Aerial Highway System</h3>
                <p class="err-msg">{{ errMsg }}</p>
                <div class="form-group">
                    <label>First name</label>
                    <input type="text" class="form-control" v-model="data.first_name" placeholder="Steve" required />
                </div>
                <div class="form-group">
                    <label>Last name</label>
                    <input type="text" class="form-control" v-model="data.last_name" placeholder="Waltson" required />
                </div>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" v-model="data.username" placeholder="steve886waltson"
                        required />
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="data.email" placeholder="example@aerialhighway.com"
                        required />
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" v-model="data.password" placeholder="Password" required />
                </div>
                <!-- <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" class="form-control" v-model="data.confirm_pwd" placeholder="Confirm Password" />
            </div> -->

                <button class="btn btn-primary btn-block">Sign Up!</button>
            </form>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.err-msg {
    margin-top: 6px;
    font-size: 12px;
    text-align: center;
    color: red;
}
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
