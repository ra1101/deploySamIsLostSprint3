<template>
  <form>
    <label><b>Type: </b></label>
    <select v-model="sightingEntryForm.type">
      <option disabled value="">Please select one</option>
      <option>Dog</option>
      <option>Cat</option>
      <option>Bird</option>
      <option>Reptile</option>
      <option>Wolf</option>
      <option>Other</option>
    </select>
    <br><br>

    <label><b>Sighting Date: </b></label>
    <input type="date" v-model="sightingEntryForm.sightingDate">
    <br><br>

    <label><b>Sighting Time: </b></label>
    <input type="time" v-model="sightingEntryForm.sightingTime">
    <br><br>

    <label><b>Sighted Location: </b></label>
    <input type="text"  v-model="sightingEntryForm.sightedLocation">
    <br><br>

    <label><b>Current Location: </b></label>
    <input type="text" v-model="sightingEntryForm.currentLocation">
    <br><br>

    <label><b>Title: </b></label>
    <input type="text" v-model="sightingEntryForm.title">
    <br><br>


    <label><b>Description: </b></label>
    <input type="text" v-model="sightingEntryForm.description"><br>

    <button v-on:click="submit()">Submit</button>
  </form>

</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  
    data(){ 
        return {
            sightingEntryForm: {
              type: '',
              sightingDate: '',
              sightingTime: '',
              sightedLocation: '',
              currentLocation: '',
              title: '',
              description: '',
              entryDate: moment().format('MM-DD-YYYY'),
              entryTime: moment().format('h:mm a')
            },
            sid: '',
        }
    },

    methods: {
        submit(){
            axios.post('http://localhost:3004/sightings', this.sightingEntryForm)
                .then(function(res){
                    this.sid = res.data.id
                    window.alert("Entry submitted successfully")
                    window.location.href = `list/${this.sid}`
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