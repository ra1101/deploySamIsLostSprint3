<template>
  <div>
    <reportedSighting
      v-for="s in sightingsData"
      :key="s.id"
      :id="s.id"
      :title="s.title"
      :type="s.type"
      :location="s.sightedLocation"
      :sightingDate="s.sightingDate"
      :sightingTime="s.sightingTime"
      :timeZone="s.timeZone"
    />
  </div>
</template>


<script>
import axios from "axios";
import reportedSighting from "../components/sighting.vue";

export default {
  components: {
    reportedSighting,
  },

  data() {
    return { sightingsData: [] };
  },

  async created() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get("https://samislost-json-server-sotyz.ondigitalocean.app/sightings",config);
      this.sightingsData = res.data;
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
