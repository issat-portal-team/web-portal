<template>
  <div v-if="loggedIn">
    <h1>Hello you are {{profile.username}}</h1>
    <h2>Your email is {{profile.email}}</h2>
    <input type="button" value="disconnect" @click="logout" />
  </div>
  <div v-else>
    <h1>Hello you are a new user</h1>
    <input type="button" value="login" @click="goToLogin" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { UserModule } from "../../store/modules/user";

export interface Profile {
  username: string;
  email: string;
}

export default Vue.extend({
  name: "AuthTestCheck" as string,
  data() {
    return {
      profile: {
        username: "loading...",
        email: "loading..."
      } as Profile,
      loggedIn: false
    };
  },
  methods: {
    getUser(): Profile {
      return {
        username: UserModule.username,
        email: UserModule.email
      };
    },
    goToLogin() {
      this.$router.push(`/auth?redirect=${this.$route.fullPath}`);
    },
    logout() {
      UserModule.LogOut();
      this.$router.push(`/auth?redirect=${this.$route.fullPath}`);
    },
    checkLoggedIn(): boolean {
      const token = UserModule.token;
      if (token) {
        return true;
      }
      return false;
    }
  },
  created() {
    this.profile = this.getUser();
    this.loggedIn = this.checkLoggedIn();
  }
});
</script>

<style>
</style>