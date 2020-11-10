/**
 *
 * Input
 *
 */

import React from 'react';
import '../../styles/core/_vender.scss';
import Img from './vender.png';
import { Link, NavLink as ActiveLink, withRouter } from 'react-router-dom';
const VenderPage = props => {
    const {
      history,
      location
    } = props;
  
return (
    <div className="venderWrapper">
        <div className='vender'>
            <div className='intro'>
                <h1 className='venderHeader'>Become a Vendor</h1>
                <div className='venderText'>  
                    <h2>How to create a shop?</h2>
                    <p>Create a Homefood account (if you don’t already have one), set your shop location and currency, choose a shop name, create a listing, set a payment method (how you want to be paid), and finally set a billing method (how you want to pay your homefood fees).</p>
                    <h2>How do I get paid?</h2>
                    <p>With Homefood Payments, our easy-to-use and secure payment system, you may accept payments from a wide variety of payment methods including credit and debit cards, PayPal, Google Wallet, and in person. Funds from your sales are deposited directly to your bank account,</p>
                    <h2>What are the fees?</h2>
                    <p>Currently Homefood is completely FEE FREE for home chefs. We charge the customer a small convenience fee of 7.5% to cover costs.</p>
                    <h2>What permits do I need?</h2>
                    <p>Currently, you will need to complete the Standard Operating Procedures Form, apply for a permit in your county, and get your Food Safety Manager Certification. In addition, if you have other people in your home kitchen, each will need to obtain a Food Handlers Permit.</p>
                </div>

            </div>
            <div className='venderImage'><img src={Img}/></div>
        </div>
        <div className='path'>
            <h1>Choose your path</h1>
            <div className='paths'>
                <div className='standard'>
                    <p>HOMEFOOD</p>                   
                    <h2>Standard</h2>
                    <p>Everything you need to start, manage, and grow a homemade business.</p>                       
                    <p>No additional monthly charge,</p>                   

                </div>
                <div className='plus'>
                    <p>HOMEFOOD</p>                   
                    <h2>Plus</h2>
                    <p>An expanded set of tools to help jump-start growth and express your brand. </p>                   
                    <p>CA$6.40 a month</p>
                </div>
            </div>
            
        </div>
    </div>
);
};
export default VenderPage;