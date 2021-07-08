<template>
  <div>
    <search v-on:search-text="searchText"/>    
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
import search from "../components/Search.vue";

export default {
  components: {
    reportedSighting,
    search,
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
      const res = await axios.get("https://samislost-json-server-sotyz.ondigitalocean.app/sightings", config);
      this.sightingsData = res.data;
    } catch (err) {
      console.log(err);
    }
  },
   methods: {
    async searchText(text) {
      const config = {
        headers: {
          Accept: "application/json"
        }
      };
      try {
        const res = await axios.get(
          `https://samislost-json-server-sotyz.ondigitalocean.app/sightings?q=${text}`,
          config
        );
        this.sightingsData = res.data;
      } catch (err) {
        console.log(err);
      }
    }
  },
  head() {
    return {
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
