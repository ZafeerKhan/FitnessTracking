import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateTable from './CreateTable.js';
import TableRow from './TableRow.js';
import Form from './Form.js';


var weightArray = [];
var dateArray = [];
var rowArray = [];

class App extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this)
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

  addRow(weight, date) {
    let rowObj = 
    {
      weight: {weight},
      date: {date}
    }
    rowArray.push(rowObj);
    
    //Sort Array based on dates
    rowArray.sort(function(a,b){
      return new Date(a.date.date) - new Date(b.date.date);
    });

    //Clear Current Array and store HTML objects sorted by date
    weightArray = [];
    rowArray.forEach(function(row) {
      let weightObject = <TableRow key={row.date.date} weight={row.weight.weight} date={row.date.date}/>;
      weightArray.push(weightObject);
    })

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

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      value: this.state.value,
      date: this.state.date,
      submitted: true,
    })
    this.addRow(this.state.value, this.state.date);
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
          handler={this.handleSubmit}
          handleChange={this.handleWeightChange}
          handleDateChange={this.onDateChange}
          date={this.state.date}/>

        {
          this.state.weights.length > 0 &&
          <CreateTable weights={this.state.weights}/>
        }

      </div>
    );
  }
}

export default App;
