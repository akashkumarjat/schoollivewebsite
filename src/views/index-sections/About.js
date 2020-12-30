import React from "react";
import '../../assets/scss/paper-kit/plugins/about.scss';
// reactstrap components
// reactstrap components
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


import { Row, Col } from 'antd';

function About() {
    const [activeTab, setActiveTab] = React.useState("1");
    const toggle = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };
    return (
        <>

            <div className="About-div">
                {/* <div class="plus plus1" />
                <div class="plus plus2" /> */}


                {/* <div className="squares square1" /> */}
                {/* <div className="squares square2" /> */}
                {/* <div className="squares square3" /> */}
                {/* <div className="squares square4" /> */}
                {/* <div className="squares square5" /> */}
                {/*<div className="squares square6" />
                <div className="squares square7" /> */}
                {/* <p className="wow slideInUp">About Our Paly school</p> */}
                <img className="img-fluid bg6" src={require("../../assets/img/bg6.png")} />

                <h1 className=" wow slideInUp" >
                    You’ll be happy to <br />see our awesome features.
                </h1>
                <img className="img-fluid bg5" src={require("../../assets/img/bg5.png")} />
                <img className="img-fluid bg7" src={require("../../assets/img/bg7.png")} />
                <img className="img-fluid bg7-copy" src={require("../../assets/img/bg7.png")} />
                <img className="img-fluid bg7-copy2" src={require("../../assets/img/bg7.png")} />


                <div className="container text-section">
                    <div className="row">
                        <div class=" col-lg-6 col-md-12 col-sm-12 about-fist-col" >
                            <img className="img-fluid about-bg-one" alt="..." src={require("../../assets/img/07.png")} />

                            <img className="img-fluid about-image wow slideInUp" alt="..." src={require("../../assets/img/aboutus.JPG")} />
                        </div>
                        <div class=" col-lg-6 col-md-12 col-sm-12 about-second-col" >
                            <h2 className="">
                                Creative ways of study
                        </h2>
                            <div className="nav-tabs-navigation wow slideInUp">
                                <div className="nav-tabs-wrapper">
                                    <Nav id="tabs" role="tablist" tabs>
                                        <NavItem>
                                            <NavLink
                                                className={activeTab === "1" ? "active" : ""}
                                                onClick={() => {
                                                    toggle("1");
                                                }}
                                            >
                                                <button className="about-btn" type="button">
                                                    About Us
                                        </button>

                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={activeTab === "2" ? "active" : ""}
                                                onClick={() => {
                                                    toggle("2");
                                                }}
                                            >
                                                <button className="about-btn" type="button">
                                                    Our Mission
                                        </button>

                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={activeTab === "3" ? "active" : ""}
                                                onClick={() => {
                                                    toggle("3");
                                                }}
                                            >
                                                <button className="about-btn" type="button">
                                                    Our Vision
                                        </button>

                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                            </div>
                            <TabContent activeTab={activeTab} className="text-center wow slideInUp">
                                <TabPane tabId="1" className="about-content">
                                    <p>
                                        <b className="school-bold-name">Arjun Smart School</b> is a humble step towards creating a community of empowered learners in an atmosphere of mutual respect and trust. The school largely focuses on development of the whole child. SHANA is one of few schools of India whose curriculum is based on Learnomatrix. It is a matrix of learning, a very scientific and systematic method of learning which incorporates various techniques and tools of education psychology, Cognitive sciences, Neuro-Lingual-Programing, Pranayama, Yoga and transcendental Meditation to ease and accelerate learning processes by inculcating Learning and Life skills in students designed and develop by Kamlesh Chandra after a research of two decades.
                                It is the compilation of different tools, methods, techniques, processes which help students to enhance their rate of learning. These tools are scientifically tested to enhance thinking skills, creativity, concentration, reasoning, analytical skills, memory skills, study skills, note taking and confidence level of the children. It saves students’ time and thus they are able to invest more time in creativity, innovation and community service.
                                An educational system isn’t worth much if it teaches how to make a living but doesn’t teach them how to make life.
                            </p>
                                </TabPane>
                                <TabPane tabId="2" className="about-content">
                                    <p>We want to open Educational Institutions across country and abroad to materialize our vision. We want to create platform for people who are passionate about Self Development and making a positive difference in the educational system of our country.</p>
                                </TabPane>
                                <TabPane tabId="3" className="about-content">
                                    <p>To give empowered and enlightened citizens to the world…</p>
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default About;
