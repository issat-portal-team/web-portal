<template>
  <div id="LogIn-main-container">
      <label for="email">Email address</label>
      <input v-model="email" type="email" name="email" id="email">
      <label for="password">Password</label>
      <input v-model="password" type="password" name="password" id="password">
      <button type="submit" @click="logIn">Log In</button>
      <div>Not a member?
        <a>Sign Up</a>
      </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'LogIn' as string,
    data(){
      return{
        email : '' as string,
        password : '' as string
      }
    } ,
    methods:{
      logIn(): void{
        return null;
      }
    }
  })
</script>

<style lang="scss">
  #LogIn-main-container{
    display: flex;
    flex-direction: column;
  }
</style>