import React from "react";
import '../../assets/scss/paper-kit/plugins/about.scss';

function Testimonial() {
    return (
        <>
            <section className="testimonials">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 225"><path fill="#00A1E5" fill-opacity="1" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,165.3C672,160,768,96,864,58.7C960,21,1056,11,1152,32C1248,53,1344,107,1392,133.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}

                <div className="container">
                    <p>Quality classes for kids</p>
                    {/* <h2>TWO</h2> */}
                    <h1> Reviews</h1>


                    <div className="row  wow fadeInRight">
                        <div className="col-md-4 text-center">
                            <div className="profile">
                                <img className="user" alt="..." src={require("assets/img/1parent.jpg")} />


                                <blockquote>
                                    This school is every child’s and every parents’ dream come true... our kids will become successful one day but more important is that they should be good human beings and this is what this school teaches. ..We as parents would like to thank every teacher n staff of this school.
                                    </blockquote>
                                <h3>  Narjis Bhargava (Parent)</h3>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="profile">
                                <img className="user" alt="..." src={require("assets/img/2parent.jpg")} />

                                <blockquote>
                                    While living in a place like Bikaner and to give the best facilities to your child…..from studies to sports and all the other extra-curricular activities was so difficult but…. with SHANA it was possible!!! SHANA is a ‘Home away from Home’ which teaches a child to be honest …thus fearless, should be able to control their emotions.. …desires and have steady determination. Thanks to SHANA for showing my child the path of significance.

                                    </blockquote>
                                <h3> Mr. & Mrs. Amrik Singh Guru (IFS Officer)</h3>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="profile">
                                <img className="user" alt="..." src={require("assets/img/3parent.jpg")} type="video/mp4" />

                                <blockquote>
                                    Nothing can be better than SHANA International School for my son. He has learned to use his brain to maximum. This school doesn’t only teach what to learn but it teaches them how to learn. He is on his way success.

                                    </blockquote>
                                <h3> Mr. &Mrs. Kataria ( Parent)</h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00A1E5" fill-opacity="1" d="M0,96L48,96C96,96,192,96,288,133.3C384,171,480,245,576,240C672,235,768,149,864,133.3C960,117,1056,171,1152,176C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
  */}
            </section>

        </>
    );
}

export default Testimonial;
