<template>
  <div class="home">
    <div class="columns">
      <div class="column is-three-quarters">
        <strong>ISSAT PORTAL :)</strong>
      </div>
      <div class="column">
        <AuthTestCheck />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AuthTestCheck from "@/components/authentication/AuthTestCheck.vue";

export default {
  name: "Home",
  components: {
    AuthTestCheck
  }
};
</script>
