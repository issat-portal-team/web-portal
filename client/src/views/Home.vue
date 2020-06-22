<template>
  <div class="home">
  <b-navbar>
        <template slot="start">
            <b-navbar-item href="/">
                Home
            </b-navbar-item>
            <b-navbar-item href="/Library">
                Library
            </b-navbar-item>
            <b-navbar-item href="/">
                Browse
            </b-navbar-item>
            <b-navbar-item href="/book">
                Random
            </b-navbar-item>
        </template>

        <template slot="end">
        </template>
    </b-navbar>
    <div class="columns">
      <div class="column is-one-quarter"></div>
      <div class="column">
        <search-bar />
        </div>

        <div class="column" id="user">

        <AuthTestCheck />

      </div>
    </div>
    <div class="card" id="book">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">

        <div class="media-content">
          <p class="title is-4" id="title">SpongeBob Comics: Book 3: Tales from the Haunted Pineapple</p>
          <p class="subtitle is-6">Stephen Hillenburg</p>
          <p class="subtitle is-6">Pages : 150 p</p>
        </div>
      </div>

      <div class="content">
        Who lives in a pineapple under the sea? SpongeBob SquarePants! SpongeBob Comics: Tales from the Haunted Pineapple is the third collection of previously published material specially curated by SpongeBob creator Stephen Hillenburg. Tales from the Haunted Pineapple includes more than 15 short, self-contained stories by some of the biggest comics creators in the industry. These original stories feature all the fan favorites—from Patrick and Squidward to Sandy and Mr. Krabs—in original adventures you won’t see on television. Best of all, this book includes stories with spooky themes just in time for Halloween.
        <br>
        <time datetime="2016-1-1">August 15, 2017</time>
      </div>
    </div>
    </div>

    <div id="news">
    <News />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AuthTestCheck from "@/components/authentication/AuthTestCheck.vue";
import SearchBar from "@/components/SearchBar.vue";
import News from "@/components/news/News.vue";

export default {
  name: "Home",
  components: {
    AuthTestCheck,
    SearchBar,
    News
  }
};
</script>
<style>
#news{
display:block;
width:100%;
height:365px;
overflow:hidden;
}
#book{
display: auto;
  width: 250px;
  overflow: auto;
  position:auto;
  text-overflow: ellipsis;
  flex-shrink: 1;
}
#title{
flex-shrink: 1;
}
</style>
