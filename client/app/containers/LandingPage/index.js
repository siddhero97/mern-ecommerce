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
        <button className='landingButton'><Link to='/home/register'>SIGN IN</Link></button>  
        <button className='landingButton browse'><Link to="/home/page">BROWSE FOODS</Link></button>  

    </div>
</div>
);
};
export default LandingPage;