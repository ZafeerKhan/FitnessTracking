import React from 'react';

class WeightRow extends React.Component {
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

export default WeightRow;
