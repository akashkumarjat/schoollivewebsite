import React from "react";
import '../../assets/scss/paper-kit/plugins/testimonial.scss';
import { Carousel } from 'antd';
function TestimonialLandingPage() {
    return (
        <>
            <div className="container hostel-Testimonial  wow slideInUp">
                {/* <div className="squares square2" /> */}
                {/* <div className="squares square3" /> */}

                {/* <div className="squares square6" /> */}
                {/* <div className="squares square7" /> */}
                <h1>Testimonials</h1>
                <img className="img-fluid bg8" src={require("../../assets/img/bg8.png")} />

                <img className="img-fluid bg4" src={require("../../assets/img/bg4.png")} />

                <p className="testimonial-description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                </p>
                <div className="row testimonial-div">
                    <div class=" col-lg-12 col-md-12 col-sm-12 " >
                        <Carousel autoplay>
                            <div class="col-lg-8 col-md-12 col-sm-12">
                                <div class="testimonial">
                                    <div class="testimonial-pic">
                                        <img className="img-fluid" src={require("../../assets/img/1parent.jpg")} />
                                    </div>
                                    <p class="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.
                                            </p>
                                    <h3 class="title">Mr. Narjis</h3>
                                    <small class="post">-(Parent)</small>
                                </div>
                            </div>

                            <div class="col-lg-8 col-md-12 col-sm-12">
                                <div class="testimonial">
                                    <div class="testimonial-pic">
                                        <img src={require("../../assets/img/ryan.jpg")} />
                                    </div>
                                    <p class="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.
                                            </p>
                                    <h3 class="title"> Mr. Amrik</h3>
                                    <small class="post">-(IFS Officer)</small>
                                </div>
                            </div>

                            <div class="col-lg-8 col-md-12 col-sm-12">
                                <div class="testimonial">
                                    <div class="testimonial-pic">
                                        <img src={require("../../assets/img/eva.jpg")} />
                                    </div>
                                    <p class="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.
                                            </p>
                                    <h3 class="title"> Mr. Kataria</h3>
                                    <small class="post">-(Parent)</small>
                                </div>
                            </div>

                            <div class="col-lg-8 col-md-12 col-sm-12">
                                <div class="testimonial">
                                    <div class="testimonial-pic">
                                        <img src={require("../../assets/img/staff1.png")} />
                                    </div>
                                    <p class="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.
                                            </p>
                                    <h3 class="title">Mr. Ashok</h3>
                                    <small class="post">-(Parent)</small>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>


        </>
    );
}

export default TestimonialLandingPage;
