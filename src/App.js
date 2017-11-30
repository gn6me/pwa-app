import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

const Page = ({ title }) => (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{title}</h2>
      </div>
    </div>
);

const Home = (props) => (
  <div>
    <Page title="Preferred Care at Home Annual Convention"/>
    <div className="card">
      <h3><i class="fa fa-building" aria-hidden="true"></i> Hotel</h3>
      <p>Check-in: Apr 2, 9:00am</p>
      <p>Check-out: Apr 7, 11:00am</p>
      <button><Link to="/hotel">View Hotel Info</Link></button>
    </div>
    <div className="card">
      <h3><i class="fa fa-calendar" aria-hidden="true"></i> Schedule</h3>
      <p><strong>Coming Up</strong></p>
      <p>Understanding Marketing Automation - Matt Adkins</p>
      <p>@11:30am</p>
      <button><Link to="/schedule">View Full Schedule</Link></button>
    </div>
    <div className="card">
      <h3><i class="fa fa-cutlery" aria-hidden="true"></i> Eats</h3>
      <p>These are some details about nearby restaurants.</p>
      <button><Link to="/eats">View Restaurants</Link></button>
    </div>
  </div>
);

const Hotel = (props) => (
  <Page title="About"/>
);

const Schedule = (props) => (
  <Page title="Schedule"/>
);

const Eats = (props) => (
  <div>
    <Page title="Eats"/>
    <div className="submenu">
      <button><Link to="/casual">Casual</Link></button>
      <button><Link to="/sitdown">Sit-down</Link></button>
      <button><Link to="/bar">Bar</Link></button>
      <button><Link to="/dessert">Dessert</Link></button>
    </div>
    <div className="card">
      <h3>Restaraunt 1</h3>
      <p>This place serves comfort food and alcoholic beverages. Happy hour is from 3pm-7pm.</p>
      <button><a href="#">View Menu</a></button>
    </div>
    <div className="card">
      <h3>Restaraunt 1</h3>
      <p>This place serves comfort food and alcoholic beverages. Happy hour is from 3pm-7pm.</p>
      <button><a href="#">View Menu</a></button>
    </div>
    <div className="card">
      <h3>Restaraunt 1</h3>
      <p>This place serves comfort food and alcoholic beverages. Happy hour is from 3pm-7pm.</p>
      <button><a href="#">View Menu</a></button>
    </div>
    <div className="buttonMargin"></div>
    <div><button className="goback" onClick={browserHistory.goBack}><i class="fa fa-arrow-left" aria-hidden="true"></i></button></div>
  </div>
);

const Casual = (props) => (
  <Page title="Casual"/>
);

const Sitdown = (props) => (
  <Page title="Sitdown"/>
);

const Bar = (props) => (
  <Page title="Bars"/>
);

const Dessert = (props) => (
  <Page title="Dessert"/>
);



class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} require="Home.js"/>
        <Route path="/hotel" component={Hotel}/>
        <Route path="/schedule" component={Schedule}/>
        <Route path="/eats" component={Eats}/>
        <Route path="/casual" component={Casual}/>
        <Route path="/sitdown" component={Sitdown}/>
        <Route path="/bar" component={Bar}/>
        <Route path="/dessert" component={Dessert}/>
      </Router>
    );
  }
}

export default App;