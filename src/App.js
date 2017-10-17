import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import Ask from './ask';
// import Header from './header';
// import Main from './main';


const Header = () => (
  <header>
    <nav className="nav">
      <ul>
        <li><Link to='/ask'>Ask</Link></li>
        <li><Link to='/answer'>Answer</Link></li>
      </ul>
    </nav>
  </header>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/ask' component={Ask} />
      <Route exact path='/answer' component={Answer} />
    </Switch>
  </main> 
)

const Answer = () => (
  <p> Answer some questions</p> 
)


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
