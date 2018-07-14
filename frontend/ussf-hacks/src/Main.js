import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ScoreBoard from './ScoreBoard';
import PatternTable from './PatternTable';
import Field from './Field'

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: "2vmin",
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function Main(props) {
  const { classes } = props;

  return (
    <div className={classes.root} >
      <Grid container spacing={24}>
      <Grid item xs={12} sm={12}>
      <Paper className={classes.paper}>
        hi
      </Paper>
      </Grid>
        
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Grid container spacing={12}>
              <Grid item xs={12} sm={12}>
                <ScoreBoard />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
            <PatternTable />
        </Grid>
      </Grid>
    </div>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);