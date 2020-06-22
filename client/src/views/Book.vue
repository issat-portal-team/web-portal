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
            <p class="title is-4">SpongeBob Comics: Book 3: Tales from the Haunted Pineapple</p>
            <p class="subtitle is-6">Stephen Hillenburg</p>
            <p class="subtitle is-6">Pages : 150 p</p>
          </div>
        </div>

        <div class="content">
          Who lives in a pineapple under the sea? SpongeBob SquarePants! SpongeBob Comics: Tales from the Haunted Pineapple is the third collection of previously published material specially curated by SpongeBob creator Stephen Hillenburg. Tales from the Haunted Pineapple includes more than 15 short, self-contained stories by some of the biggest comics creators in the industry. These original stories feature all the fan favorites—from Patrick and Squidward to Sandy and Mr. Krabs—in original adventures you won’t see on television. Best of all, this book includes stories with spooky themes just in time for Halloween.
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
              <p class="title is-4">Theory about the tragic death of spongebob</p>
              <p class="subtitle is-6">published by johnsmith 11:09 PM - 1 Jan 2016</p>
            </div>
          </div>

          <div
            class="content"
          >the son of a bitch is faking it , he's an attention whore just like his dead mother</div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">The scandalous love affair of spongebob</p>
              <p class="subtitle is-6">published by johnsmith 11:09 PM - 1 Jan 2016</p>
            </div>
          </div>

          <div
            class="content"
          >spongebob caught making love to patrick in the dumpster where he belongs</div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">10 reasons why spongebob is secretly a pedophile</p>
              <p class="subtitle is-6">published by johnsmith 11:09 PM - 1 Jan 2016</p>
            </div>
          </div>

          <div class="content">check my website www.spongebobfuckskids.com</div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">Spongebob and racism</p>
              <p class="subtitle is-6">published by johnsmith 11:09 PM - 1 Jan 2016</p>
            </div>
          </div>

          <div class="content">his lack of black friends is suspicious</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Book"
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
