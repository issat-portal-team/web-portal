<template>
  <div class="card">
    <div class="card-content card-content-left title is-5">{{news.title}}</div>
    <div class="card-footer flex-display">
      <div class="source-left">{{news.source}}</div>
      <div class="time-right">{{news.publishedDate | formatDate | dashToMinus}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
//import { News } from "../../models/news";
export default Vue.extend({
  name: "NewsCard" as string,
  props: ["news"],
  filters: {
    formatDate(date: string) {
      if (!date) return "";
      const timeStamp: number = Date.parse(date);
      const formattedDate: Date = new Date(timeStamp);
      return formattedDate.toLocaleDateString();
    },

    dashToMinus(date: string){
      if (!date) return "";
      return date.split('/').join('-')
    }
  }
});
</script>

<style lang="scss">
.card-content-left {
  text-align: start;
}
.source-left {
  text-align: left;
}
.time-right {
  text-align: end;
}
.flex-display {
  justify-content: space-between;
}
</style>