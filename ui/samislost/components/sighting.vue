<template>
  <div class="sighting">
    <div class="sightingTitle">
      {{ title }}
    </div>
    <p>Type: {{ type }}</p>
    <p>Location: {{ location }}</p>
    <p><a href="#">See detail ></a></p>
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

<style scoped>
.sighting {
  padding: 1rem;
  border: 1px dotted #ccc;
  margin: 1rem 0;
}
.sightingTitle {
  font-size: 22px;
}

a {
  color: blue;
  background-color: white;
  text-decoration: underline;
  text-underline-position: below;
}
</style>
