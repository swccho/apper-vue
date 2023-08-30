<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>
<script>
import Header from "./includes/Header.vue";
import Home from "../home/Home.vue";
import Footer from "./includes/Footer.vue";
export default {
  components: {Footer, Home, Header}
}
</script>
