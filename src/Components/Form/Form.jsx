import React from 'react';
import './Form.css';
import { useTelegram } from '../../Hooks/useTelegram';

export default function Form() {
  const [number, setNumber] = React.useState('+998');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [city, setCity] = React.useState('');
  const { tg } = useTelegram();
  React.useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить данные',
    });
  }, []);

  React.useEffect(() => {
    if (!number || !city) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [number, name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const onChangeCity = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <h3>Введите ваше данные</h3>
      <input
        className={'input'}
        onChange={onChangeName}
        type="text"
        placeholder="Имя"
        value={name}
      />
      <input
        className={'input'}
        onChange={onChangeEmail}
        type="text"
        placeholder="почта"
        value={email}
      />
      <input
        className={'input'}
        onChange={onChangeNumber}
        type="text"
        placeholder="номер"
        value={number}
      />
      <select value={city} onChange={onChangeCity} className={'select'} name="" id="">
        <option value="tashkent">Ташкент</option>
        <option value="samarkand">Самарканд</option>
        <option value="navoi">Наваи</option>
        <option value="andijon">Андижан</option>
        <option value="qarshi">Карши</option>
      </select>
    </div>
  );
}
