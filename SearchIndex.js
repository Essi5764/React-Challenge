import React, { Component} from 'react';
import {Input} from 'reactstrap';


class SearchIndex extends Component {
    constructor() {
        super();
        this.state = {
        things: [
          'pen', 
          'marker', 
          'eraser',
          'notebook', 
          'pencil', 
          'scissors', 
          'highlighter', 
          'stapler', 
          'paper clip', 
          'binder', 
          'hole punch', 
          'laminator', 
          'laminating sheets',
          'protective sheets', 
          'index cards'
        ],
        items: []
      };
      this.searchFunction = this.searchFunction.bind(this);
    }
  
    searchState() {
      this.setState({
          items: this.state.things
      });
    }

    searchFunction(e){
      let updateList = this.state.things;
      updateList = updateList.filter(item => {
        return item.toLowerCase().search(
          e.target.value.toLowerCase()
        ) !== -1;
      });
      this.setState({
          items: updateList
      });
      console.log(updateList)
    }
    
    render() {
        return (
            <div>
                  <Input type = "text" placeholder='Search Here' onChange={this.searchFunction}/>
                  <h3>Results:</h3>
                  <ul>
                    {this.state.items.map(item =>{
                        return <li key = {item}>{item}</li>
                    })}
                  </ul>
            </div>
    );
      
  }

}
export default SearchIndex;