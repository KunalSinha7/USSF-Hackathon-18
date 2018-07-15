import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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

function ScoreBoard(props) {
  const { classes } = props;

  return (
    <div className={classes.root} >
        <Grid container spacing={12}>
            <Grid item xs={6} sm={3}>
                <h2>{props.homeTeam}</h2>
                <p>Home</p>
            </Grid>
            <Grid item xs={6} sm={3}>
                <h1>0</h1>
            </Grid>
            <Grid item xs={6} sm={3}>
                <h1>0</h1>
            </Grid>
            <Grid item xs={6} sm={3}>
                <h2>{props.awayTeam}</h2>
                <p>Away</p>
            </Grid>
        </Grid>
    </div>
  );
}

ScoreBoard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScoreBoard);