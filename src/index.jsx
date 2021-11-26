// eslint-disable
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
// {name} can also be written as (props) and in the specify props.name line 10
// props is a JS object. props is immutable - does  not change
//  for things that change we use state

// using a funtion:
// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

// using a class.  
//  If state is needed then class must be used
class Hello extends Component {
  // pass the props we receive to the parent (React)
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    // setState changes the state
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    return (
      <div className={this.state.clicked ? "clicked" : null} onClick={this.handleClick}>
        Hello,
        {this.props.name}
      </div>
    );
  }
}


const root = document.getElementById('root');
if (root) {
  // render( name of the component"Hello" argument, html element)
  ReactDOM.render(<Hello name=" Ana" />, root);
}
