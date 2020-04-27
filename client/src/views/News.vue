<template>
  <section  class="section">
      <div class="title title-left">News</div>
      <NewsCard />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import NewsCard from '@/components/news/NewsCard.vue'
export default Vue.extend({
    name:'News',
    components:{NewsCard}

})
</script>

<style lang="scss">
    .title-left{
        text-align: left;
    }
</style>