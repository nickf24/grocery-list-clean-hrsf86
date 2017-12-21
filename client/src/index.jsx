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
  	// delete all divs with class finished
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


