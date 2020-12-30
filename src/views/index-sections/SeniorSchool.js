import React from "react";
// import '../../assets/scss/paper-kit/plugins/curriculum.scss';
import '../../assets/scss/paper-kit/plugins/curriculum.scss';
import { Row, Col, Carousel, } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import {
    NavItem,
    NavLink,
    Nav,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    TabContent,
    TabPane,
    Button,

} from "reactstrap";
function SeniorSchool() {
    const [activeTab, setActiveTab] = React.useState("1");
    const toggle = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };
    return (
        <>
            <div className="container">
                <Row className="Curriculum-section ">
                    <Col span={24} >
                        <img className="img-fluid Curriculum-section-img" alt="..." src={require("../../assets/img/Senior School.png")} />
                    </Col>
                </Row>
            </div>
            <div className=" container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 ">
                        {/* <img className="img-fluid" alt="..." src={require("../../assets/img/Curriculum1.jpg")} /> */}
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 primary-school-heading">
                        <h1>Senior School (Classes IX & XII)</h1>
                        <p>
                            Senior school is a very crucial time when the children have to choose a further course of studies based on their talents, interest and potentials. And at this very time, proper guidance and counseling is very essential prerequisite, to be done by teachers and school and equally important by the parents as well.
                         </p>
                        <p>
                            We, at Tilak public school, start guiding and counseling the children as they enter class IX, regarding their subject preferences, competitive exams to be faced, scope of a particular study, research and practical knowledge to be gained, besides pursuing their talents in co curricular areas. The students continue their activities in sports, yoga and other interest areas and talents.
                         </p>
                        <p className="last-pra">
                            School provides Science with Math, Science with Biology, Commerce with or without Math and Humanities stream with English as first main compulsory subject.
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





                <div class="row">
                    <div class="col-lg-12 col-md-6 col-sm-6 senior-school-subheading">
                        <h2 >
                            Creative ways of study
                        </h2>
                        <div className="nav-tabs-navigation">
                            <div className="nav-tabs-wrapper">
                                <Nav id="tabs" role="tablist" tabs>
                                    <NavItem>
                                        <NavLink
                                            className={activeTab === "1" ? "active" : ""}
                                            onClick={() => {
                                                toggle("1");
                                            }}
                                        >
                                            <Button className="btn-round ml-1 about-btn" type="button">
                                                Science Stream
                                        </Button>

                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={activeTab === "2" ? "active" : ""}
                                            onClick={() => {
                                                toggle("2");
                                            }}
                                        >
                                            <Button className="btn-round ml-1 about-btn" type="button">
                                                PCB
                                        </Button>

                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={activeTab === "3" ? "active" : ""}
                                            onClick={() => {
                                                toggle("3");
                                            }}
                                        >
                                            <Button className="btn-round ml-1 about-btn" type="button">
                                                Commerce Stream
                                        </Button>

                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={activeTab === "4" ? "active" : ""}
                                            onClick={() => {
                                                toggle("4");
                                            }}
                                        >
                                            <Button className="btn-round ml-1 about-btn" type="button">
                                                Humanities Stream
                                        </Button>

                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </div>
                        <TabContent activeTab={activeTab} className="text-center">
                            <TabPane tabId="1" className="about-content">
                                <p>
                                    PCM - English, Physics, Chemistry, Mathematics
                                    Elective subjects (Informatics Practices, Physical Education).
                                </p>
                            </TabPane>
                            <TabPane tabId="2" className="about-content">
                                <p>English, Physics, Chemistry, Biology
Elective subjects (Informatics Practices, Physical Education, Mathematics)</p>
                            </TabPane>
                            <TabPane tabId="3" className="about-content">
                                <p>English, Accountancy, Business Studies, Economics,
Elective subjects (Informatics Practices, Physical Education, Mathematics)</p>
                            </TabPane>
                            <TabPane tabId="4" className="about-content">
                                <p>English, IP/Physical Education
Elective Subjects (Hindi, Political science, Economics, Business Studies, Sociology, Psychology, History)</p>
                            </TabPane>
                        </TabContent>


                    </div >
                </div >
            </div >

        </>
    );
}

export default SeniorSchool;
