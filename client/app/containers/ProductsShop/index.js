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
  f1(){
    let min=0;
    let max=1000;
    console.log("inside f1: min ", min, " max ", max)
  }
  f2(){
    let min=0;
    let max=25;
    console.log("inside f2: min ", min, " max ", max)
    this.products = this.products.filter((product) => {
      return product.price < 25;
    })
  }
  f3(){
    let min=25;
    let max=50;
    console.log(min);
    console.log(max);
    console.log("inside f3: min ", min, " max ", max)
    this.products = this.products.filter((product) => {
      return (product.price >= 25) && (product.price <50);
    })

  }
  f4(){
    let min=50;
    let max=1000;
    console.log("inside f4: min ", min, " max ", max)
  }
  render() {
     const { products, isLoading } = this.props;
    this.products = this.props.products;
    this.isLoading = this.props.isLoading;
    let min;
    let max;
    min=0;
    max=1000;
    
    
    return (

      <div className='products-shop'>
        <div className="filters">
        <h1>price</h1>
        <a href="#" onClick={this.f1}>any price</a>
        <a href="#" onClick={this.f2}>under CA$25</a>
        <a href="#" onClick={this.f3}>CA$25 to CA$50</a>
        <a href="#" onClick={this.f4}>over CA$50</a>
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
        ) : this.products.length > 0 ? (
          <ProductList products={this.products} min={min} max={max} />
         
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
