import React, {Component} from 'react';
import './App.css';

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  menu(prop) {
    if (prop === true) {
      return(
        <div>
          <ul id='Menu'>
            <li>Home</li>
            <li>Story</li>
            <li>Projects</li>
            <li>Github</li>
            <li>Work History</li>
          </ul>
        </div>
      )
    }
  }

  homepage(props) {
    if (props === true) {
      return <img id='Intro' src='https://i.pinimg.com/originals/87/5d/79/875d7931fb3be8a201e271584ca83339.jpg' rel='Finn as a Barbarian' />
    }else {
      return(
        <React.Fragment>
          <h1>Michael I Welsh</h1>
          <h4>Path to learning Software Devlopment</h4>
          <button onClick={this.props.menuClick}>Menu</button>
          {this.menu(this.props.menu)}
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
      intro: true,
      menuDrop:false
    }

  }

  menuClick() {
    this.setState(prev => ({
      menuDrop: !prev.menuDrop
    }))
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
        <Homepage intro={this.state.intro} menuClick={this.menuClick.bind(this)} menu={this.state.menuDrop} />
      </div>
    )
  }
}

export default App;
