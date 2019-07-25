import React, {Component} from 'react';
import './App.css';

class Homepage extends Component {
  constructor(props) {
    super(props);
  }
  homepage(props) {
    if (props === true) {
      return <img src='https://i.pinimg.com/originals/87/5d/79/875d7931fb3be8a201e271584ca83339.jpg' rel='Finn as a Barbarian' />
    }else {
      return(
        <React.Fragment>
          <h1>Michael I Welsh</h1>
          <h4>Path to learning Software Devlopment</h4>
        </React.Fragment>
      )
    }
  }
  render() {
    return (
      <div>
      {this.homepage(this.props.intro)}
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: true
    }

  }
 
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({intro:false})
      }.bind(this),
      2000
    )
  }

  render() {
    return(
      <div className='App'>
        <Homepage intro={this.state.intro} />
      </div>
    )
  }
}

export default App;
