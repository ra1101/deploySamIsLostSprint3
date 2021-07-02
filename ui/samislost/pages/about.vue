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
        Credit:&nbsp;
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

export default {
  layout:'noSearch',
};
console.log(Vue.version);
</script>


