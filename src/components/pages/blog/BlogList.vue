<template>
  <div class="page blog-list">
    <div class="shared bread-crumb" style="background-image: url('../../../../src/assets/images/bread_crumb_bg.png')">
      <div>
        <div class="title">Latest blog post</div>
        <ul class="menu">
          <li>
            <a href="{{route('front.home')}}">Home</a>
          </li>
          <li>
                        <span>
                            >>
                        </span>
          </li>
          <li>
            <span>Blog list</span>
          </li>
        </ul>
        <div class="search">
          <form>
            <div class="form-group">
              <input type="text" placeholder="Search here" class="form-control" />
              <button class="btn" type="submit">
                <i class="las la-search"></i>
              </button>
            </div>
          </form>
        </div>
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
      <section class="top-rated-app">
        <div class="row">
          <div class="col-5">
            <div class="left" data-aos="fade-up">
              <img src="../../../assets/images/blog_detail_main.png" alt=""/>
              <div class="publish-time">20 min ago</div>
            </div>
          </div>
          <div class="col-7">
            <div class="right" data-aos="fade-left">
              <div class="label">editor choice</div>
              <div class="title">Top rated app of the year!</div>
              <div class="desc">Lorem Ipsum is simply dummy text of the printing and typesetting
                in dustry lorem Ipsum has been the industrys standard dummy text ev er since the
                1500s, when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic Lorem Ipsum is simply dummy text of the printing and typesetting.
              </div>
              <a href="/blogs/1">read more</a>
            </div>
          </div>
        </div>
      </section>
      <section class="blogs">
        <div class="row mb-4" data-aos="fade-up">
          <div class="col-4">
            <div class="item">
              <div class="thumbnail">
                <img src="../../../assets/images/story01.png" alt=""/>
                <div class="publish-time">45 min ago</div>
              </div>
              <div class="content">
                <div class="title">Cool features added!</div>
                <div class="desc">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has.
                </div>
                <a href="">Read more</a>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="item">
              <div class="thumbnail">
                <img src="../../../assets/images/story02.png" alt=""/>
                <div class="publish-time">45 min ago</div>
              </div>
              <div class="content">
                <div class="title">Top rated app! Yupp.</div>
                <div class="desc">
                  Simply dummy text of the printing and typesetting industry lorem Ipsum has Lorem Ipsum is.
                </div>
                <a href="">Read more</a>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="item">
              <div class="thumbnail">
                <img src="../../../assets/images/story03.png" alt=""/>
                <div class="publish-time">45 min ago</div>
              </div>
              <div class="content">
                <div class="title">Creative ideas on app.</div>
                <div class="desc">
                  Printing and typesetting industry lorem Ipsum has Lorem simply dummy text of the.
                </div>
                <a href="">Read more</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-4" data-aos="fade-up">
          <div class="col-4">
            <div class="item">
              <div class="thumbnail">
                <img src="../../../assets/images/story01.png" alt=""/>
                <div class="publish-time">45 min ago</div>
              </div>
              <div class="content">
                <div class="title">Cool features added!</div>
                <div class="desc">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has.
                </div>
                <a href="">Read more</a>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="item">
              <div class="thumbnail">
                <img src="../../../assets/images/story02.png" alt=""/>
                <div class="publish-time">45 min ago</div>
              </div>
              <div class="content">
                <div class="title">Top rated app! Yupp.</div>
                <div class="desc">
                  Simply dummy text of the printing and typesetting industry lorem Ipsum has Lorem Ipsum is.
                </div>
                <a href="">Read more</a>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="item">
              <div class="thumbnail">
                <img src="../../../assets/images/story03.png" alt=""/>
                <div class="publish-time">45 min ago</div>
              </div>
              <div class="content">
                <div class="title">Creative ideas on app.</div>
                <div class="desc">
                  Printing and typesetting industry lorem Ipsum has Lorem simply dummy text of the.
                </div>
                <a href="">Read more</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-4" data-aos="fade-up">
          <div class="col-4">
            <div class="item">
              <div class="thumbnail">
                <img src="../../../assets/images/story01.png" alt=""/>
                <div class="publish-time">45 min ago</div>
              </div>
              <div class="content">
                <div class="title">Cool features added!</div>
                <div class="desc">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has.
                </div>
                <a href="">Read more</a>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="item">
              <div class="thumbnail">
                <img src="../../../assets/images/story02.png" alt=""/>
                <div class="publish-time">45 min ago</div>
              </div>
              <div class="content">
                <div class="title">Top rated app! Yupp.</div>
                <div class="desc">
                  Simply dummy text of the printing and typesetting industry lorem Ipsum has Lorem Ipsum is.
                </div>
                <a href="">Read more</a>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="item">
              <div class="thumbnail">
                <img src="../../../assets/images/story03.png" alt=""/>
                <div class="publish-time">45 min ago</div>
              </div>
              <div class="content">
                <div class="title">Creative ideas on app.</div>
                <div class="desc">
                  Printing and typesetting industry lorem Ipsum has Lorem simply dummy text of the.
                </div>
                <a href="">Read more</a>
              </div>
            </div>
          </div>
        </div>
        <div class="pagination">
          <ul>
            <li><a href="#" class="prev"><i class="las la-arrow-left"></i> Prev</a></li>
            <li><a href="#">1</a></li>
            <li><a href="#" class="active">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">6</a></li>
            <li><a href="#" class="next">Next <i class="las la-arrow-right"></i></a></li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>
