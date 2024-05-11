import React from 'react';

function ProductItem({ product, addToCart }) {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <button className="btn" onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
}

export default ProductItem;
