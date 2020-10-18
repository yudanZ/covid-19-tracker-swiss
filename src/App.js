import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navigation from './components/Navigation';
import OverViewPage from './pages/OverViewPage';
import ListCountries from './pages/ListCountries';
import SymptionsPage from './pages/Symptions';
import ProventionPage from './pages/ProventionPage';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],
      isLoading: false,
    }

    
  }
  
 
  render(){
    //console.log(this.data);
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Route exact path='./' component={OverViewPage} />
          <Route exact path='./list' component={ListCountries} />
          <Route exact path='./symptions' component={SymptionsPage} />
          <Route exact path='./provention' component={ProventionPage} />
          <Footer />
        </div>
      </Router>
    );
  }
  
}

export default App;
