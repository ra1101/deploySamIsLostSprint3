<template>
  <div class="sighting">
    <div class="sightingTitle">
      {{ title }}
    </div>
    <p>Type: {{ type }}</p>
    <p>Location: {{ location }}</p>
    <p class="link"><nuxt-link :to="'list/' + id">See detail ></nuxt-link></p>
  </div>
</template>
//<a v-bind:href="url">{{ url }}{{ title }} </a>
<script>
export default {
  name: "reportedSighting",
  props: ["id", "title", "type", "location"],
};
</script>,

// data() {
//   return {
//     url: "http://localhost:3004/sightings"
//   }
// }


