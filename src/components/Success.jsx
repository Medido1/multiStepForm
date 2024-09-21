import React, { Component } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Typography } from "@mui/material";

const theme = createTheme();

export class Success extends Component {
  render(){
    return (
      <ThemeProvider theme={theme}>
      <React.Fragment>
        <AppBar position="static">
          <Toolbar style={{ justifyContent: 'center' }}>
            <Typography variant="h4">
              Sucess
            </Typography>
          </Toolbar>
        </AppBar>
        <h1>Thank you for your submission</h1>
        <p>you will get an email with further instructions</p>
      </React.Fragment>
    </ThemeProvider>
    )
  }
}

export default Success;