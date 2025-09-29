export default {
  common: {
    paymentRedirect: '付款重新導向',
    redirectingInSeconds: '{{count}} 秒後跳轉...'
  },
  withdrawal: {
    initializing: '正在初始化提領...',
    noRedirect: '未收到重新導向連結',
    errorWithMessage: '啟動提領時發生錯誤。{{message}}。請聯絡支援。'
  },
  form: {
    selectCountry: '選擇國家',
    country: '國家',
    firstName: '名字',
    lastName: '姓氏',
    dob: '出生日期',
    email: '電子郵件',
    phone: '電話',
    postalCode: '郵遞區號',
    stateProvince: '州/省',
    city: '城市',
    address: '地址',
    submit: '提交',
    submitting: '提交中...',
    phonePlaceholder: '例如：201112222',
    statePlaceholder: '例如：CA, NY, JS',
    submitSuccess: '表單提交成功！',
    submitError: '提交表單時發生錯誤。請再試一次。'
  },
  validation: {
    'country.required': '國家為必填',
    'first_name.required': '名字為必填',
    'first_name.max': '名字最多 25 個字元',
    'last_name.required': '姓氏為必填',
    'last_name.max': '姓氏最多 25 個字元',
    'dob.required': '出生日期為必填',
    'dob.range': '請輸入 1900 年至今日之間的有效日期',
    'email.required': '電子郵件為必填',
    'email.max': '電子郵件最多 50 個字元',
    'email.format': '請輸入有效的電子郵件地址',
    'phone.required': '電話號碼為必填',
    'phone.format': '請輸入有效的電話號碼（僅數字，含國碼）',
    'zip.required': '郵遞區號為必填',
    'zip.format': '郵遞區號必須為英數字且不超過 12 個字元',
    'state.format': '州/省需為 2–3 個字母（ISO 格式）',
    'state.required_for_country': '美國、加拿大與澳洲需填寫州/省',
    'city.required': '城市為必填',
    'city.max': '城市名稱最多 50 個字元',
    'address.required': '地址為必填',
    'address.max': '地址最多 100 個字元'
  }
}
