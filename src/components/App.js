import React, { Component } from 'react';
import View  from './view'
// Materia iu 
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
      <Grid item xs={12}>
        <header>
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Agenda
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
        </header>
        <section>
        <View wishList={this.props.wishList} />
        </section>
      </Grid>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(App);
