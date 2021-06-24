import React, { Component } from 'react';

class index extends Component {

    render() {
        return (
            <div>
                <div className="host_version"> 
                <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header tit-up">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 className="modal-title">Customer Login</h4>
                        </div>
                        <div className="modal-body customer-box">
                        {/* Nav tabs */}
                        <ul className="nav nav-tabs">
                            <li><a className="active" href="#Login" data-toggle="tab">Login</a></li>
                            <li><a href="#Registration" data-toggle="tab">Registration</a></li>
                        </ul>
                        {/* Tab panes */}
                        <div className="tab-content">
                            <div className="tab-pane active" id="Login">
                            <form role="form" className="form-horizontal">
                                <div className="form-group">
                                <div className="col-sm-12">
                                    <input className="form-control" id="email1" placeholder="Name" type="text" />
                                </div>
                                </div>
                                <div className="form-group">
                                <div className="col-sm-12">
                                    <input className="form-control" id="exampleInputPassword1" placeholder="Email" type="email" />
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-sm-10">
                                    <button type="submit" className="btn btn-light btn-radius btn-brd grd1">
                                    Submit
                                    </button>
                                    <a className="for-pwd" href="javascript:;">Forgot your password?</a>
                                </div>
                                </div>
                            </form>
                            </div>
                            <div className="tab-pane" id="Registration">
                            <form role="form" className="form-horizontal">
                                <div className="form-group">
                                <div className="col-sm-12">
                                    <input className="form-control" placeholder="Name" type="text" />
                                </div>
                                </div>
                                <div className="form-group">
                                <div className="col-sm-12">
                                    <input className="form-control" id="email" placeholder="Email" type="email" />
                                </div>
                                </div>
                                <div className="form-group">
                                <div className="col-sm-12">
                                    <input className="form-control" id="mobile" placeholder="Mobile" type="email" />
                                </div>
                                </div>
                                <div className="form-group">
                                <div className="col-sm-12">
                                    <input className="form-control" id="password" placeholder="Password" type="password" />
                                </div>
                                </div>
                                <div className="row">							
                                <div className="col-sm-10">
                                    <button type="button" className="btn btn-light btn-radius btn-brd grd1">
                                    Save &amp; Continue
                                    </button>
                                    <button type="button" className="btn btn-light btn-radius btn-brd grd1">
                                    Cancel</button>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* LOADER */}
                <div id="preloader">
                    <div className="loader-container">
                    <div className="progress-br float shadow">
                        <div className="progress__item" />
                    </div>
                    </div>
                </div>
                <header className="top-navbar">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="index.html">
                        <img src="images/logo.png" alt />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-host" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbars-host">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="about.html">About Us</a></li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown-a" data-toggle="dropdown">Course </a>
                            <div className="dropdown-menu" aria-labelledby="dropdown-a">
                                <a className="dropdown-item" href="course-grid-2.html">Course Grid 2 </a>
                                <a className="dropdown-item" href="course-grid-3.html">Course Grid 3 </a>
                                <a className="dropdown-item" href="course-grid-4.html">Course Grid 4 </a>
                            </div>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown-a" data-toggle="dropdown">Blog </a>
                            <div className="dropdown-menu" aria-labelledby="dropdown-a">
                                <a className="dropdown-item" href="blog.html">Blog </a>
                                <a className="dropdown-item" href="blog-single.html">Blog single </a>
                            </div>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="teachers.html">Teachers</a></li>
                            <li className="nav-item"><a className="nav-link" href="pricing.html">Pricing</a></li>
                            <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a className="hover-btn-new log orange" href="#" data-toggle="modal" data-target="#login"><span>Book Now</span></a></li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                </header>
                {/* End header */}
                <div id="carouselExampleControls" className="carousel slide bs-slider box-slider" data-ride="carousel" data-pause="hover" data-interval="false">
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                    <li data-target="#carouselExampleControls" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleControls" data-slide-to={1} />
                    <li data-target="#carouselExampleControls" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <div id="home" className="first-section" style={{backgroundImage: 'url("images/slider-01.jpg")'}}>
                        <div className="dtab">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 text-right">
                                <div className="big-tagline">
                                    <h2><strong>SmartEDU </strong> education College</h2>
                                    <p className="lead">With Landigoo responsive landing page template, you can promote your all hosting, domain and email services. </p>
                                    <a href="#" className="hover-btn-new"><span>Contact Us</span></a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="#" className="hover-btn-new"><span>Read More</span></a>
                                </div>
                                </div>
                            </div>{/* end row */}            
                            </div>{/* end container */}
                        </div>
                        </div>{/* end section */}
                    </div>
                    <div className="carousel-item">
                        <div id="home" className="first-section" style={{backgroundImage: 'url("images/slider-02.jpg")'}}>
                        <div className="dtab">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 text-left">
                                <div className="big-tagline">
                                    <h2 data-animation="animated zoomInRight">SmartEDU <strong>education school</strong></h2>
                                    <p className="lead" data-animation="animated fadeInLeft">With Landigoo responsive landing page template, you can promote your all hosting, domain and email services. </p>
                                    <a href="#" className="hover-btn-new"><span>Contact Us</span></a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="#" className="hover-btn-new"><span>Read More</span></a>
                                </div>
                                </div>
                            </div>{/* end row */}            
                            </div>{/* end container */}
                        </div>
                        </div>{/* end section */}
                    </div>
                    <div className="carousel-item">
                        <div id="home" className="first-section" style={{backgroundImage: 'url("images/slider-03.jpg")'}}>
                        <div className="dtab">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 text-center">
                                <div className="big-tagline">
                                    <h2 data-animation="animated zoomInRight"><strong>VPS Servers</strong> Company</h2>
                                    <p className="lead" data-animation="animated fadeInLeft">1 IP included with each server 
                                    Your Choice of any OS (CentOS, Windows, Debian, Fedora)
                                    FREE Reboots</p>
                                    <a href="#" className="hover-btn-new"><span>Contact Us</span></a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="#" className="hover-btn-new"><span>Read More</span></a>
                                </div>
                                </div>
                            </div>{/* end row */}            
                            </div>{/* end container */}
                        </div>
                        </div>{/* end section */}
                    </div>
                    {/* Left Control */}
                    <a className="new-effect carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="fa fa-angle-left" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    {/* Right Control */}
                    <a className="new-effect carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="fa fa-angle-right" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                    </div>
                </div>
                <div id="overviews" className="section wb">
                    <div className="container">
                    <div className="section-title row text-center">
                        <div className="col-md-8 offset-md-2">
                        <h3>About</h3>
                        <p className="lead">Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem!</p>
                        </div>
                    </div>{/* end title */}
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="message-box">
                            <h4>2018 BEST SmartEDU education school</h4>
                            <h2>Welcome to SmartEDU education school</h2>
                            <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim.</p>
                            <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis montes, nascetur ridiculus mus. Sed vitae rutrum neque. </p>
                            <a href="#" className="hover-btn-new orange"><span>Learn More</span></a>
                        </div>{/* end messagebox */}
                        </div>{/* end col */}
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="post-media wow fadeIn">
                            <img src="images/about_02.jpg" alt className="img-fluid img-rounded" />
                        </div>{/* end media */}
                        </div>{/* end col */}
                    </div>
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="post-media wow fadeIn">
                            <img src="images/about_03.jpg" alt className="img-fluid img-rounded" />
                        </div>{/* end media */}
                        </div>{/* end col */}
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="message-box">
                            <h2>The standard Lorem Ipsum passage, used since the 1500s</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum.</p>
                            <a href="#" className="hover-btn-new orange"><span>Learn More</span></a>
                        </div>{/* end messagebox */}
                        </div>{/* end col */}
                    </div>{/* end row */}
                    </div>{/* end container */}
                </div>{/* end section */}
                <section className="section lb page-section">
                    <div className="container">
                    <div className="section-title row text-center">
                        <div className="col-md-8 offset-md-2">
                        <h3>Our history</h3>
                        <p className="lead">Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem!</p>
                        </div>
                    </div>{/* end title */}
                    <div className="timeline">
                        <div className="timeline__wrap">
                        <div className="timeline__items">
                            <div className="timeline__item">
                            <div className="timeline__content img-bg-01">
                                <h2>2018</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </div>
                            <div className="timeline__item">
                            <div className="timeline__content img-bg-02">
                                <h2>2015</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </div>
                            <div className="timeline__item">
                            <div className="timeline__content img-bg-03">
                                <h2>2014</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </div>
                            <div className="timeline__item">
                            <div className="timeline__content img-bg-04">
                                <h2>2012</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </div>
                            <div className="timeline__item">
                            <div className="timeline__content img-bg-01">
                                <h2>2010</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </div>
                            <div className="timeline__item">
                            <div className="timeline__content img-bg-02">
                                <h2>2007</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </div>
                            <div className="timeline__item">
                            <div className="timeline__content img-bg-03">
                                <h2>2004</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </div>
                            <div className="timeline__item">
                            <div className="timeline__content img-bg-04">
                                <h2>2002</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                <div className="section cl">
                    <div className="container">
                    <div className="row text-left stat-wrap">
                        <div className="col-md-4 col-sm-4 col-xs-12">
                        <span data-scroll className="global-radius icon_wrap effect-1 alignleft"><i className="flaticon-study" /></span>
                        <p className="stat_count">12000</p>
                        <h3>Students</h3>
                        </div>{/* end col */}
                        <div className="col-md-4 col-sm-4 col-xs-12">
                        <span data-scroll className="global-radius icon_wrap effect-1 alignleft"><i className="flaticon-online" /></span>
                        <p className="stat_count">240</p>
                        <h3>Courses</h3>
                        </div>{/* end col */}
                        <div className="col-md-4 col-sm-4 col-xs-12">
                        <span data-scroll className="global-radius icon_wrap effect-1 alignleft"><i className="flaticon-years" /></span>
                        <p className="stat_count">55</p>
                        <h3>Years Completed</h3>
                        </div>{/* end col */}
                    </div>{/* end row */}
                    </div>{/* end container */}
                </div>{/* end section */}
                <div id="plan" className="section lb">
                    <div className="container">
                    <div className="section-title text-center">
                        <h3>Choose Your Plan</h3>
                        <p>Lorem ipsum dolor sit aet, consectetur adipisicing lit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>{/* end title */}
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                        <div className="message-box">
                            <ul className="nav nav-pills nav-stacked" id="myTabs">
                            <li><a className="active" href="#tab1" data-toggle="pill">Monthly Subscription</a></li>
                            <li><a href="#tab2" data-toggle="pill">Yearly Subscription</a></li>
                            </ul>
                        </div>
                        </div>{/* end col */}
                    </div>
                    <hr className="invis" />
                    <div className="row">
                        <div className="col-md-12">
                        <div className="tab-content">
                            <div className="tab-pane active fade show" id="tab1">
                            <div className="row text-center">
                                <div className="col-md-4">
                                <div className="pricing-table pricing-table-highlighted">
                                    <div className="pricing-table-header grd1">
                                    <h2>$45</h2>
                                    <h3>per month</h3>
                                    </div>
                                    <div className="pricing-table-space" />
                                    <div className="pricing-table-features">
                                    <p><i className="fa fa-envelope-o" /> <strong>250</strong> Email Addresses</p>
                                    <p><i className="fa fa-rocket" /> <strong>125GB</strong> of Storage</p>
                                    <p><i className="fa fa-database" /> <strong>140</strong> Databases</p>
                                    <p><i className="fa fa-link" /> <strong>60</strong> Domains</p>
                                    <p><i className="fa fa-life-ring" /> <strong>24/7 Unlimited</strong> Support</p>
                                    </div>
                                    <div className="pricing-table-sign-up">
                                    <a href="#" className="hover-btn-new orange"><span>Order Now</span></a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-4">
                                <div className="pricing-table pricing-table-highlighted">
                                    <div className="pricing-table-header grd1">
                                    <h2>$59</h2>
                                    <h3>per month</h3>
                                    </div>
                                    <div className="pricing-table-space" />
                                    <div className="pricing-table-features">
                                    <p><i className="fa fa-envelope-o" /> <strong>150</strong> Email Addresses</p>
                                    <p><i className="fa fa-rocket" /> <strong>65GB</strong> of Storage</p>
                                    <p><i className="fa fa-database" /> <strong>60</strong> Databases</p>
                                    <p><i className="fa fa-link" /> <strong>30</strong> Domains</p>
                                    <p><i className="fa fa-life-ring" /> <strong>24/7 Unlimited</strong> Support</p>
                                    </div>
                                    <div className="pricing-table-sign-up">
                                    <a href="#" className="hover-btn-new orange"><span>Order Now</span></a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-4">
                                <div className="pricing-table pricing-table-highlighted">
                                    <div className="pricing-table-header grd1">
                                    <h2>$85</h2>
                                    <h3>per month</h3>
                                    </div>
                                    <div className="pricing-table-space" />
                                    <div className="pricing-table-features">
                                    <p><i className="fa fa-envelope-o" /> <strong>250</strong> Email Addresses</p>
                                    <p><i className="fa fa-rocket" /> <strong>125GB</strong> of Storage</p>
                                    <p><i className="fa fa-database" /> <strong>140</strong> Databases</p>
                                    <p><i className="fa fa-link" /> <strong>60</strong> Domains</p>
                                    <p><i className="fa fa-life-ring" /> <strong>24/7 Unlimited</strong> Support</p>
                                    </div>
                                    <div className="pricing-table-sign-up">
                                    <a href="#" className="hover-btn-new orange"><span>Order Now</span></a>
                                    </div>
                                </div>
                                </div>
                            </div>{/* end row */}
                            </div>{/* end pane */}
                            <div className="tab-pane fade" id="tab2">
                            <div className="row text-center">
                                <div className="col-md-4">
                                <div className="pricing-table pricing-table-highlighted">
                                    <div className="pricing-table-header grd1">
                                    <h2>$477</h2>
                                    <h3>Year</h3>
                                    </div>
                                    <div className="pricing-table-space" />
                                    <div className="pricing-table-features">
                                    <p><i className="fa fa-envelope-o" /> <strong>250</strong> Email Addresses</p>
                                    <p><i className="fa fa-rocket" /> <strong>125GB</strong> of Storage</p>
                                    <p><i className="fa fa-database" /> <strong>140</strong> Databases</p>
                                    <p><i className="fa fa-link" /> <strong>60</strong> Domains</p>
                                    <p><i className="fa fa-life-ring" /> <strong>24/7 Unlimited</strong> Support</p>
                                    </div>
                                    <div className="pricing-table-sign-up">
                                    <a href="#" className="hover-btn-new orange"><span>Order Now</span></a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-4">
                                <div className="pricing-table pricing-table-highlighted">
                                    <div className="pricing-table-header grd1">
                                    <h2>$485</h2>
                                    <h3>Year</h3>
                                    </div>
                                    <div className="pricing-table-space" />
                                    <div className="pricing-table-features">
                                    <p><i className="fa fa-envelope-o" /> <strong>150</strong> Email Addresses</p>
                                    <p><i className="fa fa-rocket" /> <strong>65GB</strong> of Storage</p>
                                    <p><i className="fa fa-database" /> <strong>60</strong> Databases</p>
                                    <p><i className="fa fa-link" /> <strong>30</strong> Domains</p>
                                    <p><i className="fa fa-life-ring" /> <strong>24/7 Unlimited</strong> Support</p>
                                    </div>
                                    <div className="pricing-table-sign-up">
                                    <a href="#" className="hover-btn-new orange"><span>Order Now</span></a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-4">
                                <div className="pricing-table pricing-table-highlighted">
                                    <div className="pricing-table-header grd1">
                                    <h2>$500</h2>
                                    <h3>Year</h3>
                                    </div>
                                    <div className="pricing-table-space" />
                                    <div className="pricing-table-features">
                                    <p><i className="fa fa-envelope-o" /> <strong>250</strong> Email Addresses</p>
                                    <p><i className="fa fa-rocket" /> <strong>125GB</strong> of Storage</p>
                                    <p><i className="fa fa-database" /> <strong>140</strong> Databases</p>
                                    <p><i className="fa fa-link" /> <strong>60</strong> Domains</p>
                                    <p><i className="fa fa-life-ring" /> <strong>24/7 Unlimited</strong> Support</p>
                                    </div>
                                    <div className="pricing-table-sign-up">
                                    <a href="#" className="hover-btn-new orange"><span>Order Now</span></a>
                                    </div>
                                </div>
                                </div>
                            </div>{/* end row */}
                            </div>{/* end pane */}
                        </div>{/* end content */}
                        </div>{/* end col */}
                    </div>{/* end row */}
                    </div>{/* end container */}
                </div>{/* end section */}
                <div id="testimonials" className="parallax section db parallax-off" style={{backgroundImage: 'url("images/parallax_04.jpg")'}}>
                    <div className="container">
                    <div className="section-title text-center">
                        <h3>Testimonials</h3>
                        <p>Lorem ipsum dolor sit aet, consectetur adipisicing lit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>{/* end title */}
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                        <div className="testi-carousel owl-carousel owl-theme">
                            <div className="testimonial clearfix">
                            <div className="testi-meta">
                                <img src="images/testi_01.png" alt className="img-fluid" />
                                <h4>James Fernando </h4>
                            </div>
                            <div className="desc">
                                <h3><i className="fa fa-quote-left" /> Wonderful Support!</h3>
                                <p className="lead">They have got my project on time with the competition with a sed highly skilled, and experienced &amp; professional team.</p>
                            </div>
                            {/* end testi-meta */}
                            </div>
                            {/* end testimonial */}
                            <div className="testimonial clearfix">
                            <div className="testi-meta">
                                <img src="images/testi_02.png" alt className="img-fluid" />
                                <h4>Jacques Philips </h4>
                            </div>
                            <div className="desc">
                                <h3><i className="fa fa-quote-left" /> Awesome Services!</h3>
                                <p className="lead">Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you completed.</p>
                            </div>
                            {/* end testi-meta */}
                            </div>
                            {/* end testimonial */}
                            <div className="testimonial clearfix">
                            <div className="testi-meta">
                                <img src="images/testi_03.png" alt className="img-fluid " />
                                <h4>Venanda Mercy </h4>
                            </div>
                            <div className="desc">
                                <h3><i className="fa fa-quote-left" /> Great &amp; Talented Team!</h3>
                                <p className="lead">The master-builder of human happines no one rejects, dislikes avoids pleasure itself, because it is very pursue pleasure. </p>
                            </div>
                            {/* end testi-meta */}
                            </div>
                            {/* end testimonial */}
                            <div className="testimonial clearfix">
                            <div className="testi-meta">
                                <img src="images/testi_01.png" alt className="img-fluid" />
                                <h4>James Fernando </h4>
                            </div>
                            <div className="desc">
                                <h3><i className="fa fa-quote-left" /> Wonderful Support!</h3>
                                <p className="lead">They have got my project on time with the competition with a sed highly skilled, and experienced &amp; professional team.</p>
                            </div>
                            {/* end testi-meta */}
                            </div>
                            {/* end testimonial */}
                            <div className="testimonial clearfix">
                            <div className="testi-meta">
                                <img src="images/testi_02.png" alt className="img-fluid" />
                                <h4>Jacques Philips </h4>
                            </div>
                            <div className="desc">
                                <h3><i className="fa fa-quote-left" /> Awesome Services!</h3>
                                <p className="lead">Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you completed.</p>
                            </div>
                            {/* end testi-meta */}
                            </div>
                            {/* end testimonial */}
                            <div className="testimonial clearfix">
                            <div className="testi-meta">
                                <img src="images/testi_03.png" alt className="img-fluid" />
                                <h4>Venanda Mercy </h4>
                            </div>
                            <div className="desc">
                                <h3><i className="fa fa-quote-left" /> Great &amp; Talented Team!</h3>
                                <p className="lead">The master-builder of human happines no one rejects, dislikes avoids pleasure itself, because it is very pursue pleasure. </p>
                            </div>
                            {/* end testi-meta */}
                            </div>{/* end testimonial */}
                        </div>{/* end carousel */}
                        </div>{/* end col */}
                    </div>{/* end row */}
                    </div>{/* end container */}
                </div>{/* end section */}
                <div className="parallax section dbcolor">
                    <div className="container">
                    <div className="row logos">
                        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                        <a href="#"><img src="images/logo_01.png" alt className="img-repsonsive" /></a>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                        <a href="#"><img src="images/logo_02.png" alt className="img-repsonsive" /></a>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                        <a href="#"><img src="images/logo_03.png" alt className="img-repsonsive" /></a>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                        <a href="#"><img src="images/logo_04.png" alt className="img-repsonsive" /></a>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                        <a href="#"><img src="images/logo_05.png" alt className="img-repsonsive" /></a>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                        <a href="#"><img src="images/logo_06.png" alt className="img-repsonsive" /></a>
                        </div>
                    </div>{/* end row */}
                    </div>{/* end container */}
                </div>{/* end section */}
                <footer className="footer">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-xs-12">
                        <div className="widget clearfix">
                            <div className="widget-title">
                            <h3>About US</h3>
                            </div>
                            <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis montes.</p>   
                            <div className="footer-right">
                            <ul className="footer-links-soi">
                                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                <li><a href="#"><i className="fa fa-github" /></a></li>
                                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                                <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                            </ul>{/* end links */}
                            </div>						
                        </div>{/* end clearfix */}
                        </div>{/* end col */}
                        <div className="col-lg-4 col-md-4 col-xs-12">
                        <div className="widget clearfix">
                            <div className="widget-title">
                            <h3>Information Link</h3>
                            </div>
                            <ul className="footer-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            </ul>{/* end links */}
                        </div>{/* end clearfix */}
                        </div>{/* end col */}
                        <div className="col-lg-4 col-md-4 col-xs-12">
                        <div className="widget clearfix">
                            <div className="widget-title">
                            <h3>Contact Details</h3>
                            </div>
                            <ul className="footer-links">
                            <li><a href="mailto:#">info@yoursite.com</a></li>
                            <li><a href="#">www.yoursite.com</a></li>
                            <li>PO Box 16122 Collins Street West Victoria 8007 Australia</li>
                            <li>+61 3 8376 6284</li>
                            </ul>{/* end links */}
                        </div>{/* end clearfix */}
                        </div>{/* end col */}
                    </div>{/* end row */}
                    </div>{/* end container */}
                </footer>{/* end footer */}
                <div className="copyrights">
                    <div className="container">
                    <div className="footer-distributed">
                        <div className="footer-center">                   
                        <p className="footer-company-name">All Rights Reserved. © 2018 <a href="#">SmartEDU</a> Design By : <a href="https://html.design/">html design</a></p>
                        </div>
                    </div>
                    </div>
                </div>
                <a href="#" id="scroll-to-top" className="dmtop global-radius"><i className="fa fa-angle-up" /></a>
                </div>

            </div>
        );
    }
}

export default index;