<template>
    <div class="grid">
        <div v-for="item in list" :key="item.id" class="card">
        <img :src="item.imageLink" alt="Placeholder image">

        <div class="card-content">
            <div class="media">

            <div class="media-content">
                <p class="title is-4" id="title">{{item.title}}</p>
                <p class="subtitle is-6">{{item.author}}</p>
                <p class="subtitle is-6">Pages: {{pageCount}} page(s)</p>
            </div>
            </div>

            <div class="content">
            {{item.description}}
            <br>
            <time datetime="2016-1-1">August 15, 2017</time>
            </div>
        </div>
        </div>
    </div>
</template>

<script lang="ts">
import {bookRecommended} from '@/api/books'
import Vue from 'vue'
export default Vue.extend({
    name: 'suggestions',
    data(){
        return {
            loading: true,
            category: window.localStorage.getItem('category'),
            list: []
        }
    },
    async created() {
        const _category = this.category || this.getRandomCategory()
        const {data: _list} = await bookRecommended(_category)
        console.log(_list)
        this.list = _list;
        this.loading = false;
    },
    methods: {
        getRandomCategory () {
            const categories = ['fantasy', 'science', 'literature', 'fiction', 'biography', 'history']
            return categories[Math.floor(Math.random() * categories.length)]
        }
    }
})
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 5px;
  height: 5px;

  &:window-inactive, &:-moz-window-inactive {
    width: 3px;
    height: 3px;
  }
}

::-webkit-scrollbar-track {
  background-color: lightgray;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: lightslategray;
}

.grid {
    padding: 16px;
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-flow: condensed;
}

.card {
    background-color: #fff;
    border-radius: 6px;
    overflow-x: hidden;
    height: 400px;
    overflow-y:auto ;
    img {
        width: 100%;
        height: 200px;
        object-fit: contain;
    }
}
</style>