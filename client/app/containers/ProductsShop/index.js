/**
 *
 * ProductsShop
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

import ProductList from '../../components/ProductList';
import NotFound from '../../components/NotFound';
import LoadingIndicator from '../../components/LoadingIndicator';

class ProductsShop extends React.PureComponent {
  componentDidMount() {
    const slug = this.props.match.params.slug;
    this.props.fetchProducts(slug);
  }
  render() {
    const { products, isLoading } = this.props;
    let min;
    let max;
    min=0;
    max=1000;
    
    let f1 = () =>{
      min=0;
      max=1000;
    }
    let f2 = () =>{
      min=0;
      max=25;
    }
    let f3 = () =>{
      min=25;
      max=50;
      console.log(min);
      console.log(max);

    }
    console.log(min);
    
    console.log(max);
    let f4 = () =>{
      min=50;
      max=1000;
    }
    return (

      <div className='products-shop'>
        <div className="filters">
        <h1>price</h1>
        <a href="#" onClick={f1}>any price</a>
        <a href="#" onClick={f2}>under CA$25</a>
        <a href="#" onClick={f3}>CA$25 to CA$50</a>
        <a href="#" onClick={f4}>over CA$50</a>
        <br/>
        <h1>type of food</h1>
        <a href="#">main course</a>
        <a href="#">snacks</a>
        <a href="#">drinks</a>
        <a href="#">sweets</a>
        </div>
        <div className='product-container'>
        {isLoading ? (
          <LoadingIndicator />
        ) : products.length > 0 ? (
          <ProductList products={products} min={min} max={max} />
         
        ) : (
          <NotFound message='no products found.' />
        )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.products,
    isLoading: state.product.isLoading
  };
};

export default connect(mapStateToProps, actions)(ProductsShop);
