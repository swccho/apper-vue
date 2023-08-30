<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
  export default {
    mounted() {
      AOS.init({
        delay: 50,
        duration: 1000,
        offset: 120,
        disable: 'mobile',
      });
    }
  }
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>

</style>
