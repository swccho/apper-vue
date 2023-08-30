<template>
  <div class="page contact">
    <div class="shared bread-crumb" style="background-image: url('../../../../src/assets/images/bread_crumb_bg.png')">
      <div>
        <div class="title">Contact us</div>
        <div class="desc mb-3">If you have an query, please get in touch with us, we will revert back quickly.</div>
        <ul class="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
              <span>
                  >>
              </span>
          </li>
          <li>
            <span>Contact us</span>
          </li>
        </ul>
      </div>
      <div class="shape shape-1">
        <img src="../../../assets/images/banner-shape1.png" alt=""/>
      </div>
      <div class="shape shape-2">
        <img src="../../../assets/images/banner-shape2.png" alt=""/>
      </div>
      <div class="shape shape-3">
        <img src="../../../assets/images/banner-shape3.png" alt=""/>
      </div>
    </div>
    <div class="container">
      <section class="content">
        <div class="row">
          <div class="col-6">
            <div class="contact-form">
              <div class="header">
                <div class="title">
                  Leave a <span>message</span>
                </div>
                <div class="desc">Fill up form below, our team will get back soon</div>
              </div>
              <div class="body">
                <form>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name"/>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Email"/>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Company Name"/>
                  </div>
                  <div class="form-group">
                    <select name="" id="" class="form-control">
                      <option value="" selected>Country</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Phone"/>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Website"/>
                  </div>
                  <div class="form-group">
                                                <textarea name="" class="form-control" cols="30" rows="10"
                                                          placeholder="Your message"></textarea>
                  </div>
                  <div class="form-group">
                    <label htmlFor="agree">
                      <input type="checkbox"/>
                      <span>I agree to receive emails, newsletters and promotional messages</span>
                    </label>
                  </div>
                  <button class="btn btn-theme">send message</button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="right">
              <div class="top">
                <div class="icon">
                  <img src="../../../assets/images/contact_message_icon.pngo" alt=""/>
                </div>
                <div class="header">
                  <div class="title">
                    Have any <span>question?</span>
                  </div>
                  <div class="desc">
                    If you have any question about our product, service,
                    <br/> payment or company, Visit our <a href="">FAQs page.</a>
                  </div>
                </div>
                <button class="btn btn-theme">read faq</button>
              </div>
              <div class="bottom">
                <div class="details">
                  <div class="icon">
                    <img src="../../../assets/images/mail_icon.png" alt=""/>
                  </div>
                  <div class="info">
                    <div class="label">Email Us</div>
                    <div class="text">example@gmail.com</div>
                  </div>
                </div>
                <div class="details">
                  <div class="icon">
                    <img src="../../../assets/images/call_icon.png" alt=""/>
                  </div>
                  <div class="info">
                    <div class="label">Call Us</div>
                    <div class="text">+1 (888) 553-46-11</div>
                  </div>
                </div>
                <div class="details">
                  <div class="icon">
                    <img src="../../../assets/images/location_icon.png" alt=""/>
                  </div>
                  <div class="info">
                    <div class="label">Visit Us</div>
                    <div class="text">5687, Business Avenue, New York, USA 5687</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14671.150287536297!2d89.2187763!3d23.177951999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1692784004087!5m2!1sen!2sbd"
            width="100%" height="450" allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>
