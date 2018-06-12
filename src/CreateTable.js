import React from 'react';
import { Table } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';

class CreateTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    	<Table striped bordered condensed hover className="table">
        	<thead>
          		<tr>
                  <th>Date</th>
                  <th>Weight</th>
                </tr>
            </thead>
            <tbody>
                {
                  this.props.weights.map(function(row) {
                    return row
                  })
                }
            </tbody>
       </Table>
    );

  }
}

export default CreateTable;