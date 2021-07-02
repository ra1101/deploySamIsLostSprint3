<template>
  <div>
    <table class="Table">
      <tr>
        <th>{{ sighting.title }}</th>
      </tr>
      <tr>
        <td class="left">Type</td>
        <td class="right">{{ sighting.type }}</td>
      </tr>      
      <tr>
        <td class="left">Entry Date/Time</td>
        <td class="right">{{sighting.entryDate}} {{ sighting.entryTime }}</td>
      </tr>
      <tr>
        <td class="left">Sighted Date/Time</td>
        <td class="right">{{sighting.sightingDate}} {{ sighting.sightingTime }} {{sighting.timeZone}}</td>
      </tr>
      <tr>
        <td class="left">Sighted Location</td>
        <td class="right">{{ sighting.sightedLocation }}</td>
      </tr>      
      <tr>
        <td class="left">Current Location</td>
        <td class="right">{{ sighting.currentLocation }}</td>
      </tr>
      <tr>
        <td class="left">Description</td>
        <td class="right">{{ sighting.description }}</td>
      </tr>
    </table>
    <br>
    <hr />
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
    const routeId = this.$route.params.id;
    try {
      const res = await axios.get(
        'http://localhost:3004/sightings/' + routeId,
        config
      );
      this.sighting = res.data;
    } catch (err) {
      console.log(err);
    }
  },
  head() {
    return {
      title: this.sighting.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best way to get animals back home"
        }
      ]
    };
  }
};
</script>
