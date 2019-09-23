import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import OtherPage from './otherPage';
import Fib from './Fib';

class App extends Component {
  render(){
    return(
      <Router>
       <div className="App" style={{backgroundColor:'#F0F0F0',padding:'30px'}}>
         <img src={logo} style={{width:'100px',margin:'5px'}} alt="logo" />
        <div style={{marginBottom:'15px'}}>
         <Link to='/'> Home</Link>
        <Link to='/otherpage' style={{marginLeft:'10px'}}> About</Link>
        </div>
        <h1>Fibonacci Calculator</h1>
       <Route exact path='/' component={Fib} />
       <Route exact path='/otherpage' component={OtherPage} />
    </div>
      </Router>
    )
  } 
}

export default App;
