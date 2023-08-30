<template>
  <header :class="navbarFixed && 'fixed'">
    <div class="container d-flex align-items-center justify-content-between">
      <div class="logo">
        <router-link :to="{name: 'Home'}">
          <img src="../../../../assets/images/footer_logo.png" alt="">
        </router-link>
      </div>
      <div class="menu">
        <ul>
          <li>
            <router-link :to="{name: 'Home'}">Home</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Home'}">Features</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Home'}">How it works</router-link>
          </li>
          <li class="drop-down">
            <a href="javascript:void(0)">Pages <i class="las la-angle-down"></i></a>
            <ul>
              <li>
                <router-link :to="{name: 'About'}">About Us</router-link>
              </li>
              <li>
                <router-link :to="{name: 'Review'}">Reviews</router-link>
              </li>
              <li>
                <router-link :to="{name: 'Contact'}">Contact Us</router-link>
              </li>
              <li>
                <router-link :to="{name: 'Faq'}">Faq</router-link>
              </li>
              <li>
                <router-link :to="{name: 'SignIn'}">Sign In</router-link>
              </li>
              <li>
                <router-link :to="{name: 'SignUp'}">Sign Up</router-link>
              </li>
              <li>
                <router-link :to="{name: 'BlogList'}">Blog List</router-link>
              </li>
              <li>
                <router-link :to="{name: 'SingleBlog', params: {id: 1}}">Blog Single</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link :to="{name: 'Home'}">Pricing</router-link>
          </li>
          <li class="drop-down">
            <a href="javascript:void(0)">Blog <i class="las la-angle-down"></i></a>
            <ul>
              <li>
                <router-link :to="{name: 'BlogList'}">Blog List</router-link>
              </li>
              <li>
                <router-link :to="{name: 'SingleBlog', params: {id: 1}}">Blog Single</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link :to="{name: 'Contact'}">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
export  default {
  data(){
    return {
      navbarFixed: false
    }
  },
  mounted() {
    window.addEventListener("scroll", (event) => {
      if (window.pageYOffset > 200) {
        this.navbarFixed = true
      } else {
        this.navbarFixed = false
      }
    });
  }
}
</script>
