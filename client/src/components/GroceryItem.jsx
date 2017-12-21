import React from 'react';

class GroceryItem extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = {
	  	clicked: false
	  }
	  this.handleItemClick = this.handleItemClick.bind(this);
	}

	handleItemClick() {
	  this.setState( prevState => ({
	  	clicked: !prevState.clicked
	  }));
	}


	render() {
	
	  return (
	    <div id = 'item' onClick = {this.handleItemClick} className = {this.state.clicked ? 'finished' : null}>{this.props.item.description + ' ' + this.props.item.quantity}</div>
	  )
	}


}



export default GroceryItem;



// const GroceryItem = (props) => (
//   <div>{props.item.description + ' ' + props.item.quantity}</div>

// )

// export default GroceryItem;