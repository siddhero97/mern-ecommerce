/**
 *
 * ProductList
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
const ProductList = props => {
  const { products , min ,max } = props;
  console.log(min)
  return (
    <div className='product-list'>
      <Row>

        {products.map((product, index) => {
          if (product.price>=min) {
            return (

          <Col xs='6' md='4' lg='3' key={index} className='mb-3'>
            <div className='product-container'>
              <div className='item-box'>
                <div className='item-details'>
                    <div className="image-container"> 
                    <img src={`${product.image}`}/>
                    </div>
                  <div className='item-body'>
                    <Link to={`/product/${product.slug}`} className='item-link'>
                      <h1 className='item-name'>{product.name}</h1>
                      <p className='item-desc'>{product.description}</p>
                    </Link>
                  </div>
                  <div className='item-footer'>
                    <p className='price'>CA${product.price}</p>
                    {
                    /* {product.quantity > 0 ? (
                      <p className='stock in-stock'>In stock</p>
                      ) : (
                        <p className='stock out-of-stock'>Out of stock</p>
                      )} */}
                  </div>
                </div>
              </div>
            </div>
          </Col>
            )
          }
        }
        )}
      </Row>
    </div>

  );
};

export default ProductList;
