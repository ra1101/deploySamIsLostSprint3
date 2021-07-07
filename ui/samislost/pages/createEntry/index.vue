<template>
    <div>
        <label>Title</label>
        <input type="text" v-model="form.title"/>
        <label>Sighted Location</label>
        <input type="text" v-model="form.sightedLocation"/>
        <label>Current Location</label>
        <input type="text" v-model="form.currentLocation"/>
        <label>Description</label>
        <input type="text" v-model="form.description"/>

        <button v-on:click="submit()">Submit</button>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return {
            form: {
                title: '',
                sightedLocation: '',
                currentLocation: '',
                description: ''
            }
        }
    },

    methods: {
        submit(){
            axios.post('http://localhost:3004/sighting', this.form)
                .then(function( ){
                    // Handle success
                    return true
                }.bind(this));
        }
    },
  head() {
    return {
      title: "SamIsLost New Sighting",
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