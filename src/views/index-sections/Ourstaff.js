import React from "react";
import '../../assets/scss/paper-kit/plugins/ourstaff.scss';
function Ourstaff() {
    return (
        <>
           
            <div className="staff-section wow slideInUp">
            {/* <img className="img-fluid our-team-bg-sun1" src={require('../../assets/img/sun1.png')}/> */}
               
            {/* <img class='ourstaff-bg11' src={require("../../assets/img/bg1.png")} alt='' />
            <img class='ourstaff-bg02' src={require("../../assets/img/strand-42586_960_720.png")} alt='' /> */}
                <div class="container">
                    <h1>Meet Our Expert Team</h1>
                    <p className="our-staff-pra">
                                    Lorem ipsum dolor sit amet, consecte tuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus varius laoreet.
                                    Lorem ipsum dolor sit amet, consecte tuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus varius laoreet.
                             
                                </p>
                    <div class="row">
                        
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="our-school-team">
                           
                                <div class="pic">
                                    <img src={require("assets/img/teacher3.png")} />
                                </div>
                                <h3 class="staff-title"> Mr. Ken Silburn </h3>
                                <span class="staff-post">Experts</span>
                                <p className="">
                                    Lorem ipsum dolor sit amet, consecte tuer adipiscing elit, sed diam nonummy nibh euismod .
                                </p>
                                {/* <ul class="social">
                                    <li><a href="#" class="fa fa-facebook"></a></li>
                                    <li><a href="#" class="fa fa-twitter"></a></li>
                                    <li><a href="#" class="fa fa-google-plus"></a></li>
                                    <li><a href="#" class="fa fa-linkedin"></a></li>
                                </ul> */}
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="our-school-team">
                                <div class="pic">
                                    <img src={require("assets/img/teacher2.png")} />
                                </div>
                                <h3 class="staff-title"> Mr. David Calle</h3>
                                <span class="staff-post">Experts</span>
                                <p className="">
                                    Lorem ipsum dolor sit amet, consecte tuer adipiscing elit, sed diam nonummy nibh euismod .
                                </p>
                                {/* <ul class="social">
                                    <li><a href="#" class="fa fa-facebook"></a></li>
                                    <li><a href="#" class="fa fa-twitter"></a></li>
                                    <li><a href="#" class="fa fa-google-plus"></a></li>
                                    <li><a href="#" class="fa fa-linkedin"></a></li>
                                </ul> */}
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="our-school-team">
                                <div class="pic">
                                    <img src={require("assets/img/teacher4.png")} />
                                </div>
                                <h3 class="staff-title">Mr. Ashok Choudhary</h3>
                                <span class="staff-post">Experts</span>
                                <p className="">
                                    Lorem ipsum dolor sit amet, consecte tuer adipiscing elit, sed diam nonummy nibh euismod .
                                </p>
                                {/* <ul class="social">
                                    <li><a href="#" class="fa fa-facebook"></a></li>
                                    <li><a href="#" class="fa fa-twitter"></a></li>
                                    <li><a href="#" class="fa fa-google-plus"></a></li>
                                    <li><a href="#" class="fa fa-linkedin"></a></li>
                                </ul> */}
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-3 d-flex justify-content-end team-view-more-div">
                        <img className="img-fluid our-staff-bg" alt="..." src={require("../../assets/img/02.png")} />
                        <button class="view-more">
                        <a href="/AllTeam">
                                <span class="button-circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                            </span>
                            <span class="button-text" >                         
                           View More</span>
                           </a>
                        </button>
                            {/* <a href="/AllTeam" class="btn btn-lg">
                                View More  <i class="fa fa-arrow-right"></i>
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ourstaff;
