<template>
  <section class="section">
    <div class="title title-left">News</div>
    <div v-if="checkNewsList">
      <div v-for="news in newsList" :key="news.id">
        <NewsCard :news="news" />
      </div>
      <div v-if="canLoadMore">
        <LoadNews :loading="loading" @loadMoreNews="loadMoreNews" />
      </div>
    </div>
    <div v-else>
      <NoNewsCard />
    </div>
    <hr v-if="!canLoadMore" style="height:2px;border-width:0;color:gray;background-color:gray"/>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { getNews } from "../api/news";
import NewsCard from "../components/news/NewsCard.vue";
import NoNewsCard from "../components/news/NoNewsCard.vue";
import LoadNews from "../components/news/LoadNews.vue";
//import { News } from "../models/news";

const newsNumberEachLoad = 10;
export default Vue.extend({
  name: "News",
  components: {
    NewsCard,
    NoNewsCard,
    LoadNews
  },
  data() {
    return {
      newsList: [] as any[], //eslint-disable-line
      page: 0 as number,
      canLoadMore: true as boolean,
      loading: false as boolean
    };
  },
  async created() {
    const { data } = await getNews(0);
    const { news } = data;
    if (news.length < newsNumberEachLoad) {
      this.canLoadMore = false;
    }
    this.newsList = news;
  },
  computed: {
    checkNewsList(): boolean {
      if (this.newsList.length === 0) return false;
      else return true;
    }
  },
  methods: {
    loadMoreNews() {
      this.loading = true;
      this.page++;
      getNews(this.page).then(({ data }) => {
        const { news } = data;
        if (news.length < newsNumberEachLoad)
        {
          this.canLoadMore = false;
          this.newsList.push(...news);
          this.loading = false;
        }
      });
    }
  }
});
</script>

<style lang="scss">
.title-left {
  text-align: left;
}
</style>
