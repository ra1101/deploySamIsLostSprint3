<template>
  <div class="sighting">
    <p>{{ title }}</p>
  </div>
</template>
//<a v-bind:href="url">{{ url }}{{ title }} </a>
<script>
export default {
  name: "reportedSighting",
  props: ["id", "title"],
};
</script>,

// data() {
//   return {
//     url: "http://localhost:3004/sightings"
//   }
// }

<style scoped>
.sighting {
  padding: 1rem;
  border: 1px dotted #ccc;
  margin: 1rem 0;
}
</style>
