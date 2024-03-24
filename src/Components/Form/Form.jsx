import React from 'react';
import './Form.css';

export default function Form() {
  const [number, setNumber] = React.useState('+998');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <div>
      <h3>Введите ваше данные</h3>
      <input className={'input'} type="text" placeholder="Имя" value={name} />
      <input className={'input'} type="text" placeholder="почта" value={email} />
      <input className={'input'} type="text" placeholder="номер" value={number} />
      <select className={'select'} name="" id="">
        <option value="tashkent">Ташкент</option>
        <option value="samarkand">Самарканд</option>
        <option value="navoi">Наваи</option>
        <option value="andijon">Андижан</option>
        <option value="qarshi">Карши</option>
      </select>
    </div>
  );
}
