import React from "react";
import '../../assets/scss/paper-kit/plugins/footer.scss';
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

function Footer() {
    return (
        <>
            <div className="footer-section wow slideInUp">
                <div className="container">

                    <div className="row">

                        <div class="col-lg-4 col-md-5 col-sm-6 footer-first-col">
                            <h1>Arjun Smart School</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                            <h2>Follow us</h2>
                            <div className="footer-icons-div">
                                <a href="https://www.facebook.com/"> <span class="fa fa-facebook footer-icons"></span></a>
                                <a href="https://www.twitter.com/">  <span class="fa fa-twitter footer-icons"></span></a>
                                <a href="https://www.youtube.com/">  <span class="fa fa-youtube footer-icons"></span></a>
                                <a href="https://www.linkedin.com/"> <span class="fa fa-linkedin footer-icons"></span></a>


                            </div>
                        </div>
                        <div class="col-lg-4 col-md-5 col-sm-6 footer-second-col">
                            <h2>Navigation</h2>
                            <div className="footer-btns">
                                <a href="/Home"> Home</a><br />
                                <a href="/ABOUT"> About</a><br />
                                <a href="/SERVICE"> Service</a><br />
                                <a href="/NEWS"> News</a><br />
                                <a href="/GALLERY"> Gallery</a><br />
                                <a href="/HOSTEL"> Hostel</a><br />
                                <a href="/CONTACT"> Contact</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-5 col-sm-6 footer-third-col">
                            <h2>Contact us</h2>
                            <p>Arihant Plaza, Calgiri Road, Malviya Nagar Pradhan Marg Block C, Jhalana, Malviya Nagar Jaipur, Rajasthan 302017</p>
                            <a href=" tel:+91-987-654-3210" > <span class="fa fa-phone contact-icons"></span> +91-987-654-3210</a><br />
                            <a href="https://mail.google.com/" > <span class="fa fa-envelope contact-icons"></span> abcxyzschool@gmail.com</a>

                        </div>
                    </div>

                    <div class="bottom-footer-content footer-line" >
                        <p>Copyright © 2020 Arjun Smart School. All Rights Reserved.</p>
                        <p className="copyright-last-para">Design &amp; Developed by <a href="https://www.annexlogics.com">AnnexLogics System Pvt. Ltd.</a></p>
                    </div>
                </div>
            </div>

            <ScrollUpButton className="ak">
            </ScrollUpButton>


        </>
    );
}

export default Footer;
