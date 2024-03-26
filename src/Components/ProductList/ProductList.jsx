import React from 'react';
import './ProductList.css';
import ProductItem from '../ProductItem/ProductItem';
import { useTelegram } from '../../Hooks/useTelegram';

const product = [
  { id: '1', img: './1.jpg', title: 'Кресло', description: 'Кресла в стиле Loft', price: 1150000 },
  {
    id: '2',
    img: './2.jpg',
    title: 'Писменный стол',
    description: 'Писменные столы в стиле Loft',
    price: 1200000,
  },
  { id: '3', img: './3.jpg', title: 'Диван', description: 'Диваны в стиле Loft', price: 1800000 },
  {
    id: '4',
    img: './4.jpg',
    title: 'Кровать',
    description: 'Кровати в стиле Loft',
    price: 2500000,
  },
];

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
};
export default function ProductList() {
  const { tg } = useTelegram();
  const [addItems, setAddItems] = React.useState([]);
  // const onSendData = useCallback(() => {
  //   const data = { product: addItems, totalPrice: getTotalPrice(addItems) };

  //   fetch('http//localhost:8080', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   });
  // }, []);

  // React.useEffect(() => {
  //   tg.onEvent('mainButtonClicked', onSendData);
  //   return () => {
  //     tg.offEvent('mainButtonClicked', onSendData);
  //   };
  // }, [onSendData]);

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
