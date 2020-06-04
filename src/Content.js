import React, { Component } from "react";

import routes from "./routes.js";

class Content extends Component {

    constructor(props) {
        super(props);
    }

    handleActiveClick = color => {
        this.setState({ activeColor: color });
      };

    render() {
        return(
            <div>
                <h1>Main Content</h1>
            </div>
            
        );
    }

}

export default Content;