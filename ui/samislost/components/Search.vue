<template>
    <div class="search">
        <form action="">
            <!-- Load icon library -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <!-- <label for="searchTerm">Search</label> -->
            <input type="text" id="search_query" name="q" placeholder="Search something" size="20" />
            <button type="submit"><i class="fa fa-search"></i></button>
        </form>
    </div>
</template>

<script>
export default {
  name: "search",
};
import '../assets/style.css'
</script>