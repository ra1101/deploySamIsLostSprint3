<template>
    <div class="container">
        <label>Title</label>
        <input type="text" v-model="form.title"/>
        <label>Sighted Location</label>
        <input type="text" v-model="form.sightedLocation"/>
        <label>Current Location</label>
        <input type="text" v-model="form.currentLocation"/>
        <label>Description</label>
        <input type="text" v-model="form.description"/>

        <button v-on:click="submit()">Submit</button>
        <span>{{sid}}</span>
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
            },
            sid: ''
        }
    },

    methods: {
        submit(){
            axios.post('http://localhost:3004/sightings', this.form)
                .then(function(res){
                    this.sid = res.data.id
                }.bind(this));
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