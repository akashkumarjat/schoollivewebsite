import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 50 ||
        document.body.scrollTop > 50
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    // <Navbar className={classnames("fixed-top")} expand="lg">
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
          >
            <img className="logo1" alt="..." src={require("assets/img/logo.JPG")} />

          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/index"
                className="menu-hover-effect"
              >
                Home
                {/* <i className="fa fa-twitter" /> */}

              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/AboutUs"
                className="menu-hover-effect"
              >
                About
                {/* <i className="fa fa-facebook-square" /> */}

              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/News"
                className="menu-hover-effect"
              >
                News
                {/* <i className="fa fa-github" /> */}

              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/Gallery"
                className="menu-hover-effect"
              >
                Gallery
                {/* <i className="fa fa-facebook-square" /> */}

              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/Hostel"
                className="menu-hover-effect"
              >
                Hostel
                {/* <i className="fa fa-facebook-square" /> */}

              </NavLink>
            </NavItem>


            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/Curriculum"
                className="menu-hover-effect"
              >
                Curriculum
                {/* <i className="fa fa-twitter" /> */}

              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="/Contact"
                className="menu-hover-effect"
              >
                {/* <i className="nc-icon nc-book-bookmark" /> */}
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/"
                className="menu-icons-hover-effect"
              >

                <i className="fa fa-facebook" />

              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/"
                className="menu-icons-hover-effect"
              >

                <i className="fa fa-instagram" />

              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/login"
                className="menu-icons-hover-effect"
              >

                <i className="fa fa-twitter" />

              </NavLink>
            </NavItem>



            <NavItem>
              {/* <Button
                className="btn-round bg-warning text-dark"
                // color="danger"
                href="#pablo"
                              disabled
              >
              TRIAL LESSON
              </Button> */}
              {/* <Button className="btn btn-warning test " style={{ borderRadius: '20px' }}> TRIAL LESSON</Button> */}
              {/* <Button className="btn-round ml-1 trial-lession-btn" type="button">
                TRIAL LESSON
                </Button> */}
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
