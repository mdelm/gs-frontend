import React, { useEffect, useState } from "react";
/* import {BackToTop} from 'react-back-to-top'; */

import { Component } from 'react'

export default function Page404() {
 
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
 
const scrollintoaabout = (id)=> {
  var my_element = document.getElementById(id);

my_element.scrollIntoView({
  behavior: "smooth",
  block: "start",
  inline: "nearest"
});
}
  useEffect(() => {
     window.addEventListener("scroll", toggleVisibility);
  }, []);
 
    
 
  return (

<body>

{/* <!-- ======= Top Bar ======= --> */}
{/* <section id="topbar" class="d-none d-lg-block">
  <div class="container d-flex">
     <div class="contact-info mr-auto">
      <i class="icofont-envelope"></i><a href="mailto:contact@example.com">contact@example.com</a>
      <i class="icofont-phone"></i> +1 5589 55488 55
    </div>
    <div class="social-links">
      <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
      <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
      <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
      <a href="#" class="skype"><i class="icofont-skype"></i></a>
      <a href="#" class="linkedin"><i class="icofont-linkedin"></i></a>
    </div> 
  </div>
</section> */}

{ /* <!-- ======= Header ======= --> */ }
<header id="header">
  <div class="container d-flex">

    <div class="logo mr-auto">
    
      <h1 class="text-light"><a href="index.html">
     
  
   <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <img src="assets/img/eee.png" alt="" class="img-fluid" /> <br/>
  
   CRDA-Mahdia
   </p>

       
       </a></h1>
      
     {/*  <!-- Uncomment below if you prefer to use an image logo --> */}
    {/*   <!--  */}<a href="index.html"></a>{/* --> */}
   
    </div>

    <nav class="nav-menu d-none d-lg-block">
      <ul>
        <li class="active" ><span  onClick={()=>scrollintoaabout("home")}>Home</span> </li>
        <li  ><span onClick={()=>scrollintoaabout("about")}> about us</span></li>
        <li><span onClick={()=>scrollintoaabout("services")}  >Services</span></li>
      {/*   <li><a  href="" >Portfolio</a></li>
        <li><a href="">Team</a></li> */}
       {/*  <li class="drop-down"><a href="">Drop Down</a>
          <ul>
            <li><a href="#">Drop Down 1</a></li>
            <li class="drop-down"><a href="#">Drop Down 2</a>
              <ul>
                <li><a href="#">Deep Drop Down 1</a></li>
                <li><a href="#">Deep Drop Down 2</a></li>
                <li><a href="#">Deep Drop Down 3</a></li>
                <li><a href="#">Deep Drop Down 4</a></li>
                <li><a href="#">Deep Drop Down 5</a></li>
              </ul>
            </li>
            <li><a href="#">Drop Down 3</a></li>
            <li><a href="#">Drop Down 4</a></li>
            <li><a href="#">Drop Down 5</a></li>
          </ul>
        </li>*/}
        <li><span onClick={()=>scrollintoaabout("contact")}>Contact Us</span></li> 
<li><section id="heronav"> <a href="#/dashboard" class="btn-get-started scrollto">
 Login</a></section></li>
      </ul>
    </nav>{/* <!-- .nav-menu --> */}

  </div>
</header>{/* /* <!-- End Header --> */

/* <!-- ======= Hero Section ======= --> */ }
 <section id="hero">
  <div class="hero-container" data-aos="fade-up">
  
 

    <h1>Welcome to Remember</h1>
    <h2>We are team of talented designers making websites with Bootstrap</h2>
    

    
    <a href="#/dashboard" class="btn-get-started scrollto">Login</a>
  </div>
</section> {/* <!-- End Hero -->  */}

<main id="main">
 
<section id="about" class="about">
      <div class="container">

        <div class="row">
          <div class="col-xl-6 col-lg-6 video-box d-flex justify-content-center align-items-stretch" data-aos="zoom-in">
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
          </div>

          <div class="col-xl-6 col-lg-6 d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <div class="box-heading" data-aos="fade-up">
            <a id="about_us"> <h4>About us</h4></a>
              <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
              <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>
            </div>

            <div class="icon-box" data-aos="fade-up">
              <div class="icon"><i class="bx bx-fingerprint"></i></div>
              <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>

            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div class="icon"><i class="bx bx-gift"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>

            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><i class="bx bx-atom"></i></div>
              <h4 class="title"><a href="">Dine Pad</a></h4>
              <p class="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
            </div>

          </div>
        </div>

      </div>
    </section>

    <section id="services" class="services">
      <div class="container">

        <div class="section-title" data-aos="zoom-in">
          <h2>Services</h2>
          <h3>Our Awesome <span>Services</span></h3>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box" data-aos="zoom-in">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4><a href="">Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div class="icon-box" data-aos="zoom-in" data-aos-delay="100">
              <div class="icon"><i class="bx bx-file"></i></div>
              <h4><a href="">Sed ut perspiciatis</a></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="icon-box" data-aos="zoom-in" data-aos-delay="200">
              <div class="icon"><i class="bx bx-tachometer"></i></div>
              <h4><a href="">Magni Dolores</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box" data-aos="zoom-in" data-aos-delay="300">
              <div class="icon"><i class="bx bx-world"></i></div>
              <h4><a href="">Nemo Enim</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box" data-aos="zoom-in" data-aos-delay="400">
              <div class="icon"><i class="bx bx-slideshow"></i></div>
              <h4><a href="">Dele cardo</a></h4>
              <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box" data-aos="zoom-in" data-aos-delay="500">
              <div class="icon"><i class="bx bx-arch"></i></div>
              <h4><a href="">Divera don</a></h4>
              <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
          </div>

        </div>

      </div>
    </section>

  
     <section id="contact" class="contact">

      <div class="container">

        <div class="section-title" data-aos="zoom-in">
          <h2>Contact</h2>
          <h3>Check our <span>Contact</span> Details</h3>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>

        {/* <div>
          <iframe style="border:0; width: 100%; height: 270px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
        </div> */}

        <div class="row mt-5">

          <div class="col-lg-4" data-aos="fade-right">
            <div class="info">
              <div class="address">
                <i class="icofont-google-map"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div class="email">
                <i class="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div class="phone">
                <i class="icofont-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

            </div>

          </div>

          <div class="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">

            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="form-row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validate"></div>
                </div>
                <div class="col-md-6 form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validate"></div>
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validate"></div>
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div class="validate"></div>
              </div>
              <div class="mb-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>
 

<footer id="footer">

<div class="footer-top">

  <div class="container">

    <div class="row  justify-content-center">
      <div class="col-lg-6">
        <h3>Remember</h3>
        <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
      </div>
    </div>

    <div class="row footer-newsletter justify-content-center">
      <div class="col-lg-6">
        <form action="" method="post">
          <input type="email" name="email" placeholder="Enter your Email"/><input type="submit" value="Subscribe"/>
        </form>
      </div>
    </div>

    <div class="social-links">
      <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
      <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
      <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
      <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
      <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
    </div>

  </div>
</div>

<div class="container footer-bottom clearfix">
  <div class="copyright">
    &copy; Copyright <strong><span>Remember</span></strong>. All Rights Reserved
  </div>
  <div class="credits">
    {/* <!-- All the links in the footer should remain intact. -->
    <!-- You can delete the links only if you purchased the pro version. -->
    <!-- Licensing information: https://bootstrapmade.com/license/ -->
    <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/remember-free-multipurpose-bootstrap-template/ --> */}
    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
  </div>
</div>
</footer>

 {isVisible && 
   <a   onClick={scrollToTop}  class="back-to-top" style={{cursor:"pointer"}}>  
       <i class="bx bxs-up-arrow-alt"></i> </a>  } 
      

  </main>
</body>
  )
}