import React from "react";
import '../../assets/scss/paper-kit/plugins/customabout.scss';
function CustomAboutUs() {
    return (
        <>


            <div className="uper-svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240"><path fill="#fff" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,101.3C640,117,800,171,960,170.7C1120,171,1280,117,1360,90.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            </div>
            <div className="main-name">
                <img className="img-fluid custom-about-bg7" src={require("../../assets/img/bg7.png")} />
                <img className="img-fluid custom-about-bg9" src={require("../../assets/img/bg9.png")} />
                <img className="img-fluid custom-about-bg10" src={require("../../assets/img/bg10.png")} />

                <h1> You’ll be happy to <br />see our awesome features.</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#fff" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,101.3C640,117,800,171,960,170.7C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

            </div>

            {/* <img className="img-fluid about-bg-cloud1" src={require('../../assets/img/cloud1.png')} /> */}

            {/* <img className="img-fluid about-bg-bg1" src={require('../../assets/img/bg11.png')} /> */}

            <div className="container Custom-about-us">
                <div className="upper-content-row row">
                    <div class="upper-content col-lg-6 col-md-12 col-sm-12 " >
                        <p>
                            <svg class="top-icon">
                                <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M-0.000,0.052 L-0.000,30.052 L15.000,15.053 L15.000,0.052 L-0.000,0.052 Z"></path>
                                <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M25.000,0.052 L25.000,30.052 L40.000,15.053 L40.000,0.052 L25.000,0.052 Z"></path>
                            </svg>
                            <br />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            <img className="custom-bg-img3 img-fluid" src={require("../../assets/img/clouds.png")} />

                        </p>
                    </div>
                    <div class="about-heading-text col-lg-6 col-md-12 col-sm-12 " >
                        <h1>
                            About Us
                        </h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        {/* <img className=" Custom-about-us-img img-fluid" src={require('../../assets/img/aboutone.JPG')} />                        */}
                        <img className="custom-bg-img3 img-fluid" src={require("../../assets/img/clouds.png")} />
                        {/* <img className="custom-bg-img3 img-fluid" src={require("../../assets/img/clouds.png")} /> */}

                    </div>
                </div>




                <div className="row">
                    <div class=" col-lg-6 col-md-12 col-sm-12 " >
                        <img className=" Custom-about-us-img img-fluid" src={require('../../assets/img/vision.png')} />
                    </div>
                    <div class="vision-description col-lg-6 col-md-12 col-sm-12 " >

                        <h2>Mission</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                         </p>
                    </div>
                </div>


                <div className="row">
                    <div class=" mission-description col-lg-6 col-md-12 col-sm-12 " >
                        <h2> vision </h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                         </p>
                    </div>
                    <div class=" col-lg-6 col-md-12 col-sm-12 " >
                        <img className=" Custom-about-us-img img-fluid" src={require("../../assets/img/111.png")} />


                    </div>
                </div>


               
            </div>





            <div class="element-section mb-150">
                <div class="container">
                    <div class="row feature-block-wrapper">
                        <div class="col-lg-4 col-md-6">
                            <div class="feature-block-one main-p-color hover-state mb-40">
                                <div class="icon icon-three flaticon-value tran3s">
                                    {/* <img className=" icon img-fluid" src={require("../../assets/img/iconfinder_1_Bus_school_school_bus_vehicle_2990992.png")} /> */}
                                    <i class="fa fa-bus"></i>
                                </div>
                                <h5 class="pt-30 pb-25 tran3s title">Bus Facility</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="feature-block-one main-p-color hover-state mb-40">
                                <div class="icon icon-three flaticon-login tran3s">
                                    {/* <img className=" icon img-fluid" src={require("../../assets/img/13-512.png")} /> */}
                                    <i class='fas fa-basketball-ball'></i>
                                </div>
                                <h5 class="pt-30 pb-25 tran3s title">Ground Facility</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="feature-block-one main-p-color hover-state">
                                <div class="icon icon-three flaticon-web tran3s">
                                    {/* <img className=" icon img-fluid" src={require("../../assets/img/iconfinder_go-home_118770.png")} /> */}
                                    <i class="fa fa-bed" aria-hidden="true"></i>
                                </div>
                                <h5 class="pt-30 pb-25 tran3s title">Hostel Facility</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            </div>
                        </div>
                    </div>


                    <img className="img-fluid custom-about-dots" src={require("../../assets/img/dots.png")} />
                
                </div>
                   
            </div>








            




            <div className="bg-blue">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280"><path fill="#fff" fill-opacity="1" d="M0,160L40,149.3C80,139,160,117,240,133.3C320,149,400,203,480,234.7C560,267,640,277,720,277.3C800,277,880,267,960,250.7C1040,235,1120,213,1200,208C1280,203,1360,213,1400,218.7L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
                <div className="ratio-col-part container">
                    <div className=" row">
                        <div class="ratio-col  col-lg-4 col-md-6 col-sm-12 " >
                            <h2>475</h2>
                            <h1>Total student</h1>
                        </div>
                        <div class="ratio-col col-lg-4 col-md-6 col-sm-12 " >
                            <h2>7:1</h2>
                            <h1>student faculty ratio</h1>

                        </div>
                        <div class="ratio-col  col-lg-4 col-md-6 col-sm-12 " >
                            <h2>85%</h2>
                            <h1>Boarding students</h1>
                        </div>
                        <div class="ratio-col col-lg-4 col-md-6 col-sm-12 " >
                            <h2>1:1</h2>
                            <h1>male - Female ratio</h1>
                        </div>
                        <div class="ratio-col col-lg-4 col-md-6 col-sm-12 " >
                            <h2>33%</h2>
                            <h1>students of color</h1>
                        </div>
                        <div class="ratio-col col-lg-4 col-md-6 col-sm-12 " >
                            <h2>16%</h2>
                            <h1>International students</h1>
                        </div>
                    </div>

                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280"><path fill="#fff" fill-opacity="1" d="M0,160L40,149.3C80,139,160,117,240,133.3C320,149,400,203,480,234.7C560,267,640,277,720,277.3C800,277,880,267,960,250.7C1040,235,1120,213,1200,208C1280,203,1360,213,1400,218.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                <img className="custom-bg-img4 img-fluid" src={require("../../assets/img/11.png")} />

            </div>

            

        </>
    );
}

export default CustomAboutUs;








