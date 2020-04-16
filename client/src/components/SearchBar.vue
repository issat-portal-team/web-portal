<template>
  <section>
    <b-field id="main-book-search">
      <b-autocomplete
        :data="data"
        placeholder="e.g. The Martian"
        field="title"
        :loading="isFetching"
        @typing="getAsyncData"
        size="is-medium"
        clearable
        max-height="700px"
        dropdown-position="bottom"
      >
        <template slot-scope="props">
          <div class="media">
            <div class="media-left">
              <img width="128" :src="`${props.option.imageLink}`" />
            </div>
            <div class="media-content">
              {{ props.option.title }}
              <span v-if="props.option.subtitle">-</span>
              {{ props.option.subtitle }}
              <br />
              <small>
                By
                <span v-if="props.option.authors">{{props.option.authors[0]}}</span>
                - Published at {{ props.option.publishedDate }},
                <b>{{ props.option.pageCount }} page</b>
              </small>
              <p class="book-p">{{ props.option.description }}</p>
            </div>
            <div class="media-right">
              <b-dropdown aria-role="list" @click.native.stop>
                <button class="button is-primary" slot="trigger" slot-scope="{ active }">
                  <span>Add To</span>
                  <b-icon :icon="active ? 'caret-up' : 'caret-down'"></b-icon>
                </button>
                <b-dropdown-item class="add-list-item" aria-role="listitem">Read</b-dropdown-item>
                <b-dropdown-item class="add-list-item" aria-role="listitem">Reading</b-dropdown-item>
                <b-dropdown-item class="add-list-item" aria-role="listitem">Finished</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </template>
      </b-autocomplete>
    </b-field>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import debounce from "lodash/debounce";
import { bookSearch } from "../api/books";

export default Vue.extend({
  name: "BookSearchBar" as string,
  data() {
    return {
      data: [],
      selected: null,
      isFetching: false,
      active: false
    };
  },
  methods: {
    getAsyncData: debounce(function(this: any, name) {
      if (!name.length) {
        this.data = [];
        return;
      }
      this.isFetching = true;
      bookSearch(name)
        .then(res => {
          this.data = [];
          res.data.forEach((item: any) => this.data.push(item));
        })
        .catch(error => {
          this.data = [];
          throw error;
        })
        .finally(() => {
          this.isFetching = false;
        });
    }, 500),
    addBtnClick(event: Event) {
      event.stopPropagation();
      console.log("hey");
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#main-book-search {
  margin-top: 20px;
}
.book-p {
  width: inherit; /* width: 100px; */
  white-space: pre-wrap;
  height: 128px;
  overflow-y: hidden;
}
.add-list-item {
  display: flex;
}
</style>
