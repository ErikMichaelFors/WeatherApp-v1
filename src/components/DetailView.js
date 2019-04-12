import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import '../myOwnStyles.css';

class DetailView extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
          {this.props.city}
      </div>
    );
  }
}

export default DetailView;