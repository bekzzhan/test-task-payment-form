import {PRODUCT_PAID} from "../actionTypes";

const initialState = [
  {
    id: 1,
    title: 'Пылесос Dyson V8 Absolute (SV10)',
    imageSrc: 'https://evrika.com/storage/products/images/default/kfw33rfWI3UBvYO5MMtrDLaumH74FEzr6LC1XvMG.jpeg.webp?v=1619230262',
    price: 214990,
    quantity: 1,
    status: 'ожидает оплаты'
  },
  {
    id: 2,
    title: 'Смартфон Apple iPhone 13 256GB Blue',
    imageSrc: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/4/0/402639b7f5662ef0fdeb0e49526f6ea9a5c4357c_252954_1.jpg',
    price: 574990,
    quantity: 1,
    status: 'ожидает оплаты'
  }
]

const purchaseReducer = (state = initialState, action) => {
  switch(action.type){
    case PRODUCT_PAID:
      return state.map((item) => item.id === action.payload.id ? {...item, status: action.payload.status} : item);
    default: return state
  }
}

export default purchaseReducer;