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
        <td class="right">{{sighting.entryDate}} {{sighting.entryTime}}</td>
      </tr>
      <tr>
        <td class="left">Sighted Date/Time</td>
        <td class="right">{{sighting.sightingDate}} {{ sighting.sightingTime }} {{ sighting.timeZone }}</td>
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
  </div>
</template>
<script>
export default {
  name: "detail",
  props: ["sighting"],
};
</script>,