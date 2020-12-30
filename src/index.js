
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Index from "views/Index.js";

import About from "views/index-sections/About";
import Gallery from "views/index-sections/Gallery";

// others
import IndexNavbar from "components/Navbars/IndexNavbar.js";

import Hostel from "views/index-sections/Hostel";
import News from "views/index-sections/News";
import Contact from "views/index-sections/Contact";
import Footer from "views/index-sections/Footer";
import Curriculum from "views/index-sections/Curriculum ";
import KindergartenCurriculum from "views/index-sections/KindergartenCurriculam";
import PrimarySchool from "views/index-sections/PrimarySchool";
import MiddleSchool from "views/index-sections/MiddleSchool";
import SeniorSchool from "views/index-sections/SeniorSchool";
import AllTeam from "views/index-sections/AllTeam";
import CustomAboutUs from "views/index-sections/CustomAboutUs";
ReactDOM.render(
  <BrowserRouter>
    <IndexNavbar />
    <Switch>
      <Route path="/index" render={props => <Index {...props} />} />
      <Route path="/AboutUs" exact component={CustomAboutUs} />
          <Route path="/About" exact component={About} />
          <Route path="/Gallery" exact component={Gallery} />
          <Route path="/News" exact component={News} />
          <Route path="/Hostel" exact component={Hostel} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Curriculum" exact component={Curriculum} />
          <Route path="/KindergartenCurriculum" exact component={KindergartenCurriculum} />
          <Route path="/PrimarySchool" exact component={PrimarySchool} />
          <Route path="/MiddleSchool" exact component={MiddleSchool} />
          <Route path="/SeniorSchool" exact component={SeniorSchool} />
          <Route path="/AllTeam" exact component={AllTeam} />
      
      <Redirect to="/index" />
    </Switch>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
