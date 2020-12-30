import React from "react";
import '../../assets/scss/paper-kit/plugins/hostal.scss';
import { Row, Col, Carousel } from 'antd';
import { ArrowRightOutlined, PlayCircleOutlined } from '@ant-design/icons';
import {
    Button
} from "reactstrap";

function Hostal() {
    return (
        <>
            <div className="container ">
                <div className="row hostel-section wow slideInUp">
                    <div className="col-lg-12 col-md-12 col-sm-12 ">
                        <h2>
                            Welcome to our hostel
                        </h2>
                        <p>
                            Despite hostels being a great place to learn, work & live, their potential has always been underutilized. At Aarusha, we unleash the joy and power of living with peers by creating a community with all the benefits, liberties, comforts and conveniences of home.
                        </p>
                    </div>
                </div>




                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 wow slideInUp ">
                        <img className=" img-fluid" alt="..." src="http://cityhostel.axiomthemes.com/wp-content/uploads/2016/12/bg_hello.jpg?id=278" />

                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 hostel-side-card  wow slideInUp">
                        <h3> A benchmark in Student Housing</h3>
                        <p>
                            Apart from catering high quality accommodation, nutrition & security, we help students thrive by providing career counselling and organising community events which makes our student housing stand out way.
                        </p>

                        <div className="list">
                            <ol class="gradient-list">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Aenean tincidunt elit at ipsum cursus, vitae interdum nulla.</li>
                                <li>Curabitur in orci vel risus facilisis accumsan.</li>

                            </ol>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 hostel-facility-part wow slideInUp">
                    <h2>
                        Why Campus Student Communities ?
                    </h2>

                </div>



                <div class="blob">
                    <svg xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
                        <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
                    </svg>
                </div>

                <div className="row wow slideInUp">
                    <div className="col-lg-3 col-md-6 col-sm-12 hostel_icon">
                        <div className="icon-div">
                            <i class="fa fa-calendar-o effect-2 hostel-icons"></i>
                        </div>
                        <h4>Expertise</h4>
                        <p>One & half decades of excellence in Student Hostel Accommodation</p>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 hostel_icon">
                        <div className="icon-div">
                            <i class="fa fa-home effect-2 hostel-icons"></i>
                        </div>
                        <h4>Accomodation</h4>
                        <p>Contented Stay with Modern Facilities</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 hostel_icon">
                        <div className="icon-div">
                            <i class="fa fa-shopping-cart effect-2 hostel-icons"></i>
                        </div>
                        <h4>Laundry</h4>
                        <p>On demand Laundry Facility</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 hostel_icon">
                        <div className="icon-div">
                            <i class="fa fa-wifi effect-2 hostel-icons"></i>
                        </div>
                        <h4>Internet</h4>
                        <p>Exceptional Wi-Fi Connectivity</p>
                    </div>
                </div>

                <div className="row wow slideInUp">
                    <div className="col-lg-3 col-md-6 col-sm-12 hostel_icon">
                        <div className="icon-div">
                            <i class="fa fa-medkit effect-2 hostel-icons"></i>
                        </div>
                        <h4>Mediclaim</h4>
                        <p>Cashless Mediclaim & Medical Assistance</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 hostel_icon">
                        <div className="icon-div">
                            <i class="fa fa-cutlery effect-2 hostel-icons"></i>
                        </div>
                        <h4>Signature Meals</h4>
                        <p>Healthy, Nutritious & Hygenic Food</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 hostel_icon">
                        <div className="icon-div">
                            <i class="fa fa-video-camera effect-2 hostel-icons"></i>
                        </div>
                        <h4>24 Hours Security</h4>
                        <p>CCTV Surveillance & Round the Clock Security</p>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 hostel_icon">
                        <div className="icon-div">
                            <i class="fa fa-calendar-o effect-2 hostel-icons"></i>
                        </div>
                        <h4>Events</h4>
                        <p>Personality Developement Program</p>

                    </div>
                </div>




                <div className="row wow slideInUp">
                    <div class=" col-lg-12 col-md-12 col-sm-12 gallery1-text" >
                        <h1>
                            Hostel
                        </h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        </p>
                        <div class="grid-container">
                            <div>
                                <img class='grid-item grid-item-1' src={require("../../assets/img/hostel1.jpg")} alt='' />.
                                <p> Lorem Ipsum </p>
                            </div>
                            <div>
                                <img class='grid-item grid-item-2' src={require("../../assets/img/hostel2.jpg")} alt='' />
                                <p> Lorem Ipsum </p>
                            </div>
                            <div>
                                <img class='grid-item grid-item-3' src={require("../../assets/img/hostel5.jpg")} alt='' />
                                <p> Lorem Ipsum </p>
                            </div>
                            <div>
                                <img class='grid-item grid-item-4' src={require("../../assets/img/hostel4.jpg")} alt='' />
                                <p> Lorem Ipsum </p>
                            </div>
                            <div>
                                <img class='grid-item grid-item-5' src={require("../../assets/img/hostel3.jpg")} alt='' />
                                <p> Lorem Ipsum </p>
                            </div>
                            <div>
                                <img class='grid-item grid-item-6' src={require("../../assets/img/hostel6.jpg")} alt='' />
                                <p> Lorem Ipsum </p>
                            </div>
                            <div>
                                <img class='grid-item grid-item-7' src={require("../../assets/img/hostel7.jpg")} alt='' />
                                <p> Lorem Ipsum </p>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-end">
                       
                    <button class="view-more">
                        <a href="/AllTeam">
                                <span class="button-circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                            </span>
                            <span class="button-text" >                         
                           View More</span>
                           </a>
                        </button>

                        {/* <a href="/Gallery" class="btn btn-lg">
                            View More  <i class="fa fa-arrow-right"></i>
                        </a> */}
                    </div>
                </div>
            </div>


        </>
    );
}

export default Hostal;
