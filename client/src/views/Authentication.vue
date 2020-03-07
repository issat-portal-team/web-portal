<template>
  <div>
      auth :)
      <LogIn/>
      <SignUp/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LogIn from '@/components/authentication/LogIn.vue';
import SignUp from '@/components/authentication/SignUp.vue' ;

export default Vue.extend({
    name : 'Authentication',
    components : {
        LogIn,
        SignUp
    }
})
</script>

<style>

</style>