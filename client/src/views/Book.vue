<template>
  <div id="cont">
    <div class="card" id="book">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{bookId}}</p>
            <p class="subtitle is-6">Stephen Hillenburg</p>
            <p class="subtitle is-6">Pages : 150 p</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          <time datetime="2016-1-1">August 15, 2017</time>
        </div>
      </div>
    </div>
    <div id="thread">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p
                class="title is-4"
              >Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p class="subtitle is-6">published by johnsmith 11:09 PM - 1 Jan 2016</p>
            </div>
          </div>

          <div
            class="content"
          >Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">Duis aute irure dolor in reprehenderit</p>
              <p class="subtitle is-6">published by johnsmith 11:09 PM - 1 Jan 2016</p>
            </div>
          </div>

          <div class="content">Quis hendrerit dolor magna eget est lorem ipsum.</div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">A arcu cursus vitae congue mauris rhoncus aenean</p>
              <p class="subtitle is-6">published by johnsmith 11:09 PM - 1 Jan 2016</p>
            </div>
          </div>

          <div
            class="content"
          >Elit eget gravida cum sociis natoque penatibus et. A arcu cursus vitae congue mauris rhoncus aenean</div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">Lectus quam id leo in vitae turpis massa.</p>
              <p class="subtitle is-6">published by johnsmith 11:09 PM - 1 Jan 2016</p>
            </div>
          </div>

          <div class="content">Imperdiet dui accumsan sit amet nulla facilisi.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Book",
  props: ["book"]
};
</script>

<style>
#book {
  width: 500px;
  height: fit-content;
  padding: 20px;
  margin: 50px;
}
#thread {
  width: 1600px;
  padding: 20px;
  margin: 50px;
}
#cont {
  display: flex;
}
</style>
