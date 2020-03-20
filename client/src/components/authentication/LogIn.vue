<template>
  <div id="LogIn-main-container" >
      <label for="email">Email address</label>
      <input v-model="email" type="email" name="email" id="email">
      <label for="password">Password</label>
      <input v-model="password" type="password" name="password" id="password">
      <button  @click="logIn">Log In</button>
      <div>Not a member?
        <p class="clickable" @click="$emit('clicked')">Sign Up</p>
      </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import axios from 'axios'
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
        if (this.email && this.password) {
         axios.post('http://localhost:3003/login',{
           body:{
             email:this.email,
             password: this.password
           }
         }).then(res=>console.log(res)).catch(err=>console.error(err))
        }
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