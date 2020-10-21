/**
 *
 * Input
 *
 */

import React from 'react';
import '../../styles/core/_landing.scss';
import { Link, NavLink as ActiveLink, withRouter } from 'react-router-dom';
import HomePage from '../Homepage';

const LandingPage = props => {
    const {
      history,
      location
    } = props;
  
return (
<div className='landing'>
    <div className='intro'>
        <h1 className='landingHeader'>Homemade Indonesian Food</h1>
        <p className='landingText'>Indonesian cuisine is rich invariety and tase based on cultural diversity across the archipelagos. shop now for  homemade  Indonesian food</p>
        <Link to='/home/register'><button className='landingButton'>SIGN IN</button></Link>
        <Link to="/home/page"><button className='landingButton browse'>BROWSE FOODS</button></Link>

    </div>
</div>
);
};
export default LandingPage;