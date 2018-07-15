import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    textAlign: "left"
  },
});

let id = 0;
function createData(rank, pattern, occurences) {
  id += 1;
  return { rank, pattern, occurences};
}

const data = [
  createData('1', "Marcelo, Kroos, Modric", 16),
  createData('2', "Marcelo, Casemiro, Ronaldo", 9),
  createData('3', "Ramos, Casemiro, Kroos", 6),
  createData('4', "Modric, Benzema, Modric", 3),
  createData('5', "Casemiro, Kroos, Isco", 1),
];

function PatternTable(props) {
  const { classes } = props;
  console.log("table", props.data)
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell numeric>Pattern</TableCell>
            <TableCell numeric>Occurrences</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(n => {
            return (
              <TableRow key={n.rank} hover={true} onClick={() => this.handleRowClick()}>
                <TableCell component="th" scope="row">
                  {n.rank}
                </TableCell>
                <TableCell numeric>{n.name}</TableCell>
                <TableCell numeric>{n.occurrences}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

PatternTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PatternTable);