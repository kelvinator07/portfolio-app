import React, { Component } from "react";
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

// class Header extends Component {

//    openNav() {
//     document.getElementById("mySidenav").style.display = "block";
//   }
  
//    closeNav() {
//     document.getElementById("mySidenav").style.display = "none";
//   }

//   render() {

//     const mystyle = {
//       fontSize: "30px", 
//       cursor : "pointer"
//     };

//     return (
//       <div>

//         <Navbar bg="primary" variant="dark" expand="lg">
//               <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//               <Navbar.Toggle aria-controls="" />
//               <Navbar.Collapse id="">
//                 <Nav className="mr-auto">
//                   <Nav.Link href="#home">Home</Nav.Link>
//                   <Nav.Link href="#link">Link</Nav.Link>
//                 </Nav>
//                 <Form inline>
//                   <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//                   <Button variant="outline-success">Search</Button>
//                 </Form>
//               </Navbar.Collapse>
//             </Navbar>
            
//         {/* <div id="mySidenav" className="sidenav">
//           <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
//           <a href="#home">About</a>
//           <a href="#home">Services</a>
//           <a href="#home">Clients</a>
//           <a href="#home">Contact</a>
//         </div> */}

//         <Nav id="mySidenav" defaultActiveKey="/home" className="flex-column sidenav d-none">
//         <Nav.Link href="/home" onclick="closeNav()">&times;</Nav.Link>
//           <Nav.Link href="/home">About</Nav.Link>
//           <Nav.Link eventKey="link-1">Services</Nav.Link>
//           <Nav.Link eventKey="link-2">Clients</Nav.Link>
//           <Nav.Link eventKey="link-3">Contact</Nav.Link>
//         </Nav>

//         <span style={mystyle} className="right" onclick={this.openNav()}>&#9776;</span>

//       </div>
      
//       );
//     };
//   }
  

// export default Header;


// import React, { Component } from 'react';

class Header extends Component {
    componentDidMount() {
        //alert(this);
    }

    render() {
        return (
            // <!-- ======= Header ======= -->
            <div id="header">
                <div className="d-flex flex-column">

                    {/* <div className="profile">
                        <img src="assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle" />
                        <h1 class="text-light"><a href="index.html">Alex Smith</a></h1>
                        <div class="social-links mt-3 text-center">
                            <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                            <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                            <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                            <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                            <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                        </div>
                    </div> */}

                    {/* <nav class="nav-menu">
                        <ul>
                        <li class="active"><a href="index.html"><i class="bx bx-home"></i> <span>Home</span></a></li>
                        <li><a href="#about"><i class="bx bx-user"></i> <span>About</span></a></li>
                        <li><a href="#resume"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
                        <li><a href="#portfolio"><i class="bx bx-book-content"></i> Portfolio</a></li>
                        <li><a href="#services"><i class="bx bx-server"></i> Services</a></li>
                        <li><a href="#contact"><i class="bx bx-envelope"></i> Contact</a></li>

                        </ul>
                    </nav> */}
                    <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>

                </div>
            </div>
        );
    }
}

export default Header;