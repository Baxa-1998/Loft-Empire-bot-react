import React from 'react';
import Button from '../Button/Button';
import './Header.css'
import { useTelegram } from '../../Hooks/useTelegram';

export default function Header() {
  const { onClose, user} = useTelegram()
   return (
    <div className={'header'}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={'username'}>{user?.username}</span>
    </div>
  );
}
