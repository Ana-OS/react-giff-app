import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props)
        // when an input or form determines the stete of a component its called "controlled component"
        this.state = {
            term: ""
        }
    }
    handleUpdate = (e) => {
        this.setState({
            term: e.target.value
        })
        return this.props.searchFunction(e.target.value)
    }

    render(){
        return(
            <input value={this.state.term} type="text" className="form-control form-search" onChange={this.handleUpdate}/> 
            // instead of using a fat arrow function for handleUpdate so we can use the "this" we can write the funation as handleUpdate(e){.. and call it as onChange={this.handleUpdate.bind(this)}

        )
    }

}

export default SearchBar