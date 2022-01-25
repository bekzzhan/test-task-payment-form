import React from 'react';
import { Card, Image } from 'antd';
import './BasketCard.css'

const BasketCard = ({purchase}) => {
  const {title, price, status, quantity, imageSrc} = purchase;
  return (
    <Card size="small" onClick={() => console.log(imageSrc)}>
      <div className="card-image">
        <Image
          width={100}
          src={imageSrc}/>
      </div>
      <div className="card-info">
        <h4>{title}</h4>
        <span>Цена: {price} тг</span>
        <span>Количество: {quantity}</span>
        <span>Статус: {status}</span>
      </div>
    </Card>
  );
};

export default BasketCard;