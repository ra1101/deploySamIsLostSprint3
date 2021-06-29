<template>
  <div>
    <h2>Welcome to samislost, identifying lost animals</h2>
    <p>Animal Sightings List</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  date() {
    return {
      sightings: [],
    };
  },
  async created() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get("http:localhost:3004/sightings", config);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  },
  head() {
    return {
      title: "List of Recent Sightings",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best way to get animals back home",
        },
      ],
    };
  },
};
</script>

<style>
</style>
