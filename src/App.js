import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

const Page = ({ title }) => (
    <div className="App">
      <div className="App-header">
      
        <h2>{title}</h2>
      </div>
    </div>
);

const Home = (props) => (
  <div>
    <Page title="Forget-Me-Not 2018 Conference"/>
    <div className="card">
      <p><strong><i class="fa fa-wifi" aria-hidden="true"></i> Wi-Fi</strong></p>
      <p>user: seagate<br/>pass: myhotelwifi</p>
    </div>
    <div className="card">
      <h3><i class="fa fa-building" aria-hidden="true"></i> Hotel</h3>
      <p>Check-in: Apr 23, 9:00am</p>
      <p>Check-out: Apr 26, 11:00am</p>
      <button><Link to="/hotel">View Hotel Info</Link></button> <button><a href="https://www.google.com/maps/place/The+Seagate+Hotel+%26+Spa" target="_blank">Get Directions</a></button>
    </div>
    <div className="card">
      <h3>Guest Speaker - Teepa Snow</h3>
      <p>Tuesday, April 24 - Teepa Snow will be our speaker specializing in Alzheimer's and dementia education.</p>
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
    <div className="buttonMargin"></div>
    <div className="bottomMenu">
      <button><Link to="/"><i class="fa fa-home" aria-hidden="true"></i><br/>Home</Link></button>
      <button><Link to="/hotel"><i class="fa fa-building" aria-hidden="true"></i><br/>Hotel</Link></button>
      <button><Link to="/schedule"><i class="fa fa-calendar" aria-hidden="true"></i><br/>Schedule</Link></button>
      <button><Link to="/eats"><i class="fa fa-cutlery" aria-hidden="true"></i><br/>Eats</Link></button>
    </div>
  </div>
);

const Hotel = (props) => (
  <div>
    <Page title="Hotel"/>
    <div className="buttonMargin"></div>
    <div className="bottomMenu">
      <button><Link to="/"><i class="fa fa-home" aria-hidden="true"></i><br/>Home</Link></button>
      <button><Link to="/hotel"><i class="fa fa-building" aria-hidden="true"></i><br/>Hotel</Link></button>
      <button><Link to="/schedule"><i class="fa fa-calendar" aria-hidden="true"></i><br/>Schedule</Link></button>
      <button><Link to="/eats"><i class="fa fa-cutlery" aria-hidden="true"></i><br/>Eats</Link></button>
    </div>
  </div>
);

const Schedule = (props) => (
  <div>
    <Page title="Schedule"/>
    <div className="buttonMargin"></div>
    <div className="bottomMenu">
      <button><Link to="/"><i class="fa fa-home" aria-hidden="true"></i><br/>Home</Link></button>
      <button><Link to="/hotel"><i class="fa fa-building" aria-hidden="true"></i><br/>Hotel</Link></button>
      <button><Link to="/schedule"><i class="fa fa-calendar" aria-hidden="true"></i><br/>Schedule</Link></button>
      <button><Link to="/eats"><i class="fa fa-cutlery" aria-hidden="true"></i><br/>Eats</Link></button>
    </div>
  </div>
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
      <button><a href="#">View Menu</a></button> <button><a href="https://www.google.com/maps/place/The+Seagate+Hotel+%26+Spa">Get Directions</a></button>
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
    <div className="bottomMenu">
      <button><Link to="/"><i class="fa fa-home" aria-hidden="true"></i><br/>Home</Link></button>
      <button><Link to="/hotel"><i class="fa fa-building" aria-hidden="true"></i><br/>Hotel</Link></button>
      <button><Link to="/schedule"><i class="fa fa-calendar" aria-hidden="true"></i><br/>Schedule</Link></button>
      <button><Link to="/eats"><i class="fa fa-cutlery" aria-hidden="true"></i><br/>Eats</Link></button>
    </div>
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