<template>
  <div id="SignUp-main-container">
      <label for="Name">Name</label>
      <input v-model="name" type="text" name="name" id="name">
      <label for="email">Email address</label>
      <input v-model="email" type="email" name="email" id="email">
      <label for="password">Password</label>
      <input v-model="password" type="password" name="password" id="password">
      <button type="submit" @click="signUp">Log In</button>
      <div>Already a member?
        <a>Log In</a>
      </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'SignUp' as string,
    data(){
      return{
        name:'' as string,
        email : '' as string,
        password : '' as string
      }
    } ,
    methods:{
      signUp(): void{
        return null;
      }
    }
  })
</script>

<style lang="scss">
  #SignUp-main-container{
    display: flex;
    flex-direction: column;
  }
</style>