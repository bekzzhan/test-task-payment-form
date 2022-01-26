import React from 'react';
import {List} from "antd";
import BasketCard from "../PaymentPage/BasketCard/BasketCard";
import {connect} from "react-redux";
import './ResultPage.css';

const ResultPage = ({purchases}) => {
  return (
    <div className='result-page-wrap'>
      <div className='result-page'>
        <h2 className='result-page-title'>Оплата проведена успешно</h2>
        <List
          bordered
          dataSource={purchases}
          renderItem={item => (
            <BasketCard purchase={item} key={item.id}/>
          )}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    purchases: state.purchases,
  }
}

export default connect(mapStateToProps, null)(ResultPage);