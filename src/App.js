import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, browserHistory, Route, Link } from 'react-router';
import Countdown from './Countdown.js';
import './App.css';

const Page = ({ title }) => (
    <div className="App">
      <div className="App-header">
      
        <div className="logo"><img src="./logo.png" /></div>
      </div>
    </div>
);

  const currentDate = new Date();
  const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

const Home = (props) => (
  <div>
    <Page title="Forget-Me-Not 2018 Conference"/>
    <div className="registerButton"><a href="https://goo.gl/forms/XsDdkPTu4aHlRwJw2" target="_blank"><button>Register Now</button></a></div>
    <div className="card countdown">
      <Countdown date={new Date ('April 23, 2018')} />
    </div>
    <div className="card">
      <iframe width="100%" src="https://www.youtube.com/embed/24yHz4atqsE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <div className="card hotel">
      <h3><i class="fa fa-building" aria-hidden="true"></i> Seagate Hotel</h3>
      <p>Check-in: Apr 23, 9:00am</p>
      <p>Check-out: Apr 27, 11:00am</p>
      <button><a href="https://gc.synxis.com/rez.aspx?tps=fml&arrive=2018-4-23&adult=1&step=1&hotel=27286&shell=fPBISH2&chain=10237&template=fPBISH&promo=PCH18&avcurrency=USD" target="_blank">Book Room</a></button> <button><a href="https://www.google.com/maps/place/The+Seagate+Hotel+%26+Spa" target="_blank">View Map</a></button>
      <p>Promo Code: <strong>PCH18</strong></p>
    </div>
    <div className="teepa">
      <img width="100%" src="./meet-teepa.png" />
      <p><a href="http://teepasnow.com/">Visit TeepaSnow.com</a></p>
    </div>
    <div className="card">
      <h3>Attendees</h3>
      <p><strong>Scott Green & Robert Smith</strong><br />Northwest Louisiana</p>
      <p><strong>Kevin Saunders</strong><br />Lorain County</p>
      <p><strong>Jordana & Dan Masserman</strong><br />North Westchester & Putnam</p>
      <p><strong>Ethan Guerrieri</strong><br />Palm Beaches and the Treasure Coast</p>
      <p><strong>Sharon Ahearn & Janelle Guiliano</strong><br />Wyoming Valley</p>
      <p><strong>Robin Wilkie</strong><br />Northeast Orlando</p>
      <p><strong>Jill & George Malanga and Kathleen Perlet</strong><br />Northwest New Jersey</p>
      <p><strong>Suzanne & Ray Hickel</strong><br />Alaska</p>
      <p><strong>Don & Amy Kulikowski</strong><br />Pittsburgh</p>
      <p><strong>Argie Martinez</strong><br />North Austin</p>
      <p><strong>Genesis Armani</strong><br />Land O' Lakes</p>
      <p><strong>Katie Herrera & Marco Villavicencio</strong><br />Central Contra Costa</p>
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