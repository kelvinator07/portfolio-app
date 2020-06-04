import React, { Component } from "react";
import { ListGroup, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import logo from './logo.svg';

class SideBar extends Component {

    constructor(props) {
        super(props);
        console.log("Side Bar State" , this.state);
        console.log("Side Bar props " , props);
        this.activeRoute.bind(this);
        this.sidebar = React.createRef();
    }
    // verifies if routeName is the one active (in browser input)
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    toggle() {
        // if (this.state.isOpen) {
        //   this.setState({
        //     color: "transparent"
        //   });
        // } else {
        //   this.setState({
        //     color: "dark"
        //   });
        // }
        this.setState({
          isOpen: !this.props.value.isOpen,
        });
      }

    render() {

        return(
            <div>
                <img src={logo} className="App-logo" alt="logo" />

                <ListGroup defaultActiveKey="Home" variant="flush">
                    {this.props.routes.map((prop, key) => {
                    return (
                        <ListGroup.Item as="li" action 
                        className={this.activeRoute(prop.path) + (prop.pro ? " active-pro" : "")} key={key}>
                        <NavLink
                            onClick={this.props.chan}
                            to={prop.path}
                            className="nav-link"
                            activeClassName="active" >
                            <i className={prop.icon} />
                            <div>{prop.name}</div>
                        </NavLink>
                        </ListGroup.Item>
                    );
                    })}
                </ListGroup>
                
                {/* <Nav>
                    {this.props.routes.map((prop, key) => {
                    return (
                        <li
                        className={
                            this.activeRoute(prop.path) +
                            (prop.pro ? " active-pro" : "")
                        }
                        key={key}
                        >
                        <NavLink
                            to={prop.path}
                            className="nav-link"
                            activeClassName="active"
                        >
                            <i className={prop.icon} />
                            <p>{prop.name}</p>
                        </NavLink>
                        </li>
                    );
                    })}
                </Nav> */}
                
            </div>
            
        );
    }

}

export default SideBar;