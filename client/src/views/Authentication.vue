<template>
  <div>
      <LogIn v-if="member" @clicked="member=!member"/>
      <SignUp v-else @clicked="member=!member"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LogIn from '@/components/authentication/LogIn.vue';
import SignUp from '@/components/authentication/SignUp.vue' ;

export default Vue.extend({
    name : 'Authentication',
    data(){
        return{
            member: true as boolean
        }
    },
    components : {
        LogIn,
        SignUp
    }
})
</script>

<style>

</style>