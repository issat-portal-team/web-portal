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
              <img :src="`${props.option.imageLink}`" />
            </div>
            <div class="media-content">
              <span class="book-title">
                {{ props.option.title }}
                <span v-if="props.option.subtitle">-</span>
                {{ props.option.subtitle }}
              </span>
              <br />
              <small class="book-details">
                By
                <span v-if="props.option.authors">{{props.option.authors[0]}}</span>
                - Published at {{ props.option.publishedDate | dateFormat }}
                <span
                  v-if="props.option.pageCount"
                >
                  ,
                  <b>{{ props.option.pageCount }} page</b>
                </span>
              </small>
              <p v-if="props.option.description" class="book-p">{{ props.option.description }}</p>
            </div>
            <div class="media-right">
              <b-dropdown class="book-dropdown" aria-role="list" @click.native.stop>
                <button class="button is-primary" slot="trigger" slot-scope="{ active }">
                  <b-icon :icon="'plus'"></b-icon>
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
import moment from "moment";
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
          console.log(this.data);
        })
        .catch(error => {
          this.data = [];
          throw error;
        })
        .finally(() => {
          this.isFetching = false;
        });
    }, 500)
  },
  filters: {
    dateFormat: function(value: any) {
      const date = moment(String(value));
      if (date.isValid()) {
        return date.format("DD/MM/YYYY");
      } else return null;
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lora:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300&display=swap");
#main-book-search {
  margin-top: 20px;
}
.book-p {
  height: 128px;
  overflow-y: hidden;
  text-align: left;
  font-family: "Merriweather", serif;
}
.media-content {
  width: inherit;
  white-space: pre-wrap;
}
.add-list-item {
  display: flex;
}
.book-title {
  font-family: "Lora", serif;
  font-size: 1.2em;
}
.book-details {
  font-family: "Merriweather", serif;
  font-size: 1.1em;
}
.book-dropdown {
  min-width: 85px;
}
</style>
