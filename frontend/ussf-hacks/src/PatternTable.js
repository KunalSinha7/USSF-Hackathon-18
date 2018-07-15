import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

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



class PatternTable extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  

  handleRowClick = (name) => {
    this.props.handleFieldData(name);
  }

  render() {
    return (
      <Paper className={this.props.root}>
        <Table className={this.props.table}>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell numeric>Pattern</TableCell>
              <TableCell numeric>Occurrences</TableCell>
              <TableCell numeric>Click Button To View on Field</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.data.map(n => {
              return (
                <TableRow key={n.rank} hover={true}>
                  <TableCell component="th" scope="row">
                    {n.rank}
                  </TableCell>
                  <TableCell numeric>{n.name}</TableCell>
                  <TableCell numeric>{n.occurrences}</TableCell>
                  <TableCell><Button onClick={() => this.handleRowClick(n.name)}>View</Button> </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

PatternTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PatternTable);