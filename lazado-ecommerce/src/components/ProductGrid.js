import React from 'react';
import ProductItem from './ProductItem';

const products = [
  { id: 1, category: 'Appliances', image: 'https://via.placeholder.com/150', name: 'Toaster' },
  { id: 2, category: 'Appliances', image: 'https://via.placeholder.com/150', name: 'Microwave' },
  { id: 3, category: 'Gadgets', image: 'https://via.placeholder.com/150', name: 'Smartphone' },
  { id: 4, category: 'Gadgets', image: 'https://via.placeholder.com/150', name: 'Laptop' },
  { id: 5, category: 'Accessories', image: 'https://via.placeholder.com/150', name: 'Backpack' },
  { id: 6, category: 'Accessories', image: 'https://via.placeholder.com/150', name: 'Sunglasses' },
  { id: 7, category: 'Clothing', image: 'https://via.placeholder.com/150', name: 'T-Shirt' },
  { id: 8, category: 'Clothing', image: 'https://via.placeholder.com/150', name: 'Jeans' }
];

function ProductGrid({ addToCart }) {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductGrid;
