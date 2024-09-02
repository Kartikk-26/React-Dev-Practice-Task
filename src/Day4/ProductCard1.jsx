import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white">
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-48 object-contain mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-blue-600 text-xl font-bold mb-2">${product.price}</p>
      <p className="text-gray-700 text-sm">
        {product.description.length > 100
          ? product.description.substring(0, 100) + '...'
          : product.description}
      </p>
    </div>
  );
};

export default ProductCard;
