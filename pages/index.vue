<template>
  <div id="wrapper">
    <div class="topbar">
      <div class="container">
        <div class="topbar-wrapper row clearfix">
          <div class="col-md-6 col-sm-6 col-xs-12 text-left">
            <ul class="list-inline">
              <li>
                <a class="social" href="#"><i class="fa fa-facebook"></i></a>
                <a class="social" href="#"><i class="fa fa-twitter"></i></a>
                <a class="social" href="#"><i class="fa fa-google-plus"></i></a>
                <a class="social" href="#"><i class="fa fa-pinterest"></i></a>
                <a class="social" href="#"><i class="fa fa-linkedin"></i></a>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" href="#" data-toggle="dropdown"
                  >My Account <span class="fa fa-angle-down"></span
                ></a>
                <div class="dropdown-menu">
                  <form method="post">
                    <input
                      class="form-control"
                      type="text"
                      name="username"
                      placeholder="Username"
                    />
                    <div class="formpassword">
                      <input
                        class="form-control"
                        type="password"
                        name="password"
                        placeholder="**********"
                      />
                    </div>
                    <div class="clearfix"></div>
                    <button
                      type="submit"
                      class="btn btn-block btn-primary btn-sm"
                    >
                      Login
                    </button>
                    <hr />
                    <h4 class="text-center">
                      <a href="login.html">Create an Account</a>
                    </h4>
                  </form>
                </div>
              </li>
            </ul>
          </div>
          <!-- end right -->
          <div class="col-md-6 col-sm-6 col-xs-12 text-right">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-default dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                English <span class="fa fa-angle-down"></span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#">Japanese</a></li>
                <li><a href="#">Turkish</a></li>
                <li><a href="#">Spanish</a></li>
                <li><a href="#">Arabic</a></li>
              </ul>
            </div>
            <!-- /btn-group -->
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-default dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa fa-dollar"></i> Euro
                <span class="fa fa-angle-down"></span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li>
                  <a href="#"><i class="fa fa-euro"></i> Dollar</a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-turkish-lira"></i> YTL</a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-yen"></i> Yen</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <a href="shop-compare.html" class="btn btn-default"
                ><i class="fa fa-star-o"></i> Compare</a
              >
            </div>
            <div class="btn-group">
              <a href="shop-wishlist.html" class="btn btn-default"
                ><i class="fa fa-heart-o"></i> Wishlist</a
              >
            </div>
          </div>
          <!-- end left -->
        </div>
        <!-- end topbar-wrapper -->
      </div>
      <!-- end container -->
    </div>
    <!-- end topbar -->

    <header class="header header-relative">
      <div class="container">
        <nav class="navbar yamm navbar-default">
          <div class="container-full">
            <div class="navbar-table">
              <div class="navbar-cell logo">
                <div class="navbar-header">
                  <!-- タイトル -->
                  <a class="navbar-brand" href="index.html"
                    ><img
                      src="images/logo-bodoge.png"
                      　alt="ボドゲマーケット"
                    />
                    ボドゲマーケット</a
                  >
                  <!-- ハンバーガーメニュー -->
                  <div>
                    <button
                      type="button"
                      class="navbar-toggle collapsed"
                      data-toggle="collapse"
                      data-target="#bs-example-navbar-collapse-2"
                    >
                      <span class="sr-only">Toggle navigation</span>
                      <span class="fa fa-bars"></span>
                    </button>
                  </div>
                </div>
                <!-- end navbar-header -->
              </div>
              <!-- end navbar-cell -->
            </div>
            <!-- end navbar-table -->

            <!-- メニューバー -->
            <div class="navbar-table">
              <div class="navbar-cell stretch">
                <div
                  class="collapse navbar-collapse"
                  id="bs-example-navbar-collapse-2"
                >
                  <div class="navbar-cell">
                    <ul class="nav navbar-nav navbar-left mr-auto">
                      <li>
                        <!-- 検索欄 -->
                        <div class="navbar-cell stretch">
                          <div
                            class="navbar-expand"
                            id="bs-example-navbar-collapse-2"
                          >
                            <form action="">
                              <input
                                type="search"
                                name="keyword"
                                placeholder="何かお探しですか？"
                                class="search-layout"
                                value=""
                              />
                            </form>
                          </div>
                          <!-- /.navbar-collapse -->
                        </div>
                        <!-- end navbar cell -->
                      </li>

                      <li class="dropdown megamenu yamm-half">
                        <a
                          href="#"
                          data-toggle="dropdown"
                          class="dropdown-toggle"
                          >ジャンルで探す <b class="fa fa-angle-down"></b
                        ></a>
                        <ul class="dropdown-menu">
                          <li>
                            <div class="yamm-content">
                              <div class="box">
                                <ul class="check">
                                  <li><a href="#">ブラフ</a></li>
                                  <li><a href="#">正体隠匿</a></li>
                                  <li><a href="#">タイル配置</a></li>
                                  <li><a href="#">拡大再生産</a></li>
                                  <li><a href="#">ドラフト</a></li>
                                  <li>
                                    <a href="#">ワーカープレイスメント</a>
                                  </li>
                                  <li><a href="#">陣取り</a></li>
                                  <li><a href="#">デッキ構築</a></li>
                                  <li><a href="#">競り</a></li>
                                  <li><a href="#">協力</a></li>
                                  <li><a href="#">表現</a></li>
                                  <li><a href="#">アクション</a></li>
                                </ul>
                              </div>
                              <!-- end col -->
                            </div>
                            <!-- end ttmenu-content -->
                          </li>
                        </ul>
                      </li>
                      <!-- end mega menu -->

                      <li class="dropdown megamenu yamm-half">
                        <a
                          href="#"
                          data-toggle="dropdown"
                          class="dropdown-toggle"
                          >人数で探す <b class="fa fa-angle-down"></b
                        ></a>
                        <ul class="dropdown-menu">
                          <li>
                            <div class="yamm-content">
                              <div class="box">
                                <ul class="check">
                                  <li><a href="#">ブラフ</a></li>
                                  <li><a href="#">正体隠匿</a></li>
                                  <li><a href="#">タイル配置</a></li>
                                  <li><a href="#">拡大再生産</a></li>
                                  <li><a href="#">ドラフト</a></li>
                                  <li>
                                    <a href="#">ワーカープレイスメント</a>
                                  </li>
                                  <li><a href="#">陣取り</a></li>
                                  <li><a href="#">デッキ構築</a></li>
                                  <li><a href="#">競り</a></li>
                                  <li><a href="#">協力</a></li>
                                  <li><a href="#">表現</a></li>
                                  <li><a href="#">アクション</a></li>
                                </ul>
                              </div>
                              <!-- end col -->
                            </div>
                            <!-- end ttmenu-content -->
                          </li>
                        </ul>
                      </li>
                      <!-- end mega menu -->

                      <li class="dropdown megamenu yamm-half">
                        <a
                          href="#"
                          data-toggle="dropdown"
                          class="dropdown-toggle"
                          >時間で探す <b class="fa fa-angle-down"></b
                        ></a>
                        <ul class="dropdown-menu">
                          <li>
                            <div class="yamm-content">
                              <div class="box">
                                <ul class="check">
                                  <li><a href="#">ブラフ</a></li>
                                  <li><a href="#">正体隠匿</a></li>
                                  <li><a href="#">タイル配置</a></li>
                                  <li><a href="#">拡大再生産</a></li>
                                  <li><a href="#">ドラフト</a></li>
                                  <li>
                                    <a href="#">ワーカープレイスメント</a>
                                  </li>
                                  <li><a href="#">陣取り</a></li>
                                  <li><a href="#">デッキ構築</a></li>
                                  <li><a href="#">競り</a></li>
                                  <li><a href="#">協力</a></li>
                                  <li><a href="#">表現</a></li>
                                  <li><a href="#">アクション</a></li>
                                </ul>
                              </div>
                              <!-- end col -->
                            </div>
                            <!-- end ttmenu-content -->
                          </li>
                        </ul>
                      </li>
                      <!-- end mega menu -->
                    </ul>

                    <ul class="nav navbar-nav navbar-right">
                      <li><a href="contact.html" title="">いいね！一覧</a></li>
                      <li><a href="contact.html" title="">お知らせ</a></li>
                      <li><a href="contact.html" title="">マイページ</a></li>
                    </ul>
                  </div>
                  <!-- end navbar-cell -->
                </div>
                <!-- /.navbar-collapse -->
              </div>
              <!-- end navbar cell -->
            </div>
            <!-- end navbar-table 2-->
            <!-- end------------------------------------------------------------------ -->
          </div>
          <!-- end container fluid -->
        </nav>
        <!-- end navbar -->
      </div>
      <!-- end container -->
    </header>
    　

    <!-- トップ画像 -->
    <div class="slider-wrapper">
      <div class="tp-banner-container">
        <div class="tp-banner">
          <ul>
            <li
              data-transition="fade"
              data-slotamount="7"
              data-masterspeed="500"
              data-thumb="upload/big_slider_02.jpg"
              data-saveperformance="on"
              data-title="Intro Slide"
            >
              <img
                src="images/dummy.png"
                alt="kenburns1"
                data-lazyload="upload/big_slider_02.jpg"
                data-bgposition="right center"
                data-kenburns="on"
                data-duration="14000"
                data-ease="Linear.easeNone"
                data-bgfit="100"
                data-bgfitend="130"
                data-bgpositionend="right center"
              />
              <div
                class="tp-caption first-slider-text customin"
                data-x="center"
                data-y="160"
                data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:3;scaleY:3;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                data-speed="1550"
                data-start="600"
                data-easing="easeInOutExpo"
                data-elementdelay="0.1"
                data-endelementdelay="0.1"
                data-endspeed="300"
                style="z-index: 5"
              >
                RESPONSIVE & RETINA
              </div>
              <div
                class="tp-caption second-slider-text customin"
                data-x="center"
                data-y="210"
                data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:2;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                data-speed="1550"
                data-start="1200"
                data-easing="easeInOutExpo"
                data-elementdelay="0.1"
                data-endelementdelay="0.1"
                data-endspeed="300"
                style="z-index: 6"
              >
                PERFECT SOLUTION
              </div>
              <div
                class="tp-caption third-slider-text text-center customin tp-resizeme"
                data-x="center"
                data-y="295"
                data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:2;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                data-speed="1550"
                data-start="1800"
                data-easing="easeInOutExpo"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0.1"
                data-endelementdelay="0.1"
                data-endspeed="300"
                style="
                  z-index: 7;
                  max-width: 742px;
                  max-height: 60px;
                  white-space: normal;
                "
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit<br />sed
                diam nonummy nibh euismod tincidunt...
              </div>
              <div
                class="tp-caption slider_btn randomrotate"
                data-x="center"
                data-y="370"
                data-speed="1550"
                data-start="2400"
                data-easing="Power3.easeInOut"
                data-elementdelay="0.1"
                data-endelementdelay="0.1"
                data-endspeed="300"
                style="z-index: 8"
              >
                <a href="#" class="btn btn-dark">PURCHASE NOW</a>
              </div>
            </li>
            <li
              data-transition="fade"
              data-slotamount="7"
              data-masterspeed="500"
              data-thumb="upload/big_slider_01.jpg"
              data-saveperformance="on"
              data-title="Intro Slide"
            >
              <img
                src="images/dummy.png"
                alt="kenburns1"
                data-lazyload="upload/big_slider_01.jpg"
                data-bgposition="right center"
                data-kenburns="on"
                data-duration="14000"
                data-ease="Linear.easeNone"
                data-bgfit="100"
                data-bgfitend="130"
                data-bgpositionend="right center"
              />
              <div
                class="tp-caption first-slider-text customin"
                data-x="205"
                data-y="164"
                data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:3;scaleY:3;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                data-speed="1550"
                data-start="600"
                data-easing="easeInOutExpo"
                data-elementdelay="0.1"
                data-endelementdelay="0.1"
                data-endspeed="300"
                style="z-index: 5"
              >
                CLEAN & MINIMAL
              </div>
              <div
                class="tp-caption second-slider-text customin"
                data-x="200"
                data-y="204"
                data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:2;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                data-speed="1550"
                data-start="1200"
                data-easing="easeInOutExpo"
                data-elementdelay="0.1"
                data-endelementdelay="0.1"
                data-endspeed="300"
                style="z-index: 6"
              >
                Shopica INC.
              </div>
              <div
                class="tp-caption third-slider-text customin tp-resizeme"
                data-x="205"
                data-y="280"
                data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:2;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                data-speed="1550"
                data-start="1800"
                data-easing="easeInOutExpo"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0.1"
                data-endelementdelay="0.1"
                data-endspeed="300"
                style="
                  z-index: 7;
                  max-width: 742px;
                  max-height: 60px;
                  white-space: normal;
                "
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit<br />sed
                diam nonummy nibh euismod tincidunt...
              </div>
              <div
                class="tp-caption slider_btn randomrotate"
                data-x="205"
                data-y="350"
                data-speed="1550"
                data-start="2400"
                data-easing="Power3.easeInOut"
                data-elementdelay="0.1"
                data-endelementdelay="0.1"
                data-endspeed="300"
                style="z-index: 8"
              >
                <a href="#" class="btn btn-dark">PURCHASE NOW</a>
              </div>
            </li>
          </ul>
          <!-- end ul -->
        </div>
        <!-- end tp-banner -->
      </div>
      <!-- end banner-container -->
    </div>
    <!-- end section -->

    <!-- 商品 -->
    <section class="section grey border-top">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="custom-title text-center">
              <h2>人気のボードゲーム</h2>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3 col-xs-4">
            <div class="shop-item">
              <div class="entry">
                <a class="hover-image" href="shop-single-1.html" title="">
                  <div class="img-rotate">
                    <img src="upload/shop_13.jpg" alt="" />
                    <img
                      src="upload/shop_13_b.jpg"
                      class="rotate-image"
                      alt=""
                    />
                  </div>
                </a>
                <div class="shop-item-title text-center clearfix">
                  <h4><a href="shop-single-1.html">商品１</a></h4>
                  <div class="shopmeta clearfix">
                    <span>¥1,000~</span>
                  </div>
                  <!-- end shop-meta -->
                </div>
                <!-- end shop-item-title -->
              </div>
              <!-- entry -->
              <!-- ホバーボタン -->
              <div class="visible-buttons">
                <a title="お気に入り" href="shop-wishlist.html"
                  ><span class="icon-heart"></span
                ></a>
              </div>
              <!-- end buttons -->
            </div>
            <!-- end relative -->
          </div>
          <!-- end col -->

          <div class="col-md-3 col-xs-4">
            <div class="shop-item">
              <div class="entry">
                <a class="hover-image" href="shop-single-1.html" title="">
                  <div class="img-rotate">
                    <img src="upload/shop_13.jpg" alt="" />
                    <img
                      src="upload/shop_13_b.jpg"
                      class="rotate-image"
                      alt=""
                    />
                  </div>
                </a>
                <div class="shop-item-title text-center clearfix">
                  <h4><a href="shop-single-1.html">商品１</a></h4>
                  <div class="shopmeta clearfix">
                    <span>¥1,000~</span>
                  </div>
                  <!-- end shop-meta -->
                </div>
                <!-- end shop-item-title -->
              </div>
              <!-- entry -->
              <!-- ホバーボタン -->
              <div class="visible-buttons">
                <a title="お気に入り" href="shop-wishlist.html"
                  ><span class="icon-heart"></span
                ></a>
              </div>
              <!-- end buttons -->
            </div>
            <!-- end relative -->
          </div>
          <!-- end col -->

          <div class="col-md-3 col-xs-4">
            <div class="shop-item">
              <div class="entry">
                <a class="hover-image" href="shop-single-1.html" title="">
                  <div class="img-rotate">
                    <img src="upload/shop_13.jpg" alt="" />
                    <img
                      src="upload/shop_13_b.jpg"
                      class="rotate-image"
                      alt=""
                    />
                  </div>
                </a>
                <div class="shop-item-title text-center clearfix">
                  <h4><a href="shop-single-1.html">商品１</a></h4>
                  <div class="shopmeta clearfix">
                    <span>¥1,000~</span>
                  </div>
                  <!-- end shop-meta -->
                </div>
                <!-- end shop-item-title -->
              </div>
              <!-- entry -->
              <!-- ホバーボタン -->
              <div class="visible-buttons">
                <a title="お気に入り" href="shop-wishlist.html"
                  ><span class="icon-heart"></span
                ></a>
              </div>
              <!-- end buttons -->
            </div>
            <!-- end relative -->
          </div>
          <!-- end col -->

          <div class="col-md-3 col-xs-4">
            <div class="shop-item">
              <div class="entry">
                <a class="hover-image" href="shop-single-1.html" title="">
                  <div class="img-rotate">
                    <img src="upload/shop_13.jpg" alt="" />
                    <img
                      src="upload/shop_13_b.jpg"
                      class="rotate-image"
                      alt=""
                    />
                  </div>
                </a>
                <div class="shop-item-title text-center clearfix">
                  <h4><a href="shop-single-1.html">商品１</a></h4>
                  <div class="shopmeta clearfix">
                    <span>¥1,000~</span>
                  </div>
                  <!-- end shop-meta -->
                </div>
                <!-- end shop-item-title -->
              </div>
              <!-- entry -->
              <!-- ホバーボタン -->
              <div class="visible-buttons">
                <a title="お気に入り" href="shop-wishlist.html"
                  ><span class="icon-heart"></span
                ></a>
              </div>
              <!-- end buttons -->
            </div>
            <!-- end relative -->
          </div>
          <!-- end col -->

          <div class="col-md-3 col-xs-4">
            <div class="shop-item">
              <div class="entry">
                <a class="hover-image" href="shop-single-1.html" title="">
                  <div class="img-rotate">
                    <img src="upload/shop_13.jpg" alt="" />
                    <img
                      src="upload/shop_13_b.jpg"
                      class="rotate-image"
                      alt=""
                    />
                  </div>
                </a>
                <div class="shop-item-title text-center clearfix">
                  <h4><a href="shop-single-1.html">商品１</a></h4>
                  <div class="shopmeta clearfix">
                    <span>¥1,000~</span>
                  </div>
                  <!-- end shop-meta -->
                </div>
                <!-- end shop-item-title -->
              </div>
              <!-- entry -->
              <!-- ホバーボタン -->
              <div class="visible-buttons">
                <a title="お気に入り" href="shop-wishlist.html"
                  ><span class="icon-heart"></span
                ></a>
              </div>
              <!-- end buttons -->
            </div>
            <!-- end relative -->
          </div>
          <!-- end col -->

          <div class="col-md-3 col-xs-4">
            <div class="shop-item">
              <div class="entry">
                <a class="hover-image" href="shop-single-1.html" title="">
                  <div class="img-rotate">
                    <img src="upload/shop_13.jpg" alt="" />
                    <img
                      src="upload/shop_13_b.jpg"
                      class="rotate-image"
                      alt=""
                    />
                  </div>
                </a>
                <div class="shop-item-title text-center clearfix">
                  <h4><a href="shop-single-1.html">商品１</a></h4>
                  <div class="shopmeta clearfix">
                    <span>¥1,000~</span>
                  </div>
                  <!-- end shop-meta -->
                </div>
                <!-- end shop-item-title -->
              </div>
              <!-- entry -->
              <!-- ホバーボタン -->
              <div class="visible-buttons">
                <a title="お気に入り" href="shop-wishlist.html"
                  ><span class="icon-heart"></span
                ></a>
              </div>
              <!-- end buttons -->
            </div>
            <!-- end relative -->
          </div>
          <!-- end col -->

          <div class="col-md-3 col-xs-4">
            <div class="shop-item">
              <div class="entry">
                <a class="hover-image" href="shop-single-1.html" title="">
                  <div class="img-rotate">
                    <img src="upload/shop_13.jpg" alt="" />
                    <img
                      src="upload/shop_13_b.jpg"
                      class="rotate-image"
                      alt=""
                    />
                  </div>
                </a>
                <div class="shop-item-title text-center clearfix">
                  <h4><a href="shop-single-1.html">商品１</a></h4>
                  <div class="shopmeta clearfix">
                    <span>¥1,000~</span>
                  </div>
                  <!-- end shop-meta -->
                </div>
                <!-- end shop-item-title -->
              </div>
              <!-- entry -->
              <!-- ホバーボタン -->
              <div class="visible-buttons">
                <a title="お気に入り" href="shop-wishlist.html"
                  ><span class="icon-heart"></span
                ></a>
              </div>
              <!-- end buttons -->
            </div>
            <!-- end relative -->
          </div>
          <!-- end col -->

          <div class="col-md-3 col-xs-4">
            <div class="shop-item">
              <div class="entry">
                <a class="hover-image" href="shop-single-1.html" title="">
                  <div class="img-rotate">
                    <img src="upload/shop_13.jpg" alt="" />
                    <img
                      src="upload/shop_13_b.jpg"
                      class="rotate-image"
                      alt=""
                    />
                  </div>
                </a>
                <div class="shop-item-title text-center clearfix">
                  <h4><a href="shop-single-1.html">商品１</a></h4>
                  <div class="shopmeta clearfix">
                    <span>¥1,000~</span>
                  </div>
                  <!-- end shop-meta -->
                </div>
                <!-- end shop-item-title -->
              </div>
              <!-- entry -->
              <!-- ホバーボタン -->
              <div class="visible-buttons">
                <a title="お気に入り" href="shop-wishlist.html"
                  ><span class="icon-heart"></span
                ></a>
              </div>
              <!-- end buttons -->
            </div>
            <!-- end relative -->
          </div>
          <!-- end col -->

          <div class="col-md-3 col-xs-4">
            <div class="shop-item">
              <div class="entry">
                <a class="hover-image" href="shop-single-1.html" title="">
                  <div class="img-rotate">
                    <img src="upload/shop_13.jpg" alt="" />
                    <img
                      src="upload/shop_13_b.jpg"
                      class="rotate-image"
                      alt=""
                    />
                  </div>
                </a>
                <div class="shop-item-title text-center clearfix">
                  <h4><a href="shop-single-1.html">商品１</a></h4>
                  <div class="shopmeta clearfix">
                    <span>¥1,000~</span>
                  </div>
                  <!-- end shop-meta -->
                </div>
                <!-- end shop-item-title -->
              </div>
              <!-- entry -->
              <!-- ホバーボタン -->
              <div class="visible-buttons">
                <a title="お気に入り" href="shop-wishlist.html"
                  ><span class="icon-heart"></span
                ></a>
              </div>
              <!-- end buttons -->
            </div>
            <!-- end relative -->
          </div>
          <!-- end col -->

          <div class="col-md-3 col-xs-4">
            <div class="shop-item">
              <div class="entry">
                <a class="hover-image" href="shop-single-1.html" title="">
                  <div class="img-rotate">
                    <img src="upload/shop_13.jpg" alt="" />
                    <img
                      src="upload/shop_13_b.jpg"
                      class="rotate-image"
                      alt=""
                    />
                  </div>
                </a>
                <div class="shop-item-title text-center clearfix">
                  <h4><a href="shop-single-1.html">商品１</a></h4>
                  <div class="shopmeta clearfix">
                    <span>¥1,000~</span>
                  </div>
                  <!-- end shop-meta -->
                </div>
                <!-- end shop-item-title -->
              </div>
              <!-- entry -->
              <!-- ホバーボタン -->
              <div class="visible-buttons">
                <a title="お気に入り" href="shop-wishlist.html"
                  ><span class="icon-heart"></span
                ></a>
              </div>
              <!-- end buttons -->
            </div>
            <!-- end relative -->
          </div>
          <!-- end col -->

          <div class="col-md-3 col-xs-4">
            <div class="shop-item">
              <div class="entry">
                <a class="hover-image" href="shop-single-1.html" title="">
                  <div class="img-rotate">
                    <img src="upload/shop_13.jpg" alt="" />
                    <img
                      src="upload/shop_13_b.jpg"
                      class="rotate-image"
                      alt=""
                    />
                  </div>
                </a>
                <div class="shop-item-title text-center clearfix">
                  <h4><a href="shop-single-1.html">商品１</a></h4>
                  <div class="shopmeta clearfix">
                    <span>¥1,000~</span>
                  </div>
                  <!-- end shop-meta -->
                </div>
                <!-- end shop-item-title -->
              </div>
              <!-- entry -->
              <!-- ホバーボタン -->
              <div class="visible-buttons">
                <a title="お気に入り" href="shop-wishlist.html"
                  ><span class="icon-heart"></span
                ></a>
              </div>
              <!-- end buttons -->
            </div>
            <!-- end relative -->
          </div>
          <!-- end col -->

          <div class="col-md-3 col-xs-4">
            <div class="shop-item">
              <div class="entry">
                <a class="hover-image" href="shop-single-1.html" title="">
                  <div class="img-rotate">
                    <img src="upload/shop_13.jpg" alt="" />
                    <img
                      src="upload/shop_13_b.jpg"
                      class="rotate-image"
                      alt=""
                    />
                  </div>
                </a>
                <div class="shop-item-title text-center clearfix">
                  <h4><a href="shop-single-1.html">商品１</a></h4>
                  <div class="shopmeta clearfix">
                    <span>¥1,000~</span>
                  </div>
                  <!-- end shop-meta -->
                </div>
                <!-- end shop-item-title -->
              </div>
              <!-- entry -->
              <!-- ホバーボタン -->
              <div class="visible-buttons">
                <a title="お気に入り" href="shop-wishlist.html"
                  ><span class="icon-heart"></span
                ></a>
              </div>
              <!-- end buttons -->
            </div>
            <!-- end relative -->
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    <!-- end section -->

    <!-- フッター -->
    <footer class="footer border-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-15 col-md-6 col-sm-6 col-xs-12">
            <div class="widget clearfix">
              <div class="general-title">
                <h2>About Shopica</h2>
              </div>
              <div class="text-widget">
                <p>
                  Shopica is a ecommerce website template coded with Bootstrap
                  Framework, HTML and CSS3. This template comes with limitless
                  functions and moduler positions.
                </p>
              </div>
            </div>
            <!-- end widget -->
          </div>
          <!-- end col -->

          <div class="col-lg-15 col-md-6 col-sm-6 col-xs-12">
            <div class="widget clearfix">
              <div class="general-title">
                <h2>We Are Social</h2>
              </div>
              <div class="blog_categories clearfix">
                <ul class="check">
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Google Plus</a></li>
                  <li><a href="#">Pinterest</a></li>
                  <li><a href="#">Linkedin</a></li>
                </ul>
              </div>
              <!-- end blog_categories -->
            </div>
            <!-- end widget -->
          </div>
          <!-- end col -->

          <div class="col-lg-15 col-md-6 col-sm-6 col-xs-12">
            <div class="widget clearfix">
              <div class="general-title">
                <h2>Shop Categories</h2>
              </div>
              <div class="blog_categories clearfix">
                <ul class="check">
                  <li>
                    <a href="#">Women Shoes <span>(21)</span></a>
                  </li>
                  <li>
                    <a href="#">Special Offers <span>(12)</span></a>
                  </li>
                  <li>
                    <a href="#">Shopping Mall <span>(33)</span></a>
                  </li>
                  <li>
                    <a href="#">Guess You Like <span>(15)</span></a>
                  </li>
                  <li>
                    <a href="#">Warehouse <span>(43)</span></a>
                  </li>
                </ul>
              </div>
              <!-- end blog_categories -->
            </div>
            <!-- end widget -->
          </div>
          <!-- end col -->

          <div class="col-lg-15 col-md-6 col-sm-6 col-xs-12">
            <div class="widget clearfix">
              <div class="general-title">
                <h2>Customer Links</h2>
              </div>
              <div class="blog_categories clearfix">
                <ul class="check">
                  <li><a href="#">Shop Delivery Time</a></li>
                  <li><a href="#">Customer Support</a></li>
                  <li><a href="#">Order Tracking</a></li>
                  <li><a href="#">Affiliate Program</a></li>
                  <li><a href="#">Get In Touch</a></li>
                </ul>
              </div>
              <!-- end blog_categories -->
            </div>
            <!-- end widget -->
          </div>
          <!-- end col -->

          <div class="col-lg-15 col-md-6 col-sm-6 col-xs-12">
            <div class="widget clearfix">
              <div class="general-title">
                <h2>Site Pages</h2>
              </div>
              <div class="blog_categories clearfix">
                <ul class="check">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Who We Are</a></li>
                  <li><a href="#">Terms of Usage</a></li>
                  <li><a href="#">Copyrights</a></li>
                </ul>
              </div>
              <!-- end blog_categories -->
            </div>
            <!-- end widget -->
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </footer>
    <!-- end footer -->

    <footer class="footer bg-second border-top">
      <div class="container">
        <div class="row text-left">
          <div class="col-md-3">
            <div class="msidebar infobox">
              <h4>Payment Methods</h4>
              <p>
                <img src="images/paypal.png" alt="" class="img-fullwidth" />
              </p>
            </div>
            <!-- end msidebar -->
          </div>
          <!-- end col -->
          <div class="col-md-3">
            <div class="msidebar infobox">
              <h4>Free Shipping</h4>
              <p>We offer free shipping on all orders under $100.00.</p>
            </div>
            <!-- end msidebar -->
          </div>
          <div class="col-md-3">
            <div class="msidebar infobox">
              <h4>Money Back Guarantee</h4>
              <p>
                We offer 100% money back guarantee after one month purchase.
              </p>
            </div>
            <!-- end msidebar -->
          </div>
          <div class="col-md-3">
            <div class="msidebar infobox">
              <h4>Online Support 24/7</h4>
              <p>
                You're looking premium support? We offer professional support.
              </p>
            </div>
            <!-- end msidebar -->
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </footer>
    <!-- end footer -->

    <section class="section-footer bg-inverse border-top">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-5">
            <div class="media">
              <div class="media-left">
                <h3>Shopica</h3>
              </div>
              <small class="media-body media-bottom">
                &copy; Shopica.com 2015. <br />
                Designed by
                <a href="http://showwp.com">WordPress Showcase</a> Team
              </small>
            </div>
            <!-- end media -->
          </div>
          <!-- end col -->
          <div class="col-md-6 col-lg-7">
            <ul class="list-inline m-b-0">
              <li class="active"><a href="about.html">About Shopica.</a></li>
              <li><a href="contact.html">Get In Touch</a></li>
              <li>
                <a href="shop-delivery.html" target="_blank">Delivery Time</a>
              </li>
              <li>
                <a class="scroll-top" href="#totop"
                  >Back to top <span class="fa fa-angle-up"></span
                ></a>
              </li>
            </ul>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    <!-- end section -->
  </div>
  <!-- end wrapper -->
</template>

<script>
export default {}
</script>

<style>
</style>
