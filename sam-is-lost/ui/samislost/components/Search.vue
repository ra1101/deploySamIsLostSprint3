<template>
    <div class="search">
        <form @submit.prevent="onSubmit">
            <!-- Load icon library -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <!-- <label for="searchTerm">Search</label> -->
            <input type="text" v-model="text" id="search_query" placeholder="Search something" size="20" />
            <button type="submit"><i class="fa fa-search"></i></button>
        </form>
    </div>
</template>

<script>
export default {
  name: "search",
data() {
    return {
      text: ""
    };
  },
  methods: {
    onSubmit() {
      this.$emit("search-text", this.text);
      this.text = "";
    }
  }
};
import '../assets/style.css'
</script>