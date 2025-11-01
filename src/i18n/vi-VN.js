export default {
  common: {
    paymentRedirect: 'Chuyển hướng thanh toán',
    redirectingInSeconds: 'Sẽ chuyển hướng sau {{count}} giây...'
  },
  withdrawal: {
    initializing: 'Đang khởi tạo rút tiền...',
    noRedirect: 'Không nhận được URL chuyển hướng',
    errorWithMessage: 'Lỗi khi bắt đầu rút tiền. {{message}}. Vui lòng liên hệ hỗ trợ.'
  },
  form: {
    selectCountry: 'Chọn quốc gia',
    country: 'Quốc gia',
    firstName: 'Tên',
    lastName: 'Họ',
    dob: 'Ngày sinh',
    email: 'Email',
    phone: 'Điện thoại',
    postalCode: 'Mã bưu chính',
    stateProvince: 'Bang/Tỉnh',
    city: 'Thành phố',
    address: 'Địa chỉ',
    submit: 'Gửi',
    submitting: 'Đang gửi...',
    phonePlaceholder: 'vd. 201112222',
    statePlaceholder: 'vd. CA, NY, JS',
    submitSuccess: 'Gửi biểu mẫu thành công!',
    submitError: 'Có lỗi khi gửi biểu mẫu. Vui lòng thử lại.'
  },
  validation: {
    'country.required': 'Quốc gia là bắt buộc',
    'first_name.required': 'Tên là bắt buộc',
    'first_name.max': 'Tên tối đa 25 ký tự',
    'last_name.required': 'Họ là bắt buộc',
    'last_name.max': 'Họ tối đa 25 ký tự',
    'dob.required': 'Ngày sinh là bắt buộc',
    'dob.range': 'Nhập ngày hợp lệ từ năm 1900 đến hôm nay',
    'email.required': 'Email là bắt buộc',
    'email.max': 'Email tối đa 50 ký tự',
    'email.format': 'Nhập địa chỉ email hợp lệ',
    'phone.required': 'Số điện thoại là bắt buộc',
    'phone.format': 'Nhập số điện thoại hợp lệ (chỉ số, không có mã quốc gia)',
    'zip.required': 'Mã bưu chính là bắt buộc',
    'zip.format': 'Mã bưu chính phải là chữ và số, tối đa 12 ký tự',
    'state.format': 'Bang/Tỉnh phải có 2–3 chữ cái (định dạng ISO)',
    'state.required_for_country': 'Bang/Tỉnh bắt buộc với US, CA và AU',
    'city.required': 'Thành phố là bắt buộc',
    'city.max': 'Thành phố tối đa 50 ký tự',
    'address.required': 'Địa chỉ là bắt buộc',
    'address.max': 'Địa chỉ tối đa 100 ký tự'
  }
}
