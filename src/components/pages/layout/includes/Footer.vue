<template>
  <footer>
    <div class="footer-top" style="background-image: url('../../../../../src/assets/images/footer_bg.png')">
      <div class="container">
        <div class="newsletter"
             data-aos="fade-zoom-in"
             data-aos-easing="ease-in-back"
             data-aos-delay="100"
             data-aos-offset="0">
          <div class="text">
            <div class="title">Subscribe newsletter</div>
            <div class="slug">Be the first to recieve all latest post in your inbox</div>
          </div>
          <div class="subscribe">
            <form>
              <div class="d-flex align-items-center">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Enter your email"/>
                </div>
                <div class="btn submit-btn">Submit</div>
              </div>
            </form>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <div class="item">
              <div class="logo">
                <img src="../../../../assets/images/footer_logo.png" alt=""/>
              </div>
              <div class="email">support@example.com</div>
              <div class="phone">+1-900-123 4567</div>
              <ul class="social-links">
                <li>
                  <a href="">
                    <i class="lab la-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="lab la-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="lab la-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="lab la-pinterest-p"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-3">
            <div class="item">
              <div class="title">Useful Links</div>
              <ul class="menu">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About us</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-3">
            <div class="item">
              <div class="title">Help & Support</div>
              <ul class="menu">
                <li>
                  <a href="">FAQs</a>
                </li>
                <li>
                  <a href="">Support</a>
                </li>
                <li>
                  <a href="">How it works</a>
                </li>
                <li>
                  <a href="">Terms & conditions</a>
                </li>
                <li>
                  <a href="">Privacy policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-3">
            <div class="item">
              <div class="title">Let’s Try Out</div>
              <div class="store">
                <a class="apple">
                  <img src="../../../../assets/images/appstore_blue.png" alt=""/>
                </a>
                <a class="google">
                  <img src="../../../../assets/images/googleplay_blue.png" alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container d-flex align-items-center justify-content-between">
        <div class="left">&copy; Copyrights 2022. All rights reserved.</div>
        <div class="right">Design & developed by <a href="">Redishketch</a></div>
      </div>
    </div>
    <a class="go-top active" @click="goTop">
      <img src="../../../../assets/images/go_top.png" alt=""/>
    </a>
  </footer>
</template>

<script>
export default {
  data(){

  },
  methods: {
    goTop(){
      window.scrollTo(0, 0)
    }
  }
}
</script>
