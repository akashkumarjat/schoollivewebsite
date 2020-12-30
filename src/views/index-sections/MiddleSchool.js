import React from "react";
// import '../../assets/scss/paper-kit/plugins/curriculum.scss';
import '../../assets/scss/paper-kit/plugins/curriculum.scss';
import { Row, Col, Carousel, } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import {
    Button
} from "reactstrap";

function MiddleSchool() {
    return (
        <>
            <div className="container">
                <Row className="Curriculum-section ">
                    <Col span={24} >
                        <img className="img-fluid Curriculum-section-img" alt="..." src={require("../../assets/img/middle-school.jpg")} />
                    </Col>
                </Row>
            </div>
            <div className=" container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 ">
                        {/* <img className="img-fluid" alt="..." src={require("../../assets/img/Curriculum1.jpg")} /> */}
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 primary-school-heading">
                        <h1>Middle School (Classes V To VIII)</h1>
                        <p>
                            In middle school, students are encouraged and motivated to be curious and eager to gain more knowledge and facts and to question and find reasons and answers based on logical reasoning and critical thinking. Students are assigned different subject related projects to work upon and present their conclusions, thereby building their judgmental and decision-making ability.
                        </p>
                        <p className="last-pra">
                            Curriculum consists study of Three languages i.e. English, Hindi and Sanskrit with Science, Math’s, Social Science are the main six subjects of teaching besides other compulsory subjects like Arts, Games, Computer, Music and Dance, Environmental Education, G.K. and value education. The syllabus laid down by NCERT & CBSE books are strictly followed.
                            </p>

                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="box">
                                <img className="img-fluid activity-imgs" alt="..." src={require("../../assets/img/activity.png")} />

                                <div class="box-content">
                                    <h3 class="title">10+</h3>
                                    <span class="post">Activities</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="box">
                                <img className="img-fluid " alt="..." src={require("../../assets/img/classroom.png")} />

                                <div class="box-content">
                                    <h3 class="title">20+</h3>
                                    <span class="post">Classrooms</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="box">
                                <img className="img-fluid " alt="..." src={require("../../assets/img/Time.png")} />

                                <div class="box-content">
                                <h3 class="title">8:00 am - 2:00 pm</h3>
                                    <span class="post">Time</span>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>


            </div >

        </>
    );
}

export default MiddleSchool;
