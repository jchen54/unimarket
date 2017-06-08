import React, { Component } from 'react';
import TopBar from '../components/top_bar/TopBar.js';
import ProductList from '../components/product_list/ProductList.js';

class ProductPage extends Component {
  render() {
    return (
      <div>
        <TopBar/>
        <ProductList/>
      </div>
    );
  }
}

export default ProductPage;
