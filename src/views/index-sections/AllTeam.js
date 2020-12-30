import React from "react";
import '../../assets/scss/paper-kit/plugins/allteam.scss';
function AllTeam() {
    return (
        <>
            <div className="team-section">


                {/* <div class="area" >
                    <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div > */}
                <div class="container">
                    <h1>Meet The Team</h1>


                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-12 col-sm-12  wow slideInUp">
                                <div class="our-team">
                                    <h2>Director's Desk</h2>
                                    <img src={require("assets/img/director.jpg")} />
                                    <div class="team-prof">
                                        <h3>dr. kamlesh chandra</h3>
                                        <span>Director</span>
                                        <p class="description">
                                            According to me, education is the means which empower us to learn and live purposefully. It helps to explore, define and attain the purpose of life.
                                            Learning is knowing something, Understanding it properly so that we are able to Implement the knowledge.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12">
                                <div class="our-team  wow slideInUp">
                                    <h2>Principal’s Desk</h2>
                                    <img src={require("assets/img/principle.png")} />
                                    <div class="team-prof">
                                        <h3>Pushpalata</h3>
                                        <span>Principal</span>
                                        <p class="description">
                                            Welcome you all to our SHANA family. We are all here to enjoy Learning, to develop enthusiasm, to learn perseverance and to ask questions. I want you to be happy, have high self- esteem and to develop confidence i n yourself and your abilities. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div class="row leadership-section  wow slideInUp">

                        <div class="col-md-12 col-sm-12">
                            <h2>Our leadership team</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </div>
                    </div>

                    <div class="row  wow slideInUp">
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <div class="teachers-team">
                                <div class="all-team-pic">
                                    <img className="img-fluid" src={require("assets/img/teacher4.png")} />
                                </div>
                                <h3 class="teachers-name">Williamson</h3>
                                <span class="teachers-post">VICE PRINCIPAL</span>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consecte tuer adipiscing elit,
                                </p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <div class="teachers-team">
                                <div class="all-team-pic">
                                    <img className="img-fluid" src={require("assets/img/teacher3.png")} />
                                </div>
                                <h3 class="teachers-name"> Elena Aguilar</h3>
                                <span class="teachers-post">IT LAB.TEC.</span>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consecte tuer adipiscing elit,
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <div class="teachers-team">
                                <div class="all-team-pic">
                                    <img className="img-fluid" src={require("assets/img/teacher4.png")} />
                                </div>
                                <h3 class="teachers-name">Dr. Mr. Khan </h3>
                                <span class="teachers-post">PGT</span>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consecte tuer adipiscing elit,
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <div class="teachers-team">
                                <div class="all-team-pic">
                                    <img className="img-fluid" src={require("assets/img/teacher3.png")} />
                                </div>
                                <h3 class="teachers-name">Mr. Sharma</h3>
                                <span class="teachers-post">PRT</span>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consecte tuer adipiscing elit,
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <img className="all-team-bg1 img-fluid" src={require("../../assets/img/11.png")} />
            <img className="all-team-bg-virus img-fluid" src={require("../../assets/img/bg-virus.png")} />
            {/* <img className="all-team-black-dots img-fluid" src={require("../../assets/img/black-dots.png")} /> */}


            <div />


        </>
    );
}

export default AllTeam;
