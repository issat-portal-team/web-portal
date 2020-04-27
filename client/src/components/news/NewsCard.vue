<template>
  <div class="card">
    <div
      class="card-content card-content-left title is-5"
    >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum beatae esse dolorum, similique odit sapiente?</div>
    <div class="card-footer">
      <div class="source-left">
        New York Times
      </div>
      <div class="time-right">12.06.2020</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:'NewsCard'
})
</script>

<style lang="scss">
  .card-content-left{
    text-align: start;
  }
  .source-left{
    text-align: left;
  }
  .time-right{
    text-align: end;
  }
</style>