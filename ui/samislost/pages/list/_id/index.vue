<template>
  <div>
    <nuxt-link to="/list">Back to sightings</nuxt-link>
    <h2>{{ sighting }}</h2>
    <hr />
    <small>Sighting ID: {{ $route.params.id }}</small>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      sighting: {},
    };
  },
  async created() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.get(
        "http://localhost:3004/s/${this.$route.params.id}",
        config
      );

      this.sighting = res.data.sighting;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

