import React from 'react';
import { Table } from 'react-bootstrap'
import { Grid, Row, Col } from 'react-bootstrap'

class TableRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <tr>
        <td>{this.props.date.toLocaleDateString()}</td>
        <td>{this.props.weight}</td>
      </tr>
    );

  }
}

export default TableRow;
