import React, { Component } from 'react'
import '../../assets/scss/paper-kit/plugins/counter.scss';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student_counter: 0,
            faculty_counter: 0,
            program_counter: 0,
            year_counter: 0,

        }
    }
    student() {
        if (this.state.student_counter < 450) {
            this.setState(prevState => ({
                student_counter: prevState.student_counter + 1
            }));
        }
    }


    faculty() {
        if (this.state.faculty_counter < 25) {
            this.setState(prevState => ({
                faculty_counter: prevState.faculty_counter + 1
            }));
        }
    }
    programs() {
        if (this.state.program_counter < 24) {
            this.setState(prevState => ({
                program_counter: prevState.program_counter + 1
            }));
        }
    }
    year() {
        if (this.state.year_counter < 10) {
            this.setState(prevState => ({
                year_counter: prevState.year_counter + 1
            }));
        }
    }


    componentDidMount() {
        this.interval = setInterval(() => this.student(), 50);
        this.interval = setInterval(() => this.faculty(), 1000);
        this.interval = setInterval(() => this.programs(), 1000);
        this.interval = setInterval(() => this.year(), 1500);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <>
                <div className="counter-heading"></div>
                <div className="counter-bg">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L1440,320L1440,0L0,0Z"></path></svg> */}
                    <img className="img-fluid counter5" src={require("../../assets/img/5.png")} />
                
                    {/* <img className="img-fluid counter-bg-sun" src={require('../../assets/img/cloud1.png')} /> */}
                    {/* <img className="img-fluid counter-bg-bg1" src={require('../../assets/img/bg11.png')} /> */}
                    <img className="img-fluid counter-bg7" src={require("../../assets/img/bg7.png")} />
                    <img className="img-fluid counter-bg9" src={require("../../assets/img/bg9.png")} />
                    <img className="img-fluid counter-bg10" src={require("../../assets/img/bg10.png")} />

                    <div className="container counter-box" >
                        <div className=" row ">
                            <div class=" col-lg-3 col-md-6 col-sm-12 " >
                                <div className="counter-style">
                                    <img className="img-fluid counter-icon" src={require('../../assets/img/passout-students.png')} /><br />
                                    <span>{this.state.student_counter}</span>
                                    <h5>Passout Students</h5>
                                </div>
                            </div>

                            {/* //-----2----- */}
                            <div class=" col-lg-3 col-md-6 col-sm-12 " >
                                <div className="counter-style">
                                    <img className="img-fluid counter-icon" src={require('../../assets/img/certified-teachers.png')} /><br />
                                    <span>{this.state.faculty_counter}</span>
                                    <h5>Certified Teachers</h5>
                                </div>
                            </div>
                            <div class=" col-lg-3 col-md-6 col-sm-12 " >
                                <div className="counter-style">
                                    <img className="img-fluid counter-icon" src={require('../../assets/img/awards-winner.png')} /><br />
                                    <span>{this.state.program_counter}</span>
                                    <h5>Awards Winner</h5>
                                </div>
                            </div>
                            <div class=" col-lg-3 col-md-6 col-sm-12 " >
                                <div className="counter-style">
                                    <img className="img-fluid counter-icon" src={require('../../assets/img/year-founded.png')} /><br />
                                    <span>{this.state.year_counter}</span>
                                    <h5>Years Established</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L1440,320L1440,320L0,320Z"></path></svg> */}
                </div>
            </>
        )
    }
}
export default Counter;