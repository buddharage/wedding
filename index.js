import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './src/components/Home';
import About from './src/components/About';

render((
  <Router>
    <div className="wrapper">
      <ul role="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <Route path="/" component={Home} />
      <Route path="/about" component={About}/>

      <header id="nav-header">
        <nav id="nav-bar" className="top-bar fluid-width transparent nav-center sticky-nav animation fadeInDown">

          <div id="nav-wrapper">

            <div className="logo-wrapper">
              <a href="index.html">
                <div className="css-logo rounded">
                  <div className="css-logo-text">
                    <strong>G</strong><i className="de-icon-heart-1"></i><strong>D</strong>
                  </div>
                </div>
              </a>

              <a href="index.html">
                <div className="img-logo">
                  <img src="images/slide1.jpg" />
                </div>
              </a>
            </div>

            <div id="mobile-nav">
              <i className="de-icon-menu"></i>
            </div>

            <ul id="nav-menu">
              <li className="first-child">
                <a href="index.html">HOME</a>
                <ul>
                  <li>
                    <a href="#">MENU VARIATIONS</a>
                    <ul>
                      <li><a href="index.html">TOP BAR - TRANSPARENT</a></li>
                      <li><a href="index-topbar-color.html">TOP BAR - COLOR</a></li>
                      <li><a href="index-bottombar-transparent.html">BOTTOM BAR - TRANSPARENT</a></li>
                      <li><a href="index-bottombar-color.html">BOTTOM BAR - COLOR</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">SLIDER VARIATIONS</a>
                    <ul>
                      <li><a href="index.html">IMAGE - FADE</a></li>
                      <li><a href="index-slide.html">IMAGE - SLIDE</a></li>
                      <li><a href="index-image-animation-v1.html">IMAGE - ANIMATION - MUSIC - V1</a></li>
                      <li><a href="index-image-animation-v2.html">IMAGE - ANIMATION - MUSIC - V2</a></li>
                      <li><a href="index-title-animation.html">TITLE - ANIMATION</a></li>
                      <li><a href="index-image-title-animation.html">TITLE &amp; IMAGE - ANIMATION</a></li>
                      <li><a href="index-video.html">VIDEO</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">PRELOADER VARIATIONS</a>
                    <ul>
                      <li><a href="index.html">PRELOADER - DEFAULT</a></li>
                      <li><a href="index-preloader-logo-spinner.html">PRELOADER - V1</a></li>
                      <li><a href="index-preloader-couple-name.html">PRELOADER - V2</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">ABOUT</a>
                <ul>
                  <li>
                    <a href="profile-him.html">ABOUT HIM</a>
                  </li>
                  <li>
                    <a href="profile-her.html">ABOUT HER</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">GALLERY</a>
                <ul>
                  <li><a href="gallery.html">GALLERY</a></li>
                  <li><a href="gallery-slider.html">GALLERY WITH SLIDER</a></li>
                  <li><a href="gallery-full-5col.html">FULL GALLERY - 5 COLUMN</a></li>
                  <li><a href="gallery-full-4col.html">FULL GALLERY - 4 COLUMN</a></li>
                  <li><a href="gallery-full-3col.html">FULL GALLERY - 3 COLUMN</a></li>
                </ul>
              </li>
              <li><a href="the-story.html">THE STORY</a></li>
              <li className="first-child split-margin">
                <a href="#">THE WEDDING</a>
                <ul>
                  <li><a href="location.html">LOCATION</a></li>
                  <li><a href="accomodation.html">ACCOMODATION</a></li>
                  <li>
                    <a href="#">BRIDESMAID</a>
                    <ul>
                      <li><a href="bridesmaid-gallery.html">BRIDESMAID GALLERY</a></li>
                      <li><a href="bridesmaid-parallax-image.html">BRIDESMAID - PARALLAX IMAGE</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">GROOMSMEN</a>
                    <ul>
                      <li><a href="groomsmen-gallery.html">GROOMSMEN GALLERY</a></li>
                      <li><a href="groomsmen-parallax-image.html">GROOMSMEN - PARALLAX IMAGE</a></li>
                    </ul>
                  </li>
                  <li><a href="gift.html">GIFT REGISTRY</a></li>
                </ul>
              </li>

              <li>
                <a href="#">BLOG</a>
                <ul>
                  <li><a href="blog.html">BLOG</a></li>
                  <li><a href="blog-slider.html">BLOG SLIDER</a></li>
                  <li><a href="blog-parallax-image.html">BLOG PARALLAX IMAGE</a></li>
                  <li><a href="blog-parallax-sidebar.html">BLOG PARALLAX - SIDEBAR</a></li>
                </ul>
              </li>
              <li>
                <a href="page.html">PAGE</a>
              </li>
              <li>
                <a href="#">RSVP</a>
                <ul>
                  <li><a href="rsvp-1.html">RSVP - 1</a></li>
                  <li><a href="rsvp-2.html">RSVP - 2</a></li>
                  <li><a href="rsvp-3.html">RSVP - 3</a></li>
                  <li><a href="rsvp-custom.html">CUSTOM</a></li>
                </ul>
              </li>
            </ul>

            <div className="clearboth"></div>
          </div>
        </nav>
      </header>

      <section id="main-slider" className="flexslider fullscreen">
        <div className="slide-title-outter-wrapper">
          <div className="slide-title-inner-wrapper">
            <div className="slide-title align-middle">
              <div className="container">
                <div className="row">
                  <div className="col-md-offset-3 col-md-6 animation delay1 fadeInUp">
                    <div id="save-the-date">
                      <div id="save">Save</div>
                      <div id="the-date">The Date</div>
                      <div id="date">- 19<span className="pink-dot">.</span>08<span className="pink-dot">.</span>15 -</div>
                    </div>
                    <div className="banner-text light medium" style={{ letterSpacing: '3px' }}>
                      <h4>*** WE ARE GETTING MARRIED ***</h4>
                    </div>
                    <div className="heart-divider" style={{ margin: 0 }}>
                      <span className="white-line" style={{ width: '10px' }}></span>
                      <i className="de-icon-heart pink-heart"></i>
                      <i className="de-icon-heart white-heart"></i>
                      <span className="white-line" style={{ width: '10px' }}></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Router>
), document.getElementById('root'));
