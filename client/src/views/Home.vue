<template>
  <div class="home">
    <strong>ISSAT PORTAL :)</strong>
    <AuthTestCheck />
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
