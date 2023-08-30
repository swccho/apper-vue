<template>
  <div className="page auth" style="background-image: url('../../../../src/assets/images/form-bg.png')">
    <div className="container">
      <div className="wrapper">
        <div className="back">
          <router-link :to="{name: 'Home'}">
            <i className="las la-arrow-left"></i> Back
          </router-link>
        </div>
        <div className="logo">
          <img src="../../../assets/images/footer_logo.png" alt=""/>
        </div>
        <section className="content">
          <div className="header">
            <div className="title">
              Welcome to <span>Apper</span>
            </div>
            <div className="desc">
              Fill all fields so we can get some info about you.
              <br/>We'll never send you spam
            </div>
          </div>
          <div className="form">
            <form>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <button className="btn btn-theme">Sign up</button>
            </form>
          </div>
          <div className="or">
            <span>OR</span>
          </div>
          <div className="option">
            <div className="title">
              Sign In with your work email
            </div>
            <button className="btn sign-btn">
              <img src="../../../assets/images/google.png" alt=""/>
              <span>Sign Up with Google</span>
            </button>
            <div className="switch-page">
              Don't have an account? <router-link :to="{name: 'SignUp'}">Sign Up here</router-link>
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
