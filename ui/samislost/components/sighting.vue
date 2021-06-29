<template>
  <div class="sighting">
    <p>{{ sighting }}</p>
  </div>
</template>

<script>
export default {
  name: "sighting",
  props: ["id", "sightingTime", "description"],
};
</script>

<style scoped>
.sighting {
  padding: 1rem;
  border: 1px dotted #ccc;
  margin: 1rem 0;
}
</style>
