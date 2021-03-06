/**
 *
 * Application
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import { Switch, Route} from 'react-router-dom';
import { Container } from 'reactstrap';


import actions from '../../actions';

// routes
import LoginPage from '../Login';
import SignupPage from '../Signup';
import HomePage from '../Homepage';
import Dashboard from '../Dashboard';
import Navigation from '../Navigation';
import Authentication from '../Authentication';
import Notification from '../Notification';
import ForgotPassword from '../ForgotPassword';
import ResetPassword from '../ResetPassword';
import Shop from '../Shop';
import ProductPage from '../ProductPage';
import Sell from '../Sell';
import Contact from '../Contact';
import OrderSuccess from '../OrderSuccess';
import OrderPage from '../OrderPage';
import AuthSuccess from '../AuthSuccess';
import Merchant from "../Merchant";
import Vender from '../Vender';
import Footer from '../../components/Footer';
import Page404 from '../../components/Page404';
// const history = createHistory();
// history.go(0)
class Application extends React.PureComponent {
  componentDidMount() {
    const token = localStorage.getItem('token');

    if (token) {
      this.props.fetchProfile();
    }

    this.props.handleCart();

    document.addEventListener('keydown', this.handleTabbing);
    document.addEventListener('mousedown', this.handleMouseDown);
  }

  handleTabbing(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing');
    }
  }

  handleMouseDown() {
    document.body.classList.remove('user-is-tabbing');
  }
  
  render() {
    let header;
    console.log(location);
  
  return (
    
    <div className='application'>
        <Notification /> 
        <Navigation />
        <main className='main'>
          <Container>
            <div className='wrapper'>
              <Switch>
                <Route exact path='/home/page' component={HomePage} />
                <Route path='/home/shop' component={Shop} />
                <Route path='/home/vender' component={Vender} />
                <Route path='/home/sell' component={Sell} />
                <Route path='/home/contact' component={Contact} />
                <Route path='/home/product/:slug' component={ProductPage} />
                <Route path='/home/order/success/:id' component={OrderSuccess} />
                <Route path='/home/order/:id' component={OrderPage} />
                <Route path='/home/login' component={LoginPage} />
                <Route path='/home/register' component={SignupPage} />
                <Route path='/home/forgot-password' component={ForgotPassword} />
                <Route path="/home/merchant" component={Merchant} />
                <Route
                  path='/home/reset-password/:token'
                  component={ResetPassword}
                />
                <Route path='/home/auth/success' component={AuthSuccess} />
                <Route
                  path='/home/dashboard'
                  component={Authentication(Dashboard)}
                />
                <Route path='home/404' component={Page404} />
                <Route path='*' component={Page404} />
              </Switch>
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authentication.authenticated
  };
};

export default connect(mapStateToProps, actions)(Application);
