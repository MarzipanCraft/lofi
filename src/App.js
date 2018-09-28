import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import logo from './assets/ukelele.svg';
import Home from './views/home'
import { lofiTheme } from './theme';
import './App.css';

const styles = {
  apptitle: {
    fontSize: '10em'
  }
}

class App extends Component {
  render() {

    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={lofiTheme}>
        <div>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Typography className={classes.appTitle} variant="display1" color="textPrimary" component="h1">
                hey, welcome to lofi
              </Typography>
            </header>
          </div>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
