import React, { Component } from "react";
import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';
import { Container, Row, Col } from 'react-bootstrap';
import routes from "./routes.js";
import { Route, Switch } from "react-router-dom";
import DemoNavbar from "./components/Navbar/DemoNavbar";


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sideOpen: false
        };
        console.log("Main props" , props);
        console.log("Main State" , this.state);
        this.mainPanel = React.createRef();
    }

    handleSideBar = () => {
        console.log("clicked ", this.state.sideOpen)
        this.setState({ sideOpen: true });
    };

    render() {
        return(
            <div>
                {/* <Header /> */}
                <DemoNavbar showSide={this.handleSideBar} {...this.props} />
                <Container fluid className="mt-5">
                    <Row>
                        <Col sm={2} className="d-none d-md-block"><SideBar show={this.state.sideOpen} chan={this.handleSideBar} {...this.props} routes={routes} value={this.state}/></Col>
                        <Col sm={10} className="main-panel text-center" ref={this.mainPanel}> 
                        <Switch>
                            {routes.map((prop, key) => {
                            return (
                                <Route
                                path={prop.path}
                                component={prop.component}
                                key={key}
                                />
                            );
                            })}
                        </Switch> 
                        </Col>
                    </Row>
                </Container>
            </div>
            
        );
    }

}

export default Main;