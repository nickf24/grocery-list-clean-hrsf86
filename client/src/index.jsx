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

    //   this.setState({
    //   	this.state.list: this.state.list.groceryList.push(groceryObj);
    //   });
    // }
  }
 
  handleClick(groceryObj) {
  	this.setState((prevState) => {
  		// get current highest id
  		// set groceryObj.id = highest + 1
  		var prevArr = prevState.list.groceryList;
  		var highId = prevArr[prevArr.length - 1].id;
  		var newId = highId + 1;
  		groceryObj.id = newId;
  		return {list: prevState.list.groceryList.push(groceryObj)}
  	});
  	console.log(this.state.list.groceryList);
  } 


  render () {
  	// {console.log(this.state.list)}
  	//{console.log(this.handleClick.bind(this))}
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