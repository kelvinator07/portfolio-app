import React, { Component } from 'react';
import { Box, Grid, Button, Heading } from "@chakra-ui/core";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,
  } from "@chakra-ui/core";

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = { username: ''};
    }

    changeUsername = (event) => {
        event.preventDefault();
        this.setState({username: event.target.value});
    }

    submitForm = () => {
        //alert("You are about to submit " + this.state.username);
    }

    render() {
        let name = '';
        if (this.state.username) {
            name = <h1>Hello {this.state.username} </h1>;
        } else {
            name = '';
        }

        return(
            <div className="App">
                <Box padding={6}>
                    <Heading>
                    Welcome to{" "}
                    <span role="img" aria-label="logo">
                        ⚡️
                    </span>{" "}
                    Chakra UI
                    </Heading>
                </Box>
                <Button>I just consumed some ⚡️Chakra!</Button>
                <Alert status="error">
                    <AlertIcon />
                    <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
                    <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
                    <CloseButton position="absolute" right="8px" top="8px" />
                </Alert>

                <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                    <Box w="100%" h="10" bg="blue.500" />
                    <Box w="100%" h="10" bg="blue.500" />
                    <Box w="100%" h="10" bg="blue.500" />
                    <Box w="100%" h="10" bg="blue.500" />
                    <Box w="100%" h="10" bg="blue.500" />
                </Grid>

            </div>
        );
    }

}

export default MyForm;