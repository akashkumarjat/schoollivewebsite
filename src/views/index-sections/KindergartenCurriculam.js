import React from "react";
// import '../../assets/scss/paper-kit/plugins/curriculum.scss';
import '../../assets/scss/paper-kit/plugins/curriculum.scss';
import { Row, Col, Carousel, } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import {
    Button
} from "reactstrap";

function KindergartenCurriculum() {
    return (
        <>
        <div className="container">
            <Row className="Curriculum-section ">
            <Col span={24} >
                    <img className="img-fluid Curriculum-section-img" alt="..." src={require("../../assets/img/Kindergarten-school.png")} />
                </Col>
            </Row>
            </div>
            <div className=" container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 ">
                        {/* <img className="img-fluid" alt="..." src={require("../../assets/img/Curriculum1.jpg")} /> */}
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 KindergartenCurriculum-heading">
                        <h1>Kinder Garten, (Nursery, K.G. & Prep)</h1>
                        <p>
                            Our kindergarten curriculum nurtures and supports children’s interest, curiosity and their natural quest for knowledge; leading to developing skills through discovery and active hands on exploration.
                       
                            In kindergarten, learning is based on Play and exploration, it is naturally more structured and integrated across multiple discipline of language, math, Hindi, science, writing to meet expectations for holistic goals, development of life skills, dispositions and attitudes, as well as academic achievements.
                        </p>
                        <p>
                            Indoor and outdoor activities and games for the pre-primary section are designed by making sense of things and people around them, investigate the world, form relationships and engage in active social interactions. It include aloud reading, painting, story-telling, scribbling boards, art & craft, etc.
                       
                            The teacher facilitates to bring best out of them. The whole curriculum is child-centric. They are taught to prepare themselves for the beginning of the formal education.
                      
                            Kids are encouraged to observe, think, recognize patterns and make a connection with the things they come across in daily life.
                        </p>
                    </div>
                </div>




                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="box">
                                <img className="img-fluid activity-imgs" alt="..." src={require("../../assets/img/activity.png")} />

                                <div class="box-content">
                                    <h3 class="title">20+</h3>
                                    <span class="post">Activities</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="box">
                                <img className="img-fluid " alt="..." src={require("../../assets/img/classroom.png")} />

                                <div class="box-content">
                                    <h3 class="title">10+</h3>
                                    <span class="post">Classrooms</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="box">
                                <img className="img-fluid " alt="..." src={require("../../assets/img/Time.png")} />

                                <div class="box-content">
                                <h3 class="title">8:00 am - 12:00 pm</h3>
                                    <span class="post">Time</span>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>


                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 ">
                        <h1 className="Special-Features-heading">Special Features</h1>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class=" col-lg-3 col-md-6 col-sm-6">
                            <div class="serviceBox a">
                                <div class="service-icon">
                                    <img className="kinder-garten-img" alt="..." src={require("../../assets/img/read.png")} />
                                </div>
                                <h3 class="title">Reading skills</h3>
                                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                            </div>
                        </div>
                        <div class=" col-lg-3 col-md-6 col-sm-6">
                            <div class="serviceBox b">
                                <div class="service-icon">
                                    <img className="kinder-garten-img" alt="..." src={require("../../assets/img/CONVERSATION-SKILLS.png")} />
                                </div>
                                <h3 class="title">Conversation skills</h3>
                                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                            </div>
                        </div>
                        <div class=" col-lg-3 col-md-6 col-sm-6">
                            <div class="serviceBox c">
                                <div class="service-icon">
                                    <img className="kinder-garten-img" alt="..." src={require("../../assets/img/Activity-fun.png")} />
                                </div>
                                <h3 class="title">Activity fun</h3>
                                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                            </div>
                        </div>
                        <div class=" col-lg-3 col-md-6 col-sm-6">
                            <div class="serviceBox d">
                                <div class="service-icon">
                                    <img className="kinder-garten-img" alt="..." src={require("../../assets/img/Art and craft.png")} />
                                </div>
                                <h3 class="title">Art and craft</h3>
                                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                            </div>
                        </div>
                    </div>

                </div>



            </div >

        </>
    );
}

export default KindergartenCurriculum;
