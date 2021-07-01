<template>
  <div class="container">
    <div>
      <Logo />
      <!-- Logo image credit: https://decaljunky.com/pretty-sheltie-collie-head-decals/ -->
      <h1 class="title">samislost.com</h1>
      <div class="links">
        <a
          href="https://github.com/adejeffchen/sam-is-lost/blob/main/README.md"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation |&nbsp;
        </a>
        <a
          href="https://github.com/adejeffchen/sam-is-lost/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <div class="credits">
        <p>Credit:&nbsp;</p>
        <a href="https://github.com/bradtraversy/nuxt_dadjokes">
          starter code for project |&nbsp;
        </a>
        <a href="https://decaljunky.com/pretty-sheltie-collie-head-decals/">
          line art logo
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {};
console.log(Vue.version);
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.credits {
  padding-top: 45px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

