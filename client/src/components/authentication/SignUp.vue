<template>
   <form id="SignUp-main-container" action="/signup" method="POST">
      <label for="name">Name</label>
      <input v-model="name" type="text" name="sign-up-name" id="sign-up-name">
      <label for="email">Email address</label>
      <input v-model="email" type="email" name="sign-up-email" id="sign-up-email">
      <label for="password">Password</label>
      <input v-model="password" type="password" name="sign-up-password" id="sign-up-password">
      <button  @click="signUp">Sign Up</button>
      <div>Already a member?
        <p class="clickable" @click="$emit('clicked')">Log In</p>
      </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
export default Vue.extend({
    name:'SignUp',
    data(){
      return{
        name:'' as string,
        email:'' as string,
        password:'' as string,
      }
    } ,
    methods:{
      signUp(): void{
        if (this.name && this.email && this.password) {
         axios.post('http://localhost:3003/signup',{
             name:this.name,
             email:this.email,
             password: this.password
           }
         ).then(res=>console.log(res)).catch(err=>console.error(err))
        }
}
    }
  })
</script>

<style lang="scss">
 #SignUp-main-container{
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
