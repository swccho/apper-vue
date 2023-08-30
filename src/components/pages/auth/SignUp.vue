<template>
  <div class="page auth" style="background-image: url('../../../../src/assets/images/form-bg.png')">
    <div class="container">
      <div class="wrapper">
        <div class="back">
          <router-link :to="{name: 'Home'}">
            <i class="las la-arrow-left"></i> Back
          </router-link>
        </div>
        <div class="logo">
          <img src="../../../assets/images/footer_logo.png" alt=""/>
        </div>
        <section class="content">
          <div class="header">
            <div class="title">
              <span>Create</span> an account
            </div>
            <div class="desc">
              Fill all fields so we can get some info about you.
              <br/>We'll never send you spam
            </div>
          </div>
          <div class="form">
            <form>
              <div class="form-group">
                <input type="text" class="form-control"  placeholder="Name"/>
              </div>
              <div class="form-group">
                <input type="email" class="form-control" placeholder="Email" />
              </div>
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Password" />
              </div>
              <button class="btn btn-theme">Sign up</button>
            </form>
          </div>
          <div class="or">
            <span>OR</span>
          </div>
          <div class="option">
            <div class="title">
              Sign up with your work email
            </div>
            <button class="btn sign-btn">
              <img src="../../../assets/images/google.png" alt=""/>
              <span>Sign Up with Google</span>
            </button>
            <div class="switch-page">
              Already have an account? <router-link :to="{name: 'SignIn'}">Sign In here</router-link>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
