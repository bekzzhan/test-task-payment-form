import * as Yup from 'yup';

const REG_EXP_NAME = /^[a-zA-Z]+\s[a-zA-Z]+$/;

const formSchema = Yup.object().shape({
  cardNo: Yup.string().length(16, 'Введите корректный номер карты').required('Это поле не может быть пустым!'),
  code: Yup.string().length(3, 'Введите корректный номер карты').required('Это поле не может быть пустым!'),
  name: Yup.string()
  .matches(REG_EXP_NAME, {message: 'Поле нужно заполнить в латинице', excludeEmptyString: false})
  .min(2, 'Не менее 2 символов')
  .required('Это поле не может быть пустым!'),
  expDate: Yup.string()
  .length(5, 'Выберите срок действия карты')
  .required('Выберите срок действия карты'),
});

export default formSchema;
