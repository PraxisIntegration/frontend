export default {
  common: {
    paymentRedirect: 'กำลังเปลี่ยนเส้นทางการชำระเงิน',
    redirectingInSeconds: 'กำลังเปลี่ยนเส้นทางใน {{count}} วินาที...'
  },
  withdrawal: {
    initializing: 'กำลังเริ่มต้นการถอน...',
    noRedirect: 'ไม่ได้รับ URL สำหรับเปลี่ยนเส้นทาง',
    errorWithMessage: 'เกิดข้อผิดพลาดในการเริ่มถอนเงิน {{message}} กรุณาติดต่อฝ่ายสนับสนุน'
  },
  form: {
    selectCountry: 'เลือกประเทศ',
    country: 'ประเทศ',
    firstName: 'ชื่อจริง',
    lastName: 'นามสกุล',
    dob: 'วันเกิด',
    email: 'อีเมล',
    phone: 'โทรศัพท์',
    postalCode: 'รหัสไปรษณีย์',
    stateProvince: 'รัฐ/จังหวัด',
    city: 'เมือง',
    address: 'ที่อยู่',
    submit: 'ส่ง',
    submitting: 'กำลังส่ง...',
    phonePlaceholder: 'เช่น 201112222',
    statePlaceholder: 'เช่น CA, NY, JS',
    submitSuccess: 'ส่งแบบฟอร์มสำเร็จ!',
    submitError: 'เกิดข้อผิดพลาดในการส่งแบบฟอร์ม กรุณาลองใหม่'
  },
  validation: {
    'country.required': 'ต้องระบุประเทศ',
    'first_name.required': 'ต้องระบุชื่อจริง',
    'first_name.max': 'ชื่อจริงต้องไม่เกิน 25 อักขระ',
    'last_name.required': 'ต้องระบุนามสกุล',
    'last_name.max': 'นามสกุลต้องไม่เกิน 25 อักขระ',
    'dob.required': 'ต้องระบุวันเกิด',
    'dob.range': 'กรุณากรอกวันที่ที่ถูกต้องระหว่างปี 1900 ถึงวันนี้',
    'email.required': 'ต้องระบุอีเมล',
    'email.max': 'อีเมลต้องไม่เกิน 50 อักขระ',
    'email.format': 'กรุณากรอกอีเมลที่ถูกต้อง',
    'phone.required': 'ต้องระบุหมายเลขโทรศัพท์',
    'phone.format': 'กรุณากรอกหมายเลขโทรศัพท์ที่ถูกต้อง (ตัวเลขเท่านั้น พร้อมรหัสประเทศ)',
    'zip.required': 'ต้องระบุรหัสไปรษณีย์',
    'zip.format': 'รหัสไปรษณีย์ต้องเป็นตัวอักษรหรือตัวเลข และไม่เกิน 12 ตัว',
    'state.format': 'รัฐ/จังหวัดต้องมี 2–3 ตัวอักษร (รูปแบบ ISO)',
    'state.required_for_country': 'รัฐ/จังหวัดจำเป็นสำหรับ US, CA และ AU',
    'city.required': 'ต้องระบุเมือง',
    'city.max': 'เมืองต้องไม่เกิน 50 อักขระ',
    'address.required': 'ต้องระบุที่อยู่',
    'address.max': 'ที่อยู่ต้องไม่เกิน 100 อักขระ'
  }
}
