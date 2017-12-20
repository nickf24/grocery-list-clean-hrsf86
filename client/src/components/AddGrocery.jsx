import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      descriptionVal: '',
      quantityVal: ''
    }
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDescriptionChange(event) {
  	this.setState({descriptionVal: event.target.value,});
  }

  handleQuantityChange(event) {
  	this.setState({quantityVal: event.target.value});
  }

  handleSubmit(event) {
  	var grocObj = {};
  	grocObj.quantity = this.state.quantityVal;
  	grocObj.description = this.state.descriptionVal;
  	return this.props.clickFn(grocObj);
  }

  render () {
    return (
    	<div> 
    	  Description: <input type = 'form' id = "descForm" onChange = {this.handleDescriptionChange} /> 
      	  <br></br>
      	  Quantity: <input type = 'form' id = "quantForm" onChange = {this.handleQuantityChange} /> <button onClick = {this.handleSubmit}> Add Grocery </button>
    	</div> 

    );
  }
}

export default AddGrocery;

 // <button onClick = {() => {this.props.clickFn({quantity: 2, description: 'frozen'})} }>