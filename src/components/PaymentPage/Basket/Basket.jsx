import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {List} from 'antd';
import BasketCard from "../BasketCard/BasketCard";
import './Basket.css'
import {addBasketSum} from "../../../redux/actions";

const Basket = ({purchases, basket, addBasketSum}) => {
  useEffect(() => {
    const sum = purchases.map((item) => item.price).reduce((prev, curr) => prev + curr);
    const quantity = purchases.map((item) => item.quantity).reduce((prev, curr) => prev + curr)
    addBasketSum(quantity, sum);
  }, [purchases])
  return (
    <div className='basket'>
      <List
        header={<div className='basket-header'>Корзина</div>}
        footer={
          <div className='basket-footer'>
            <span>Количество товаров: {basket.quantity} шт</span>
            <span>Сумма: {basket.sum} тг</span>
          </div>
        }
        bordered
        dataSource={purchases}
        renderItem={item => (
          <BasketCard purchase={item} key={item.id}/>
        )}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    purchases: state.purchases,
    basket: state.basket,
  }
}

export default connect(mapStateToProps, {addBasketSum})(Basket);