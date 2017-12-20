import React from 'react';
import ReactDOM from 'react-dom';
import groceryList from '../../database/data.js';
import GroceryList from './components/GroceryList.jsx';
import AddGrocery from './components/AddGrocery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: groceryList
    }
  }
 
  handleClick(groceryObj) {
  	// loop through this.state.list.groceryList
  	// if any object's description property matches
  	// increment its count
  	// return
  	//debugger;
  	var flag = true; 
  	var grocList = this.state.list.groceryList;
  	debugger;
  	for (var i = 0; i < grocList.length; i++) {
  		var index = i;
  	  if (grocList[i].description === groceryObj.description) {
  	  	//debugger;
  	  	// update the quantity property of grocList[i]
  	  	this.setState((prevState) => {
  	  	  var prevList = prevState.list.groceryList;
  	  	  var matchedEntry = prevState.list.groceryList[index - 1];
  	  	  console.log('matched entry is', matchedEntry)
  	  	  console.log('previous list is', prevList)
  	  	  var prevListClone = prevList.slice(0, prevList.length);
  	  	  prevListClone.splice(index, 1);
  	  	  var newQuantity = Number(matchedEntry.quantity) + Number(groceryObj.quantity);
  	  	  var newNode = matchedEntry;
  	  	  newNode.quantity = newQuantity;
  	  	  // insert new node into prevListClone
  	  	  var backHalf = prevListClone.slice(index-2, prevListClone.length)
  	  	  prevListClone = prevListClone.slice(0, index - 2).concat(newNode);
  	  	  prevListClone = prevListClone.concat(backHalf);
  	  	  {list: prevListClone}
  	  	  console.log(prevListClone)
  	  	  //console.log(newQuantity)
  	  	  console.log(prevListClone)

  	  	});

  	  	console.log('made it here')
  	  //this.state.list.groceryList[i].quantity = this.state.list.groceryList[i].quantity + groceryObj.quantity;
  	  	flag = false;
  	  }
  	}
  	// increment count
  	// if (this.state.list..indexOf(groceryObj.description))
  	console.log(this.state.list.groceryList)
  	if (flag) {
	  	this.setState((prevState) => {
	  		var prevArr = prevState.list.groceryList;
	  		var highId = prevArr[prevArr.length - 1].id;
	  		var newId = highId + 1;
	  		groceryObj.id = newId;
  			{list: prevState.list.groceryList.push(groceryObj)}
  		});
  	}
  } 


  render () {
    return (
      <div> 
      <h1> Grocery List </h1>
      	<AddGrocery clickFn = {this.handleClick.bind(this)}/> 
      	<GroceryList list = {this.state.list.groceryList}/> 
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


//this.setState((prevState) => {

  	  	// 	var prevList = prevState.list.groceryList;
  	  	// 	var newNode = prevList[i];
  	  	// 	newNode.quantity = prevList[i].quantity + groceryObj.quantity;
  	  	// 	newList = prevList.slice(0, i).concat(newNode)
  	  	// 	newList = newList.concat(prevList.slice(i, prevList.length));
  	  	// 	{list: newList}

  	  	// });