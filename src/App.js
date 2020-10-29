import React, { Component} from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import Home from './components/pages/About/Home';
import Services from './components/pages/Services/Services';
import PostSection from '././components/pages/PostSection'
class App extends Component {
  render(){
    return (
      <Router>  
        <Navbar/>  
<Switch>
<Route path='/' exact component={Home} />
<Route path='/services' exact component={Services} />
<Route path='/posts' exact component={PostSection} />
</Switch>     
      </Router>
    );
  }
  }
  


export default App;
