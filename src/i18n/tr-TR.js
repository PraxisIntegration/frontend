export default {
  common: {
    paymentRedirect: 'Ödeme yönlendirmesi',
    redirectingInSeconds: '{{count}} saniye içinde yönlendiriliyor...'
  },
  withdrawal: {
    initializing: 'Para çekme başlatılıyor...',
    noRedirect: 'Yönlendirme URL\'si alınmadı',
    errorWithMessage: 'Para çekme başlatılırken hata oluştu. {{message}}. Lütfen destek ile iletişime geçin.'
  },
  form: {
    selectCountry: 'Ülke seçin',
    country: 'Ülke',
    firstName: 'Ad',
    lastName: 'Soyad',
    dob: 'Doğum tarihi',
    email: 'E-posta',
    phone: 'Telefon',
    postalCode: 'Posta kodu',
    stateProvince: 'Eyalet/İl',
    city: 'Şehir',
    address: 'Adres',
    submit: 'Gönder',
    submitting: 'Gönderiliyor...',
    phonePlaceholder: 'örn. 201112222',
    statePlaceholder: 'örn. CA, NY, JS',
    submitSuccess: 'Form başarıyla gönderildi!',
    submitError: 'Form gönderilirken hata oluştu. Lütfen tekrar deneyin.'
  },
  validation: {
    'country.required': 'Ülke zorunludur',
    'first_name.required': 'Ad zorunludur',
    'first_name.max': 'Ad en fazla 25 karakter olabilir',
    'last_name.required': 'Soyad zorunludur',
    'last_name.max': 'Soyad en fazla 25 karakter olabilir',
    'dob.required': 'Doğum tarihi zorunludur',
    'dob.range': '1900 ile bugün arasında geçerli bir tarih girin',
    'email.required': 'E-posta zorunludur',
    'email.max': 'E-posta en fazla 50 karakter olabilir',
    'email.format': 'Geçerli bir e-posta adresi girin',
    'phone.required': 'Telefon numarası zorunludur',
    'phone.format': 'Geçerli bir telefon numarası girin (yalnızca rakamlar, ülke kodu ile)',
    'zip.required': 'Posta kodu zorunludur',
    'zip.format': 'Posta kodu alfasayısal olmalı ve en fazla 12 karakter',
    'state.format': 'Eyalet/İl 2–3 harf olmalıdır (ISO formatı)',
    'state.required_for_country': 'US, CA ve AU için eyalet/il zorunludur',
    'city.required': 'Şehir zorunludur',
    'city.max': 'Şehir en fazla 50 karakter olabilir',
    'address.required': 'Adres zorunludur',
    'address.max': 'Adres en fazla 100 karakter olabilir'
  }
}
