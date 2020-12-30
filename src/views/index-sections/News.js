import React from "react";
import '../../assets/scss/paper-kit/plugins/news.scss';
import { Row, Col, Modal } from 'antd';
// import { Card } from 'antd';
import {
    Button
} from "reactstrap";

import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
class News extends React.Component {

    state = {
        modal2Visible: false,
    };



    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
    }
    render() {

        return (
            <>

                <div className="container news-heading-section">
                    <div className="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h1> Latest News</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consecte tuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus varius laoreet. To make the patagraph largerQuisque rutrum aenean this is necessary imperdiet.
                        </p>
                        </div>
                    </div>
                    <div className="row">

                        {/* -------first card---------- */}
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <Card
                                style={{ width: 300 }}
                                cover={
                                    <img className="img-fluid news-card-img"
                                        alt="example"
                                        src={require("../../assets/img/admission.jpg")}
                                    />
                                }
                                actions={[
                                    <button class="view-more" onClick={() => this.setModal2Visible(true)}>

                                        <span class="button-circle" aria-hidden="true">
                                            <span class="icon arrow"></span>
                                        </span>
                                        <span class="button-text" >
                                            Read More</span>

                                    </button>
                                ]}
                            >
                                <Meta
                                    // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title="ADMISSION OPEN"
                                    description="By Akash Kumar 1 April 2020"
                                />
                                <Modal
                                    title="ADMISSION OPEN"
                                    centered
                                    visible={this.state.modal2Visible}
                                    onOk={() => this.setModal2Visible(false)}
                                    onCancel={() => this.setModal2Visible(false)}
                                >
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                </Modal>
                            </Card>
                        </div>


{/* -------second card---------- */}
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <Card
                                style={{ width: 300 }}
                                cover={
                                    <img className="img-fluid news-card-img"
                                        alt="example"
                                        src={require("../../assets/img/scl-activities.jpg")}
                                    />
                                }
                                actions={[
                                    <button class="view-more" onClick={() => this.setModal2Visible(true)}>

                                        <span class="button-circle" aria-hidden="true">
                                            <span class="icon arrow"></span>
                                        </span>
                                        <span class="button-text" >
                                            Read More</span>

                                    </button>
                                ]}
                            >
                                <Meta
                                    // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title="AFTER SCHOOL ACTIVITIES"
                                    description="By Akash Kumar 1 April 2020"
                                />
                                <Modal
                                    title="AFTER SCHOOL ACTIVITIES"
                                    centered
                                    visible={this.state.modal2Visible}
                                    onOk={() => this.setModal2Visible(false)}
                                    onCancel={() => this.setModal2Visible(false)}
                                >
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                </Modal>
                            </Card>
                        </div>

                        {/* -------Third card---------- */}
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <Card 
                                style={{ width: 300 }}
                                cover={
                                    <img className="img-fluid news-card-img"
                                        alt="example"
                                        src={require("../../assets/img/fun.jpg")}
                                    />
                                }
                                actions={[
                                    <button class="view-more" onClick={() => this.setModal2Visible(true)}>

                                        <span class="button-circle" aria-hidden="true">
                                            <span class="icon arrow"></span>
                                        </span>
                                        <span class="button-text" >
                                            Read More</span>

                                    </button>
                                ]}
                            >
                                <Meta
                                    // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title="MAKE LEARNING FUN"
                                    description="By Akash Kumar 1 April 2020"
                                />
                                <Modal
                                    title="MAKE LEARNING FUN"
                                    centered
                                    visible={this.state.modal2Visible}
                                    onOk={() => this.setModal2Visible(false)}
                                    onCancel={() => this.setModal2Visible(false)}
                                >
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                </Modal>
                            </Card>


                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default News;




