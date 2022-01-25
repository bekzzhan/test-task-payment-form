import React from 'react';
import {connect} from "react-redux";
import {List} from 'antd';
import BasketCard from "../BasketCard/BasketCard";
import './Basket.css'

const Basket = ({purchases}) => {
  return (
    <div className='basket'>
      <List
        header={<div>Корзина</div>}
        footer={<div>Количество товаров: {purchases.length}</div>}
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
  }
}

export default connect(mapStateToProps, null)(Basket);