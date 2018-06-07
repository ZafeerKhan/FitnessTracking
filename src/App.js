import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import WeightRow from './WeightRow.js';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap'
import { Grid, Row, Col } from 'react-bootstrap'


var weightArray = [];
var dateArray = [];

class App extends Component {

  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this)
    this.handleWeightChange = this.handleWeightChange.bind(this)
    //this.handleDateChange = this.handleDateChange.bind(this)


    this.state = {
      value: '',
      date: new Date(),
      submitted: false,
      weights: [],
      dates: [],
    }

  }

  addWeight(weight, date) {

    let weightObject = <WeightRow weight={weight} date={date}/>;
    weightArray.push(weightObject);
    this.setState(
      {
        weights: weightArray,
        dates: dateArray
      })
  }

  handleWeightChange(e) {
    this.setState(
      {
        value: e.target.value,
        submitted: false
      });
  }

  onDateChange = date => this.setState({ date })

  handler(e) {
    console.log("called");
    //weightArray.push(<WeightRow weight = {this.state.value} />);
    e.preventDefault();
    this.setState({
      value: this.state.value,
      date: this.state.date,
      submitted: true,
    })
    this.addWeight(this.state.value, this.state.date);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <br /><br /><br /><br /><br /><br />
        <Form 
          handler={this.handler}
          handleChange={this.handleWeightChange}
          handleDateChange={this.onDateChange}
          date={this.state.date}/>
        
        <Table striped bordered condensed hover className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.weights.map(function(row) {
                return row
              })
            }
          </tbody>
        </Table>


      </div>
    );
  }
}

export default App;