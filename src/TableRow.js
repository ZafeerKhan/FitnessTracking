import React from 'react';

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
