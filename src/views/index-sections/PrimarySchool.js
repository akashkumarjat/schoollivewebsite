import React from "react";
// import '../../assets/scss/paper-kit/plugins/curriculum.scss';
import '../../assets/scss/paper-kit/plugins/curriculum.scss';
import { Row, Col, Carousel, } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import {
    Button
} from "reactstrap";

function PrimarySchool() {
    return (
        <>
            <div className="container">
                <Row className="Curriculum-section ">
                    <Col span={24} >
                        <img className="img-fluid Curriculum-section-img" alt="..." src={require("../../assets/img/primary-school.jpg")} />
                    </Col>
                </Row>
            </div>
            <div className=" container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 ">
                        {/* <img className="img-fluid" alt="..." src={require("../../assets/img/Curriculum1.jpg")} /> */}
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 primary-school-heading">
                        <h1>Primary School (Classes I To IV)</h1>
                        <p>
                            Primary curriculum is a designed to make and build their foundation as strong as possible. The academic program for the primary section is based on the NCERT curriculum where subjects are taught with the help of hi-tech teaching aids.

                        </p>
                        <p>
                            Through developing skills of problem solving, Inquiry, investigation. Children are guided to explore the knowledge themselves and gain the understanding on outside world, and providing them specialized personal teaching. It includes spoken English, cursive writing, narration of stories, mathematical ability through a variety of educational aids, visual and performing activities to make learning effective. The music, games, Educational Excursions supplement the joy of learning.
                        </p>
                        <p className="last-pra">
                            The students start studying formal academic subjects consisting of languages, EVS, Math’s, besides Moral Science, Yoga, Computers Skills, Music, Dance, Environmental Education, Art & Craft, Games/Sports Specialized teachers in child education teach & guide the students.
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

export default PrimarySchool;
