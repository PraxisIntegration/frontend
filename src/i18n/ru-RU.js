export default {
  common: {
    paymentRedirect: 'Переход к оплате',
    redirectingInSeconds: 'Перенаправление через {{count}} сек.'
  },
  withdrawal: {
    initializing: 'Инициализация вывода средств...',
    noRedirect: 'Не получен URL для редиректа',
    errorWithMessage: 'Ошибка инициализации вывода. {{message}}. Свяжитесь с поддержкой.'
  },
  form: {
    selectCountry: 'Выберите страну',
    country: 'Страна',
    firstName: 'Имя',
    lastName: 'Фамилия',
    dob: 'Дата рождения',
    email: 'Email',
    phone: 'Телефон',
    postalCode: 'Почтовый индекс',
    stateProvince: 'Штат/Провинция',
    city: 'Город',
    address: 'Адрес',
    submit: 'Отправить',
    submitting: 'Отправка...',
    phonePlaceholder: 'например, 201112222',
    statePlaceholder: 'например, CA, NY, JS',
    submitSuccess: 'Форма успешно отправлена!',
    submitError: 'Ошибка отправки формы. Повторите попытку.'
  },
  validation: {
    'country.required': 'Укажите страну',
    'first_name.required': 'Укажите имя',
    'first_name.max': 'Имя не длиннее 25 символов',
    'last_name.required': 'Укажите фамилию',
    'last_name.max': 'Фамилия не длиннее 25 символов',
    'dob.required': 'Укажите дату рождения',
    'dob.range': 'Введите дату с 1900 года по сегодня',
    'email.required': 'Укажите email',
    'email.max': 'Email не длиннее 50 символов',
    'email.format': 'Введите корректный адрес email',
    'phone.required': 'Укажите номер телефона',
    'phone.format': 'Введите корректный номер (только цифры, с кодом страны)',
    'zip.required': 'Укажите почтовый индекс',
    'zip.format': 'Индекс — до 12 символов, буквы/цифры',
    'state.format': 'Штат/провинция — 2–3 буквы (ISO)',
    'state.required_for_country': 'Для США, Канады и Австралии обязательно поле Штат/Провинция',
    'city.required': 'Укажите город',
    'city.max': 'Город — не длиннее 50 символов',
    'address.required': 'Укажите адрес',
    'address.max': 'Адрес — не длиннее 100 символов'
  }
}

