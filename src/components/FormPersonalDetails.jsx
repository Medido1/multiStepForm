import React, { Component } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, TextField, Button } from '@mui/material';


const theme = createTheme();

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const {values, handleChange} = this.props;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar style={{ justifyContent: 'center' }}>
              <Typography variant="h4">
                Enter Personal Details
              </Typography>
            </Toolbar>
          </AppBar>
          <TextField 
            label = "Occupation"
            placeholder="Enter your occupation"
            onChange = {handleChange('occupation')}
            defaultValue = {values.occupation}
            margin = "normal"
            fullWidth
          />
          <br/>
          <TextField 
            label = "City"
            placeholder="Enter your city"
            onChange = {handleChange('city')}
            defaultValue = {values.city}
            margin = "normal"
            fullWidth
          />
          <br/>
          <TextField 
            label = "Bio"
            placeholder="Enter your bio"
            onChange = {handleChange('bio')}
            defaultValue = {values.bio}
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
          <Button
            variant="contained"
            color="false"
            style={styles.button}
            onClick = {this.back}
          >
            Back
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

export default FormPersonalDetails;