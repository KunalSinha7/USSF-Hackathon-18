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
import axios from 'axios';

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
    selectedFixture: '',
    secondaryTeam: '',
    homeTeam: 'Home Team',
    awayTeam: 'Away Team',
    teamsList: [],
    fixtureList: [],
    left: false,
  };

  handleChange = prop => event => {
    let that=this;
    
    this.setState({ [prop]: event.target.value }, () => {
      if(prop == 'selectedTeam') {
        axios.get('http://localhost:7000/post/fixtures/' + that.state.selectedTeam)
        .then((res) =>  {
          this.setState({
            fixtureList: res.data
          })
        }).catch((err) => {
          console.log(err)
        })
      } else if(prop == 'selectedFixture') {
        let homeTeam = '';
        let awayTeam = '';
        let secondaryTeam = this.state.selectedFixture.substring(2, this.state.selectedFixture.indexOf('(')).trim();
        if(this.state.selectedFixture != null && this.state.selectedFixture != '' && this.state.selectedTeam != null && this.state.selectedTeam) {
          if(this.state.selectedFixture.charAt(0) == '@') {
            homeTeam = secondaryTeam;
            awayTeam = this.state.selectedTeam;
          } else {
            homeTeam = this.state.selectedTeam;
            awayTeam = secondaryTeam;
          }
        }

        this.setState({
          "homeTeam": homeTeam,
          "awayTeam": awayTeam
        })

      }
    });
  };

  componentDidMount = () => {
    let that = this;
    axios.get('http://localhost:7000/get/teams')
    .then((res) => {
      this.setState({
        teamsList: res.data
      })
    }).catch((err) => {
      console.log(err)
    })
  }

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
                {this.state.teamsList.map(option => (
                  <MenuItem key={option.team_name} value={option.team_name}>
                    {option.team_name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                label={"Select Fixture to Examine (After picking team)"}
                value={this.state.selectedFixture}
                style={{width: "80vmin"}}
                onChange={this.handleChange('selectedFixture')}
              >
                {this.state.fixtureList.map(option => (
                  <MenuItem key={option.fixture_name} value={option.fixture_name}>
                    {option.fixture_name}
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
                  <ScoreBoard homeTeam={this.state.homeTeam} awayTeam={this.state.awayTeam} />
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