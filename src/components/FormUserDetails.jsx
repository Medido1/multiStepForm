import React, { Component } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, TextField, Button } from '@mui/material';


const theme = createTheme();

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const {values, handleChange} = this.props;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar style={{ justifyContent: 'center' }}>
              <Typography variant="h4">
                Enter User Details
              </Typography>
            </Toolbar>
          </AppBar>
          <TextField 
            label = "First Name"
            placeholder="Enter your first name"
            onChange = {handleChange('firstName')}
            defaultValue = {values.firstName}
            margin = "normal"
            fullWidth
          />
          <br/>
          <TextField 
            label = "Last Name"
            placeholder="Enter your last name"
            onChange = {handleChange('lastName')}
            defaultValue = {values.lastName}
            margin = "normal"
            fullWidth
          />
          <br/>
          <TextField 
            label = "Email"
            placeholder="example@email.com"
            onChange = {handleChange('email')}
            defaultValue = {values.email}
            margin = "normal"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            style={styles.button}
            onClick = {this.continue}
          >
            Continue
          </Button>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

const styles = {
  button : {
    margin: 15
  }
}

export default FormUserDetails;