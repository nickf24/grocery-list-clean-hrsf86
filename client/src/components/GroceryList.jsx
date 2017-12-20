import React from 'react';
import GroceryItem from './GroceryItem.jsx'


const GroceryList = (props) => (
  <div className="groceries">
  	{props.list.map((item) => <GroceryItem item = {item} /> )}
  </div>
)

// class GroceryList extends React.Component {

// 	constructor(props) {
// 		super(props)
// 	}

// 	render() {
// 		console.log(this.props.list)
// 		return (
// 			this.props.list[0]
// 			)
// 	}

// }

export default GroceryList;

// pass each grocery item in list to an individual GroceryItem tag
  	// <GroceryItem {props.list.map((item) => item )} />

  	// <GroceryItem {props.list.map((item) => 'item' = {item} )} />