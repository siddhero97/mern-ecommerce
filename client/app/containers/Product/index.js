/*
 *
 * Product
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

import AddProduct from '../../components/AddProduct';
import Table from '../../components/Table';
import SubPage from '../../components/SubPage';

class Product extends React.PureComponent {
  componentDidMount() {
    this.props.fetchBrandsSelect();
    this.props.fetchProducts();
  }

  render() {
    const {
      productFormData,
      formErrors,
      productChange,
      addProduct,
      products,
      columns,
      toggleAddProduct,
      isProductAddOpen,
      deleteProduct,
      taxableSelect
    } = this.props;

    return (
      <div className='product-dashboard'>
        <SubPage
          title={isProductAddOpen ? 'Add Product' : 'Product List'}
          isMenuOpen={isProductAddOpen}
          toggleMenu={toggleAddProduct}
        >
          {isProductAddOpen ? (
            <AddProduct
              productFormData={productFormData}
              formErrors={formErrors}
              productChange={productChange}
              addProduct={addProduct}
              taxableSelect={taxableSelect}
            />
          ) : (
            <Table
              data={products}
              columns={columns}
              striped={true}
              hover={true}
              condensed={true}
              csv={true}
              search={true}
              isRowEvents={true}
              clickAction={(id, index) => deleteProduct(id, index)}
            />
          )}
        </SubPage>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productFormData: state.product.productFormData,
    products: state.product.products,
    formErrors: state.product.formErrors,
    columns: state.product.columns,
    isProductAddOpen: state.product.isProductAddOpen,
    taxableSelect: state.product.taxableSelect
  };
};

export default connect(mapStateToProps, actions)(Product);
