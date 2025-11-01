export default {
  common: {
    paymentRedirect: '支付重定向',
    redirectingInSeconds: '{{count}} 秒后跳转...'
  },
  withdrawal: {
    initializing: '正在初始化提现...',
    noRedirect: '未收到重定向链接',
    errorWithMessage: '发起提现时出错。{{message}}。请联系支持。'
  },
  form: {
    selectCountry: '选择国家',
    country: '国家',
    firstName: '名字',
    lastName: '姓氏',
    dob: '出生日期',
    email: '邮箱',
    phone: '电话',
    postalCode: '邮政编码',
    stateProvince: '州/省',
    city: '城市',
    address: '地址',
    submit: '提交',
    submitting: '提交中...',
    phonePlaceholder: '例如：201112222',
    statePlaceholder: '例如：CA, NY, JS',
    submitSuccess: '表单提交成功！',
    submitError: '提交表单出错。请重试。'
  },
  validation: {
    'country.required': '国家为必填项',
    'first_name.required': '名字为必填项',
    'first_name.max': '名字最多 25 个字符',
    'last_name.required': '姓氏为必填项',
    'last_name.max': '姓氏最多 25 个字符',
    'dob.required': '出生日期为必填项',
    'dob.range': '请输入 1900 年至今日之间的有效日期',
    'email.required': '邮箱为必填项',
    'email.max': '邮箱最多 50 个字符',
    'email.format': '请输入有效的邮箱地址',
    'phone.required': '电话号码为必填项',
    'phone.format': '请输入有效的电话号码（仅数字，不含国家区号）',
    'zip.required': '邮编为必填项',
    'zip.format': '邮编必须是字母或数字，且不超过 12 个字符',
    'state.format': '州/省需为 2–3 个字母（ISO 格式）',
    'state.required_for_country': '美国、加拿大和澳大利亚需填写州/省',
    'city.required': '城市为必填项',
    'city.max': '城市名称不超过 50 个字符',
    'address.required': '地址为必填项',
    'address.max': '地址不超过 100 个字符'
  }
}
