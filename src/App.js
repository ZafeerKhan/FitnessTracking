import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateTable from './CreateTable.js';
import TableRow from './TableRow.js';
import Form from './Form.js';
import {Grid, Col, Row} from 'react-bootstrap';

var LineChart = require("react-chartjs").Line;

var chartOptions = {

  ///Boolean - Whether grid lines are shown across the chart
  scaleShowGridLines : true,

  //String - Colour of the grid lines
  scaleGridLineColor : "rgba(0,0,0,.05)",

  //Number - Width of the grid lines
  scaleGridLineWidth : 1,

  //Boolean - Whether to show horizontal lines (except X axis)
  scaleShowHorizontalLines: true,

  //Boolean - Whether to show vertical lines (except Y axis)
  scaleShowVerticalLines: true,

  //Boolean - Whether the line is curved between points
  bezierCurve : true,

  //Number - Tension of the bezier curve between points
  bezierCurveTension : 0.4,

  //Boolean - Whether to show a dot for each point
  pointDot : true,

  //Number - Radius of each point dot in pixels
  pointDotRadius : 4,

  //Number - Pixel width of point dot stroke
  pointDotStrokeWidth : 1,

  //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
  pointHitDetectionRadius : 20,

  //Boolean - Whether to show a stroke for datasets
  datasetStroke : true,

  //Number - Pixel width of dataset stroke
  datasetStrokeWidth : 2,

  //Boolean - Whether to fill the dataset with a colour
  datasetFill : true,
  
  //String - A legend template
  legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>",
  

  //Boolean - Whether to horizontally center the label and point dot inside the grid
  offsetGridLines : false
};

var weightArray = [];
var chartWeightArray = [];
var chartDateArray = [];
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
      chartData: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      }
    }

  }

  addRow(weight, date) {
    let rowObj = 
    {
      weight: {weight},
      date: {date}
    }

    //Remove Duplicate Dates
    for (var i = 0; i < rowArray.length; i++) {
      let elementDate = rowArray[i].date.date.toLocaleDateString();
      let newDate = {date}.date.toLocaleDateString();
      if (elementDate === newDate) {
        rowArray.splice(i, 1);
      }
    }

    rowArray.push(rowObj);
    
    //Sort Array based on dates
    rowArray.sort(function(a,b){
      return new Date(a.date.date) - new Date(b.date.date);
    });


    //Clear Current Array and store HTML objects sorted by date
    weightArray = [];
    chartWeightArray = [];
    chartDateArray = [];

    rowArray.forEach(function(row) {
      let weightObject = <TableRow key={row.date.date} weight={row.weight.weight} date={row.date.date}/>;
      weightArray.push(weightObject);

      chartDateArray.push(row.date.date.toDateString());
      chartWeightArray.push(row.weight.weight);
    })

    this.setState(
      {
        weights: weightArray,
        chartData: 
          {
            labels: chartDateArray,
            datasets: [
              {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: chartWeightArray
              }
            ]
          }
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
          <Grid>
            <Row className="show-grid">
              <Col md={1}>
              </Col>
              <Col md={10}>
                <CreateTable weights={this.state.weights}/>
              </Col>
              <Col md={1}>
              </Col>
            </Row>
            <Row className="show-grid">
              <LineChart 
                data={this.state.chartData}
                options={chartOptions}
                width="1100"
                height="250" />
            </Row>
          </Grid>
        }
        

      </div>
    );
  }
}

export default App;
