export default {
  common: {
    paymentRedirect: '결제 리디렉션',
    redirectingInSeconds: '{{count}}초 후에 이동합니다...'
  },
  withdrawal: {
    initializing: '출금 초기화 중...',
    noRedirect: '리디렉션 URL을 받지 못했습니다',
    errorWithMessage: '출금 시작 중 오류가 발생했습니다. {{message}}. 고객 지원에 문의하세요.'
  },
  form: {
    selectCountry: '국가 선택',
    country: '국가',
    firstName: '이름',
    lastName: '성',
    dob: '생년월일',
    email: '이메일',
    phone: '전화번호',
    postalCode: '우편번호',
    stateProvince: '주/도',
    city: '도시',
    address: '주소',
    submit: '제출',
    submitting: '제출 중...',
    phonePlaceholder: '예: 201112222',
    statePlaceholder: '예: CA, NY, JS',
    submitSuccess: '폼이 성공적으로 제출되었습니다!',
    submitError: '폼 제출 중 오류가 발생했습니다. 다시 시도하세요.'
  },
  validation: {
    'country.required': '국가는 필수입니다',
    'first_name.required': '이름은 필수입니다',
    'first_name.max': '이름은 최대 25자까지 가능합니다',
    'last_name.required': '성은 필수입니다',
    'last_name.max': '성은 최대 25자까지 가능합니다',
    'dob.required': '생년월일은 필수입니다',
    'dob.range': '1900년부터 오늘까지의 유효한 날짜를 입력하세요',
    'email.required': '이메일은 필수입니다',
    'email.max': '이메일은 최대 50자까지 가능합니다',
    'email.format': '유효한 이메일 주소를 입력하세요',
    'phone.required': '전화번호는 필수입니다',
    'phone.format': '유효한 전화번호를 입력하세요(숫자만, 국가 코드 포함)',
    'zip.required': '우편번호는 필수입니다',
    'zip.format': '우편번호는 영숫자이고 최대 12자여야 합니다',
    'state.format': '주/도는 2–3자(ISO 형식)여야 합니다',
    'state.required_for_country': '미국, 캐나다, 호주에서는 주/도가 필요합니다',
    'city.required': '도시는 필수입니다',
    'city.max': '도시는 최대 50자까지 가능합니다',
    'address.required': '주소는 필수입니다',
    'address.max': '주소는 최대 100자까지 가능합니다'
  }
}
