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
  	var flag = true; 
  	var grocList = this.state.list.groceryList;
  
  	for (var i = 0; i < grocList.length; i++) {
  	  if (grocList[i].description.toLowerCase() === groceryObj.description.toLowerCase()) {
        var index = i;
  	  	this.setState(() => {
          this.state.list.groceryList[index].quantity = Number(this.state.list.groceryList[index].quantity) + Number(groceryObj.quantity);   
          {list: this.state.groceryList}
  	  	
        });
  	  	flag = false;
  	  }
  	}

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




          // var prevList = grocList.slice();
          // console.log('prevList is', prevList);
          // var matchedEntry = prevState.list.groceryList[index - 1];
          // console.log('matchedEntry is', matchedEntry)
          // // console.log('matched entry is', matchedEntry)
          // // console.log('previous list is', prevList)
          // var prevListClone = prevList.slice(0, prevList.length);
          // prevListClone.splice(index, 1);
          // console.log('prevListClone after splice is', prevListClone);
          // var newQuantity = Number(matchedEntry.quantity) + Number(groceryObj.quantity);
          // var newNode = matchedEntry;
          // newNode.quantity = newQuantity;
          // console.log('newNode is', newNode);
          // //newNode.description = groceryObj.description
          // // insert new node into prevListClone
          // var backHalf = prevListClone.slice(index-2, prevListClone.length)
          // console.log('backHalf is', backHalf);
          // prevListClone = prevListClone.slice(0, index - 2).concat(newNode);
          // prevListClone = prevListClone.concat(backHalf);
          // console.log('Final Product is', prevListClone)
          // {list: prevListClone}