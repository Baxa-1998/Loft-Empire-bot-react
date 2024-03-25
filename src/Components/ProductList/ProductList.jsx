import React from 'react';
import './ProductList.css';
import ProductItem from '../ProductItem/ProductItem';

const product = [
  { id: '1', title: 'Кресло', description: 'Кресла в стиле Loft', price: 1150000 },
  { id: '2', title: 'Писменный стол', description: 'Писменные столы в стиле Loft', price: 1200000 },
  { id: '3', title: 'Диван', description: 'Диваны в стиле Loft', price: 1800000 },
];
export default function ProductList() {
  return (
    <div className={'list'}>
      {product.map((item) => (
        <ProductItem product={item} onAdd={onAdd} className={'item'} />
      ))}
    </div>
  );
}
