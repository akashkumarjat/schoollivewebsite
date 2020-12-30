import React from "react";
import '../../assets/scss/paper-kit/plugins/features.scss';
import { Row, Col, gutter } from 'reactstrap';

function Features() {
    return (
        <>
            <Row className="featured-div">
                <Col span={24}>
                    <h5>Quality classes for kids</h5>
                    <h1>Our features</h1>
                </Col>
            </Row>


            <Row  >
                <Col xs="4" >
                    <Row>
                        <Col xs="6">
                            <h3>Creative ways of study</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean</p>
                        </Col>
                        <Col>
                            <img className="" alt="..." src={require("assets/img/004-game-1.png")} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6">
                            <h3>Creative ways of study</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean</p>
                        </Col>
                        <Col>
                            <img className="" alt="..." src={require("assets/img/004-game-1.png")} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6">
                            <h3>Creative ways of study</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean</p>
                        </Col>
                        <Col>
                            <img className="" alt="..." src={require("assets/img/004-game-1.png")} />
                        </Col>
                    </Row>
                </Col>

                <Col xs="4" >
                    <img className="features-img" alt="..." src={require("assets/img/features.jpg")} />

                </Col>
                <Col xs="4" >
                    <Row>
                        <Col xs="6">
                            <h3>Creative ways of study</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean</p>
                        </Col>
                        <Col>
                            <img className="" alt="..." src={require("assets/img/004-game-1.png")} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6">
                            <h3>Creative ways of study</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean</p>
                        </Col>
                        <Col>
                            <img className="" alt="..." src={require("assets/img/004-game-1.png")} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6">
                            <h3>Creative ways of study</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean</p>
                        </Col>
                        <Col>
                            <img className="" alt="..." src={require("assets/img/004-game-1.png")} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default Features;
