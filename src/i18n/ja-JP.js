export default {
  common: {
    paymentRedirect: '支払いリダイレクト',
    redirectingInSeconds: '{{count}} 秒後にリダイレクト...'
  },
  withdrawal: {
    initializing: '出金を初期化中...',
    noRedirect: 'リダイレクトURLが受信されませんでした',
    errorWithMessage: '出金の開始中にエラーが発生しました。{{message}}。サポートにお問い合わせください。'
  },
  form: {
    selectCountry: '国を選択',
    country: '国',
    firstName: '名',
    lastName: '姓',
    dob: '生年月日',
    email: 'メール',
    phone: '電話番号',
    postalCode: '郵便番号',
    stateProvince: '州/都道府県',
    city: '市区町村',
    address: '住所',
    submit: '送信',
    submitting: '送信中...',
    phonePlaceholder: '例: 201112222',
    statePlaceholder: '例: CA, NY, JS',
    submitSuccess: 'フォームが正常に送信されました！',
    submitError: 'フォーム送信中にエラーが発生しました。もう一度お試しください。'
  },
  validation: {
    'country.required': '国は必須です',
    'first_name.required': '名は必須です',
    'first_name.max': '名は25文字以内で入力してください',
    'last_name.required': '姓は必須です',
    'last_name.max': '姓は25文字以内で入力してください',
    'dob.required': '生年月日は必須です',
    'dob.range': '1900年から本日までの有効な日付を入力してください',
    'email.required': 'メールは必須です',
    'email.max': 'メールは50文字以内で入力してください',
    'email.format': '有効なメールアドレスを入力してください',
    'phone.required': '電話番号は必須です',
    'phone.format': '有効な電話番号を入力してください（数字のみ、国番号なし）',
    'zip.required': '郵便番号は必須です',
    'zip.format': '郵便番号は英数字で12文字以内で入力してください',
    'state.format': '州/都道府県は2〜3文字（ISO形式）で入力してください',
    'state.required_for_country': '米国、カナダ、オーストラリアでは州/都道府県が必須です',
    'city.required': '市区町村は必須です',
    'city.max': '市区町村は50文字以内で入力してください',
    'address.required': '住所は必須です',
    'address.max': '住所は100文字以内で入力してください'
  }
}
