
import React from "react";

// reactstrap components
//import { Row, Col, Container } from "reactstrap";
import { Row, Col } from 'antd';
// core components

function IndexHeader() {
  return (
    <>
      <Row>
        <Col span={24} className="top">
          {/* <img className="img-fluid img wow slideInDown" alt="..." src={require("../../assets/img/building.JPG")} /> */}

          <header>
            <div className="top-content">

              <h1 className="top-heading">Arjun Smart School</h1>
              <span className="title1">
                Making
                Better
                Tomorrow
                </span>


              <span className="title2">
              Creative Thinking & Innovation
                </span>

            </div>
          </header>

        </Col>
      </Row>

      <nav class="fixed-social">
  <ul>
    <li class="twitter"><a href="https://twitter.com">Twitter<i class="fa fa-twitter" aria-hidden="true"></i></a></li>
    <li class="facebook"><a href="https://facebook.com">Facebook<i class="fa fa-facebook" aria-hidden="true"></i></a></li>
    {/* <li class="google-plus"><a href="https://google.com">Google plus<i class="fa fa-google" aria-hidden="true"></i></a></li> */}
    <li class="linkedin"><a href="https://instgram.com">Linkedin<i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
  
    <li class="instagram"><a href="https://instgram.com">Instagram<i class="fa fa-instagram" aria-hidden="true"></i></a></li>
  </ul>
</nav>
      {/* <div id="fixed-social">
        <div>
          <a href="#" class="fixed-facebook" target="_blank"><i class="fa fa-facebook"></i> <span>Facebook</span></a>
        </div>
        <div>
          <a href="#" class="fixed-twitter" target="_blank"><i class="fa fa-twitter"></i> <span>Twitter</span></a>
        </div>
        <div>
          <a href="#" class="fixed-gplus" target="_blank"><i class="fa fa-google"></i> <span>Google+</span></a>
        </div>
        <div>
          <a href="#" class="fixed-linkedin" target="_blank"><i class="fa fa-linkedin"></i> <span>LinkedIn</span></a>
        </div>
        <div>
          <a href="#" class="fixed-instagrem" target="_blank"><i class="fa fa-instagram"></i> <span>Instagram</span></a>
        </div>
        <div>
          <a href="#" class="fixed-tumblr" target="_blank"><i class="fa fa-tumblr"></i> <span>Tumblr</span></a>
        </div>
      </div> */}

    </>
  );
}

export default IndexHeader;
