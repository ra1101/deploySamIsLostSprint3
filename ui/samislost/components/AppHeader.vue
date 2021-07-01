<template>
  <header class="header">
    <h1 class="title"><img src="../assets/Logo.jpg" height=100 width=100 />Sam is Lost</h1>
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

    <div>
      <p>
        <label for="searchTerm">Search</label>
        <input type="text" size="20" />
      </p>
    </div>
   
    <ul>
      <li>
        <nuxt-link to="/list">List View</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/map">Map View</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
import '../assets/style.css'
</script>