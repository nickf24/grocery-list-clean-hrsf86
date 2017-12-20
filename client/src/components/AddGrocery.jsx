import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

    }
  }

  render () {
    return (
    	<div> 
    	  Description: <input type = 'form' /> 
      	  <br></br>
      	  Quantity: <input type = 'form' /> <button onClick = {() => this.props.clickFn({quantity: 2, description: 'frozen'}) }> Add Grocery </button>
    	</div> 

    );
  }
}

export default AddGrocery;

