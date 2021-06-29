<template>
  <div>
    <sighting
      v-for="sighting in sightings"
      :key="sighting.id"
      :id="sighting.id"
      :sighting="sighting.description"
    />
  </div>
</template>

<script>
import axios from "axios";
import sighting from "../../components/sighting.vue";

export default {
  components: {
    sighting,
  },

  data() {
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
      const res = await axios.get("http://localhost:3004/sightings", config);
      console.log(res.data);
      this.sightings = res.data.results;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {},
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
