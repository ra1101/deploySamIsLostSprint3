<template>
  <div>
    <detail :sighting="sighting" />
    <br>
    <hr />
  </div>
</template>

<script>
import axios from "axios";
import detail from "../../../components/detail.vue";
export default {
  components: {
    detail,
  },
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
        'https://samislost-json-server-sotyz.ondigitalocean.app/sightings/' + routeId,
        config
      );
      this.sighting = res.data;
    } catch (err) {
      console.log(err);
    }
  },
  layout:'noSearch',
  head() {
    return {
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
