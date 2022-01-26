import React from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import {changePurchaseStatus, makePayment} from '../../../redux/actions';
import formSchema from "./formSchema";
import { Form, Input, DatePicker, Button} from 'antd';
import moment from "moment";
import './PaymentForm.css'
import {useNavigate} from "react-router-dom";

const initialValues = {
  cardNo: '',
  name: '',
  expDate: '',
  code: '',
};

const PaymentForm = ({basket, purchases, makePayment, changePurchaseStatus}) => {
  const navigate = useNavigate();
  
  const onSubmit = (values) => {
    makePayment({...values, amount: basket.sum});
    purchases.forEach(({id}) => changePurchaseStatus(id, 'оплата принята'))
    navigate('/result');
  };
  
  const {
    errors,
    values,
    touched,
    dirty,
    isValid,
    setFieldValue,
    setFieldTouched,
    handleSubmit,
    handleBlur,
    handleChange,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: formSchema,
    validateOnBlur: true,
  });
  
  return (
    <div className='payment-form-wrap'>
      <Form onSubmitCapture={handleSubmit}>
        <div className="payment-form-input input-cardNo">
          <Form.Item
            label="Номер карты"
            validateStatus={touched.cardNo && errors.cardNo ? 'error' : null}
            help={!!touched.cardNo && !!errors.cardNo && errors.cardNo}>
            <Input
              type='number'
              id='cardNo'
              name='cardNo'
              onChange={(e) => {
                if (e.target.value.length > 16) return;
                handleChange(e);
              }}
              onBlur={handleBlur}
              value={values.cardNo}/>
          </Form.Item>
        </div>
        <div className="payment-form-input-area">
          <div className='payment-form-input'>
            <Form.Item
              label="CVV"
              validateStatus={touched.code && errors.code ? 'error' : null}
              help={!!touched.code && !!errors.code && errors.code}>
              <Input
                type='number'
                id='code'
                name='code'
                onChange={(e) => {
                  if (e.target.value.length > 3) return;
                  handleChange(e);
                }}
                onBlur={handleBlur}
                value={values.code}/>
            </Form.Item>
          </div>
          <div className='payment-form-input'>
            <Form.Item
              label="Срок действия"
              validateStatus={touched.expDate && errors.expDate ? 'error' : null}
              help={!!touched.expDate && !!errors.expDate && errors.expDate}>
              <DatePicker
                picker='month'
                format='MM-YY'
                name='expDate'
                placeholder='ММ-ГГ'
                disabledDate={(current) => current && current < moment().endOf('day')}
                onChange={(date) => {
                  setFieldValue('expDate', moment(date).format('MM-YY'));
                }}
                // onClick={() => setFieldTouched('expDate', true)}
                onBlur={(e) => {
                  setFieldTouched('expDate', true);
                  handleBlur(e);
                }}
                value={!!values.expDate && moment(values.expDate, 'MM-YY')}/>
            </Form.Item>
          </div>
        </div>
        <div className='payment-form-input input-name'>
          <Form.Item
            label="Имя владельца"
            validateStatus={touched.name && errors.name ? 'error' : null}
            help={!!touched.name && !!errors.name && errors.name}>
            <Input
              type='text'
              id='name'
              name='name'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}/>
          </Form.Item>
        </div>
  
        <div className="payment-form-button-area">
          <Button
            type="primary"
            htmlType="submit"
            disabled={!(isValid && dirty)}>
            Оплатить
          </Button>
        </div>
      </Form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    purchases: state.purchases,
    basket: state.basket,
  }
}


export default connect(mapStateToProps, {makePayment, changePurchaseStatus})(PaymentForm);