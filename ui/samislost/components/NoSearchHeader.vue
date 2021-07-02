<template>
    <header class="header">
        <div class="title"><img src="../assets/Logo.jpg" height=100 width=100 />Sam is Lost</div>
        <ul>
        <li>
            <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/createEntry">Create Entry</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/about">About</nuxt-link>
        </li>
        </ul>
    </header>  
</template>
<script>
export default {
  name: "NoSearch",
};
import '../assets/style.css'
</script>