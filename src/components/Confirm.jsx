import React, { Component } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, List, ListItem, ListItemText, Button } from '@mui/material';


const theme = createTheme();

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    /* process form */
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const {values: 
      {firstName, lastName, email, occupation, city, bio}
    } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar style={{ justifyContent: 'center' }}>
              <Typography variant="h4">
                Confirm Details
              </Typography>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem>
              <ListItemText 
                primary= "First Name"
                secondary = {firstName}
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary= "Last Name"
                secondary = {lastName}
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary= "Email"
                secondary = {email}
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary= "Occupation"
                secondary = {occupation}
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary= "City"
                secondary = {city}
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary= "Bio"
                secondary = {bio}
              />
            </ListItem>
          </List>
          <Button
            variant="contained"
            color="primary"
            style={styles.button}
            onClick = {this.continue}
          >
            Confirm
          </Button>
          <Button
            variant="contained"
            color="false"
            style={styles.button}
            onClick = {this.back}
          >
            back
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

export default Confirm;