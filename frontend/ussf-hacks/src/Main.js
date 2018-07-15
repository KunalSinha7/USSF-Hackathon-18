import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ScoreBoard from './ScoreBoard';
import PatternTable from './PatternTable';
import Field from './Field'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

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

const rangesTeam = [
  {
    value: '1',
    label: 'Man City',
  },
  {
    value: '2',
    label: 'Man Utd',
  },
  {
    value: '3',
    label: 'Liverpool ',
  },
];

const rangesFixtures = [
  {
    value: '1',
    label: 'away v. Tottenham',
  },
  {
    value: '2',
    label: 'home v. Chelsea',
  },
  {
    value: '3',
    label: 'home v. Arsenal',
  },
];

class Main extends React.Component {
  state = {
    selectedTeam: '',
    selectedFixture: ''
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} >
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
          <Grid container spacing={12}>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                label={"Select Team To Examine"}
                value={this.state.selectedTeam}
                style={{width: "80vmin"}}
                onChange={this.handleChange('selectedTeam')}
              >
                {rangesTeam.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                label={"Select Fixture to Examine"}
                value={this.state.selectedFixture}
                style={{width: "80vmin"}}
                onChange={this.handleChange('selectedFixture')}
              >
                {rangesFixtures.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
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
  
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);