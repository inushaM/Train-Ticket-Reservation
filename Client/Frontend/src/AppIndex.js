import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route ,HashRouter,  NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Register from './components/Register'
import Login from './components/Login'
import AddTicket from './components/AddTicket'
import TotalPrice from './components/TotalPrice'
import CashPayment from './components/CashPayment'
import FinalView from './components/FinalView'
ReactDOM.render(
    <Router>
        <div>
        <nav class="navbar navbar-light navBar" >
            <a class="navbar-brand " href="#"><h4 className="navBarTitle">Train Ticket Booking System</h4></a>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#"><h6 className="logoutLink">Logout</h6></a></li>
            </ul>
        </nav>
        <br/>
            <Route exact path='/' component={Login} />
            <Route  path='/Register' component={Register} />
            <Route  path='/App' component={App} />
            <Route  path='/AddTicket' component={AddTicket} />
            <Route  path='/TotalPrice' component={TotalPrice} />
            <Route  path='/CashPayment' component={CashPayment} />
            <Route  path='/FinalView' component={FinalView} />
        </div>
    </Router>,
    document.getElementById('root')
);

serviceWorker.unregister();
