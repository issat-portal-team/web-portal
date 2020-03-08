<template>
  <form id="LogIn-main-container" action="/login" method="POST">
      <label for="email">Email address</label>
      <input v-model="email" type="email" name="email" id="email">
      <label for="password">Password</label>
      <input v-model="password" type="password" name="password" id="password">
      <button type="submit">Log In</button>
      <div>Not a member?
        <p class="clickable" @click="$emit('clicked')">Sign Up</p>
      </div>
  </form>
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
      logIn(): null{
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
  .clickable{
    color: blue;
    cursor: pointer;
    &:hover{
      text-decoration: underline;
    }
  }
</style>