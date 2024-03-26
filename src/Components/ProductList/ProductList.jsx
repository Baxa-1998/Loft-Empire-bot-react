import React from 'react';
import './ProductList.css';
import ProductItem from '../ProductItem/ProductItem';
import { useTelegram } from '../../Hooks/useTelegram';

const product = [
  { id: '1', title: 'Кресло', description: 'Кресла в стиле Loft', price: 1150000 },
  { id: '2', title: 'Писменный стол', description: 'Писменные столы в стиле Loft', price: 1200000 },
  { id: '3', title: 'Диван', description: 'Диваны в стиле Loft', price: 1800000 },
];

const getTotalPrice = (item = []) => {
  return item.reduce((item, acc) => {
    return (acc += item.price);
  }, 0);
};
export default function ProductList() {
  const { tg } = useTelegram();
  const [addItems, setAddItems] = React.useState([]);
  const onAdd = (product) => {
    const alreadyAdded = addItems.find((item) => item.id === product.id);
    let newItems = [];
    if (alreadyAdded) {
      newItems = addItems.filter((item) => item.id !== product.id);
    } else {
      newItems = [...addItems, product];
    }
    setAddItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить ${getTotalPrice(newItems)}`,
      });
    }
  };

  return (
    <div className={'list'}>
      {product.map((item) => (
        <ProductItem product={item} onAdd={onAdd} className={'item'} />
      ))}
    </div>
  );
}
