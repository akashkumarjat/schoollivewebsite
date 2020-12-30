import React from "react";
import '../../assets/scss/paper-kit/plugins/contact.scss';
import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
// import Googlemap from "./Googlemap";

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const residences = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const Contact = () => {
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="91">+91</Option>
                <Option value="92">+92</Option>
                <Option value="93">+93</Option>
                <Option value="94">+94</Option>
            </Select>
        </Form.Item>
    );
// 2 3  6 7
    return (
        <>
            <div class="container contact-page  wow slideInDown">
            {/* <div class="plus contact-plus1" />
            <div class="plus contact-plus2" /> */}

                
                {/* <div className="squares square1" /> */}
                {/* <div className="squares contact-square2" /> */}
                {/* <div className="squares square3" /> */}
                {/* <div className="squares square4" /> */}
                {/* <div className="squares square5" /> */}
                 {/* <div className="squares square6" /> */}
                {/* <div className="squares contact-square7" />  */}

                <img class='img-fluid contact-bg-color-dots' src={require("../../assets/img/vortex-5142615_1280.png")} alt='' />.
                <img class='img-fluid contact-bg1' src={require("../../assets/img/bg1.png")} alt='' />.
                <img class='img-fluid contact-bg7' src={require("../../assets/img/bg7.png")} alt='' />.
                <img class='img-fluid contact-bg-dots' src={require("../../assets/img/dots.png")} alt='' />.
                

                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 contact-first-div">
                        <h1>Contact us</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                       </p>
                    </div>
                </div>
           
            <div class="container  wow slideInUp">
                
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="contactbox">
                            <div class="contact-icon">
                                <span><i class="fas fa-map-marker-alt"></i></span>
                            </div>
                            <h3 class="contact-title">Address</h3>
                            <p class="contact-description">Arihant Plaza, Calgiri Road, Malviya Nagar Pradhan
                            Marg Block C, Jhalana, Malviya Nagar Jaipur,
                            Rajasthan 302017</p>

                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="contactbox purple">
                            <div class="contact-icon">
                                <span><i class="fas fa-phone-volume"></i></span>
                            </div>
                            <h3 class="contact-title">Phone</h3>
                            <p class="contact-description">+91-141-2784044 / 2784045</p>

                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="contactbox green">
                            <div class="contact-icon">
                                <span><i class="fas fa-envelope"></i></span>
                            </div>
                            <h3 class="contact-title">Mail</h3>
                            <p class="contact-description">abcxyzschool.com</p>

                        </div>
                    </div>
                </div>
            </div>


            
            <div class="container  message-part  wow slideInUp">
             
                <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 ">
                <img class='office-work-img' src={require("../../assets/img/office.png")} alt='' />.
                               
                    
                </div>

                    <div class=" contact-form-col col-lg-6 col-md-12 col-sm-12 ">
                    <img class='contact-bg-one' src={require("../../assets/img/07.png")} alt='' />.
            
                        <h1>Drop Us A Quick Message</h1>
                   
                        <Form
                            {...formItemLayout}
                            form={form}
                            name="register"
                            onFinish={onFinish}
                            initialValues={{
                                residence: ['zhejiang', 'hangzhou', 'xihu'],
                                prefix: '91',
                            }}
                            scrollToFirstError
                        >
                              <Form.Item
                                name="nickname"
                                label={
                                    <span className="form-label">
                                        Name&nbsp;
           
                                    </span>
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your name!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label={
                                    <span className="form-label">
                                        Email&nbsp;
           
                                    </span>
                                }
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>



                           


                            <Form.Item
                                name="phone"
                                label={
                                    <span className="form-label">
                                        Phone &nbsp;
           
                                    </span>
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your phone number!',
                                    },
                                ]}
                            >
                                <Input 
                                    addonBefore={prefixSelector}
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            </Form.Item>




                            <Form.Item
                                name="message"
                                label={
                                    <span className="form-label">
                                        Message&nbsp;
           
                                    </span>
                                }
                               
                            >
                                 <Input.TextArea className="textarea" />
                            </Form.Item>
                   
                            <Form.Item {...tailFormItemLayout}>
                                <button type="primary" htmlType="submit" className="contact-send-btn">
                                Send Message <i class="fa fa-paper-plane"></i>
                            </button>
                           
                            </Form.Item>

                            
                        </Form>
                    </div>
                   
                          
                    </div>      
                </div>
            </div>
            {/* <Googlemap/> */}

        </>
    );
}

export default Contact;
