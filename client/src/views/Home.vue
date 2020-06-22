<template>
  <div class="home">
    <div class="columns">
      <div class="column is-one-quarter"></div>
      <div class="column"></div>
    </div>
    <AuthTestCheck/>
    <suggestion />

    <div id="news">
      <News />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AuthTestCheck from '@/components/authentication/AuthTestCheck.vue'
import News from "@/components/news/News.vue";
import Suggestion from "@/components/Suggestion.vue";
export default {
  name: "Home",
  components: {
    News,
    Suggestion,
    AuthTestCheck
  }
};
</script>
<style>
#news {
  display: block;
  width: 100%;
  height: 365px;
  overflow: hidden;
}
#book {
  display: auto;
  width: 250px;
  overflow: auto;
  position: auto;
  text-overflow: ellipsis;
  flex-shrink: 1;
}
#title {
  flex-shrink: 1;
}
</style>
