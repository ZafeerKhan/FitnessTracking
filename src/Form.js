import React from 'react';
import {FormControl} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {HelpBlock} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {Grid, Col, Row, Button} from 'react-bootstrap';
import DatePicker from 'react-date-picker';

class Form extends React.Component {
  constructor(props, context) {
    super(props, context);

    //this.handleChange = this.handleChange.bind(this);
  }

  getValidationState() {
    /*const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;*/
  }

/*  handleChange(e) {
    this.setState({ value: e.target.value });
  }*/

  render() {
    return (
      
      <form onSubmit = {this.props.handler}>
        <FormGroup
          bsSize="small"
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <Grid>
            <Row className="show-grid">
              <Col md={4}>
                <DatePicker
                  onChange={this.props.handleDateChange}
                  value={this.props.date}
                />
              </Col>
              <Col md={4}>
                <InputGroup>
                  <InputGroup.Addon>Weight: </InputGroup.Addon>
                  <FormControl
                    type="text"
                    placeholder="Enter Weight"
                    onChange={this.props.handleChange}
                  />
                  <InputGroup.Addon>lbs</InputGroup.Addon>
                </InputGroup>  
              </Col>
              <Col md={4}>
                <Button bsStyle="primary" type="submit">Submit</Button>
              </Col>
            </Row>
        </Grid>
          
          <FormControl.Feedback />

        </FormGroup>
      </form>
    );
  }
}

export default Form;
