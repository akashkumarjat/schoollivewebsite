import React from "react";
import '../../assets/scss/paper-kit/plugins/curriculum.scss';

function Curriculum() {
    return (
        <>
            <div className="Curriculum-section container">

                <img className="img-fluid Curriculum-bg-one" alt="..." src={require("../../assets/img/1.png")} />
                <img className="img-fluid Curriculum-bg-two" alt="..." src={require("../../assets/img/2.png")} />

                <div className="row ">
                    <div className="col-lg-12 col-md-12 col-sm-12 Curriculum-heading">
                        <h1>Curriculum</h1>
                        <p>
                            The school practices a skill based curriculum and is content driven too. The examination and evaluation processes are very dynamic to keep pace with the changing trends of research in education.
                        </p>
                    </div>
                </div>
                <div class="container wow zoomIn">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 Curriculum-first-col">
                            {/* <h1>subject</h1> */}
                            <img className="img-fluid" alt="..." src={require("../../assets/img/Arjun School Visiting Back.jpg")} />

                        </div>
                    </div>
                </div>






                <div class="container ">
                    {/* <img class='Curriculum-bg-three' src={require("../../assets/img/fog-low.png")} alt='' />. */}

                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="subjectbox">
                                <div class="subjectbox-icon">
                                    <span><i class="fa fa-book"></i></span>
                                </div>
                                <div class="subject-content">
                                    <h3 class="subject-title">ENGLISH</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="subjectbox purple">
                                <div class="subjectbox-icon">
                                    <span><i class="fa fa-book"></i></span>
                                </div>
                                <div class="subject-content">
                                    <h3 class="subject-title">HINDI</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="subjectbox pink">
                                <div class="subjectbox-icon">
                                    <span><i class="fa fa-book"></i></span>
                                </div>
                                <div class="subject-content">
                                    <h3 class="subject-title">SCIENCE</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="subjectbox blue">
                                <div class="subjectbox-icon">
                                    <span><i class="fa fa-book"></i></span>
                                </div>
                                <div class="subject-content">
                                    <h3 class="subject-title">MATHEMATICS</h3>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="subjectbox purple">
                                <div class="subjectbox-icon">
                                    <span><i class="fa fa-book"></i></span>
                                </div>
                                <div class="subject-content">
                                    <h3 class="subject-title">SOCIAL SCIENCE</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="subjectbox pink">
                                <div class="subjectbox-icon">
                                    <span><i class="fa fa-book"></i></span>
                                </div>
                                <div class="subject-content">
                                    <h3 class="subject-title">COMPUTER SCIENCE</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="subjectbox blue">
                                <div class="subjectbox-icon">
                                    <span><i class="fa fa-book"></i></span>
                                </div>
                                <div class="subject-content">
                                    <h3 class="subject-title">PHYSICAL EDUCATION</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="subjectbox ">
                                <div class="subjectbox-icon">
                                    <span><i class="fa fa-book"></i></span>
                                </div>
                                <div class="subject-content">
                                    <h3 class="subject-title">SANSKRIT</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


            <div className="style-heading"></div>
            <div className="style-of-teach-bg">
                {/* <img className="img-fluid counter-bg-sun" src={require('../../assets/img/cloud1.png')} /> */}
                    <img className="img-fluid counter-bg7" src={require("../../assets/img/bg7.png")} />
                    <img className="img-fluid counter-bg9" src={require("../../assets/img/bg9.png")} />
                    {/* <img className="img-fluid counter-bg10" src={require("../../assets/img/bg10.png")} /> */}
               
                <div className="container style-box" >
                    <div className=" row ">
                        <div class=" col-lg-3 col-md-6 col-sm-12 " >
                            <div className="teach-style">
                                <img className="img-fluid " src={require('../../assets/img/thinking.png')} /><br />

                                <h5>Critical Thinking</h5>
                            </div>
                        </div>


                        <div class=" col-lg-3 col-md-6 col-sm-12 " >
                            <div className="teach-style">
                                <img className="img-fluid " src={require('../../assets/img/creativity.png')} /><br />

                                <h5>Creativity</h5>
                            </div>
                        </div>
                        <div class=" col-lg-3 col-md-6 col-sm-12 " >
                            <div className="teach-style">
                                <img className="img-fluid " src={require('../../assets/img/intellectual.png')} /><br />

                                <h5>Intellectual Curiosity</h5>
                            </div>
                        </div>
                        <div class=" col-lg-3 col-md-6 col-sm-12 " >
                            <div className="teach-style">
                                <img className="img-fluid " src={require('../../assets/img/character.png')} /><br />

                                <h5>Character Building</h5>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L1440,320L1440,320L0,320Z"></path></svg> */}
            </div>



            {/* <div className="style-bg row style-part  ">
                    <div className="col-lg-12 col-md-12 col-sm-12 ">
                        <div className="">
                            <h1>
                                STYLE OF TEACHING
                            </h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                            </p>
                            <div className="row container ">
                                <div className="col-lg-4 col-md-6 col-sm-12 first-style ">
                                    <div className="image-div">
                                        <img className=" img-fluid" alt="..." src={require("../../assets/img/thinking.png")} />
                                    </div>
                                    <h2>Critical Thinking</h2>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 first-style ">
                                    <div className="image-div">
                                        <img className=" img-fluid" alt="..." src={require("../../assets/img/creativity.png")} />
                                    </div>
                                    <h2>Creativity</h2>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 first-style ">
                                    <div className="image-div">
                                        <img className=" img-fluid" alt="..." src={require("../../assets/img/intellectual.png")} />
                                    </div>
                                    <h2>Intellectual Curiosity</h2>

                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 first-style ">
                                    <div className="image-div">
                                        <img className=" img-fluid" alt="..." src={require("../../assets/img/character.png")} />
                                    </div>
                                    <h2>Character Building</h2>

                                </div>
                            </div>
                            
                            <div className="row ">
                                <div className="col-lg-12 col-md-12 col-sm-12 first-style ">

                                    <p className="style-last-prag">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                                </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            */}


            {/* <div class="container">
                <div className="row">
                    <div className="col-lg-12 col-md-4 col-sm-12 Curriculum-sub-heading">
                        <h1>Academics</h1>


                        
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="curriculum-img-box">
                                        <img alt="..." src={require("../../assets/img/Kindergarten-school.png")} />

                                        <div class="curriculum-box-content">
                                            <h3 class="box-title">Kindergarten</h3>
                                            <span class="box-post">Caters the specific needs of young learners in a safe & family environment.</span>
                                        </div>
                                        <ul class="icon">
                                            <li><a href="/KindergartenCurriculum"> Read More</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="curriculum-img-box">
                                        <img alt="..." src={require("../../assets/img/Curriculum2.jpg")} />
                                        <div class="curriculum-box-content">
                                            <h3 class="box-title">Primary School</h3>
                                            <span class="box-post">Diversity and qualifications of faculty, increases innate curiosity & eagerness.</span>
                                        </div>
                                        <ul class="icon">
                                            <li><a href="/PrimarySchool"> Read More</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="curriculum-img-box">
                                        <img alt="..." src={require("../../assets/img/middle-school.jpg")} />

                                        <div class="curriculum-box-content">
                                            <h3 class="box-title">Middle School</h3>
                                            <span class="box-post">Curriculum design, Teaching strategies & assessments are aligned by teachers.</span>
                                        </div>
                                        <ul class="icon">
                                            <li><a href="/MiddleSchool"> Read More</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="curriculum-img-box">
                                        <img alt="..." src={require("../../assets/img/senior-school.jpg")} />
                                        <div class="curriculum-box-content">
                                            <h3 class="box-title">Senior School</h3>
                                            <span class="box-post">Focus on Maximum selection in IIT, NEET, CPT etc. & Career Guidance.</span>
                                        </div>
                                        <ul class="icon">
                                            <li><a href="/SeniorSchool"> Read More</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div> */}


        </>
    );
}

export default Curriculum;
