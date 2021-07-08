<template>
  <div class="sighting">
    <table class="Table">
      <tr>
        <td class="left">Title</td>
        <td class="right"><input type="text" size="70%" v-model="form.title" required/></td>
      </tr>
      <tr>
        <td class="left">Sighting Date</td>
        <td class="right"><input type="date" v-model="form.sightingDate" required></td>
      </tr>
      <tr>
        <td class="left">Sighting Time</td>
        <td class="right"><input type="time" v-model="form.sightingTime" required></td>
      </tr>
      <tr>
        <td class="left">Sighted Location</td>
        <td class="right"><input type="text" size="90%" v-model="form.sightedLocation" required/></td>
      </tr>
      <tr>
        <td class="left">Current Location</td>
        <td class="right"><input type="text" size="90%" v-model="form.currentLocation" required/></td>
      </tr>
      <tr>
        <td class="left">Description</td>
        <td class="right"><textarea cols="40" rows="5" v-model="form.description" required/></td>
      </tr>
      <tr>
        <td class="left">Type</td>
        <td class="right">
          <select id="type" v-model="form.type" required>
            <option v-for="option in options" v-bind:key="option" v-bind:value="option.value">
                {{ option.text }}
            </option>
          </select>
        </td>
      </tr>
      <br/><br/>
      <tr>        
        <td colspan="2" class="right"><button v-on:click="submit()">Submit</button></td>
      </tr>
    </table>
    
    <span>{{sid}}</span>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
    
    data(){
        return {
            form: {
                title: '',
                sightingDate: '',
                sightingTime: '',
                timeZone: 'America/New_York',
                sightedLocation: '',
                currentLocation: '',
                description: '',
                type: '',
                entryDate: moment().format('MM-DD-YYYY'),
                entryTime: moment().format('h:mm a')
            },
            sid: '',
            options: [
                { text: 'dog', value: 'dog' },
                { text: 'cat', value: 'cat' },
                { text: 'bird', value: 'bird' },
                { text: 'reptile', value: 'reptile' },
                { text: 'wolf', value: 'wolf' },
                { text: 'other', value: 'other' }
            ]
        }
    },

    methods: {
        submit(){
            if (this.form.type == '' || this.form.title == '' || 
                this.form.sightingDate == '' || this.form.sightingTime == '' || 
                this.form.sightedLocation == '' || this.form.currentLocation == '' || 
                this.form.description == ''){
              window.alert("All fields are required");
              return false;
            }

            axios.post('http://localhost:3004/sightings', this.form)
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