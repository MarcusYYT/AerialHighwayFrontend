<script setup>
import { RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
// import Home from './components/Home.vue'
import Login from './views/LoginView.vue'
</script>

<template>

  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  <RouterView /> -->
      <div id="app">
        <Nav />
        <!-- <nav class="navbar navbar-expand navbar-light fixed-top">
          <div class="container">
            <a href="#" class="navbar-brand">Home</a>
            <div class="collapse navbar-collapse">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a href="#" class="nav-link">Login</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">Sign up</a>
                </li>
              </ul>
            </div>
          </div>
        </nav> -->
        <RouterView/>
      </div>


  
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');
  * {
    box-sizing: border-box;
  }

  body {
    /* background: #1C8EF9 !important; */
    min-height: 100vh;
    display: flex;
    font-weight: 400;
    font-family: 'Fira Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, label, span {
    font-weight: 500;
    font-family: 'Fira Sans', sans-serif;
  }

  body, html, #app, #root, .auth-wrapper {
    width: 100%;
    height: 100%;
  }

  #app {
    text-align: center;
  }

  

  .custom-control-label {
    font-weight: 400;
  }

  .forgot-password,
  .forgot-password a {
    text-align: right;
    font-size: 2px;
    padding-top: 10px;
    color: #7f7d7d;
    margin: 0;
  }

  .forgot-password a {
    color: #167bff;
  }

/* header {
  line-height: 1.5;
  max-height: 100vh;
}  

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
} */

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
