import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  Container,
  InputGroup,
  FormControl
} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

import SideBar from "../../SideBar.js";
import routes from "../../routes.js";

class DemoNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      color: "transparent"
    };
    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
    this.sidebarToggle = React.createRef();
    
  }
  toggle() {
    if (this.state.isOpen) {
      this.setState({
        color: "transparent"
      });
    } else {
      this.setState({
        color: "dark"
      });
    }
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  dropdownToggle(e) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  openSidebar() {
    document.documentElement.classList.toggle("nav-open");
    this.sidebarToggle.current.classList.toggle("toggled");
  }
  // function that adds color dark/transparent to the navbar on resize (this is for the collapse)
  updateColor() {
    if (window.innerWidth < 993 && this.state.isOpen) {
      this.setState({
        color: "dark"
      });
    } else {
      this.setState({
        color: "transparent"
      });
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor.bind(this));
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      console.log("side work")
      document.documentElement.classList.toggle("nav-open");
      this.sidebarToggle.current.classList.toggle("show");
    }
  }

  updateSide() {
    // document.documentElement.className.div("collapsed");
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
    this.sidebarToggle.current.classList.toggle("show");
  }
  
  render() {
    console.log("DemoNavbar this.state.isOpen " , this.state.isOpen)
    return (
      // add or remove classes depending if we are on full-screen-maps page or not
      <Navbar expand="lg"
        color={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "dark"
            : this.state.color
        }
        // color={"dark"}
        expand="lg"
        className={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "navbar-absolute fixed-top"
            : "navbar-absolute fixed-top " +
              (this.state.color === "transparent" ? "navbar-transparent " : "")
        }
        // className={"navbar-absolute fixed-top"}
      >
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              {/* <button
                type="button"
                ref={this.sidebarToggle}
                className="navbar-toggler"
                onClick={() => this.openSidebar()}
              >
                <span><FontAwesomeIcon icon={faBars} /></span>
              </button> */}
            </div>
            <NavbarBrand href="/">Geeky Kel</NavbarBrand>
          </div>
          <Navbar.Toggle onClick={this.props.showSide} className={this.state.dropdownOpen ? 'collapsed' : ''} >
            <span><FontAwesomeIcon icon={faBars} /></span>
          </Navbar.Toggle>
          <Navbar.Collapse
           ref={this.sidebarToggle}
            isOpen={this.state.isOpen}
            navbar
            className='justify-content-end'
            {...this.props.showSide}
          >
            <Nav navbar>
              
              <NavItem onClick={() => this.updateSide()}>
                <Link to="#pablo" className="nav-link btn-rotate">
                  <i className="nc-icon nc-settings-gear-65" />
                  <p>
                    <span className="d-lg-none d-md-block"><SideBar {...this.props} routes={routes} value={this.state} /></span>
                  </p>
                </Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default DemoNavbar;
