export default {
  common: {
    paymentRedirect: 'Pengalihan pembayaran',
    redirectingInSeconds: 'Mengalih hala dalam {{count}} saat...'
  },
  withdrawal: {
    initializing: 'Memulakan pengeluaran...',
    noRedirect: 'URL pengalihan tidak diterima',
    errorWithMessage: 'Ralat semasa memulakan pengeluaran. {{message}}. Sila hubungi sokongan.'
  },
  form: {
    selectCountry: 'Pilih negara',
    country: 'Negara',
    firstName: 'Nama pertama',
    lastName: 'Nama keluarga',
    dob: 'Tarikh lahir',
    email: 'Emel',
    phone: 'Telefon',
    postalCode: 'Poskod',
    stateProvince: 'Negeri/Provinsi',
    city: 'Bandar',
    address: 'Alamat',
    submit: 'Hantar',
    submitting: 'Menghantar...',
    phonePlaceholder: 'cth. 201112222',
    statePlaceholder: 'cth. CA, NY, JS',
    submitSuccess: 'Borang berjaya dihantar!',
    submitError: 'Ralat semasa menghantar borang. Cuba lagi.'
  },
  validation: {
    'country.required': 'Negara diperlukan',
    'first_name.required': 'Nama pertama diperlukan',
    'first_name.max': 'Nama pertama maksimum 25 aksara',
    'last_name.required': 'Nama keluarga diperlukan',
    'last_name.max': 'Nama keluarga maksimum 25 aksara',
    'dob.required': 'Tarikh lahir diperlukan',
    'dob.range': 'Masukkan tarikh yang sah antara 1900 dan hari ini',
    'email.required': 'Emel diperlukan',
    'email.max': 'Emel maksimum 50 aksara',
    'email.format': 'Masukkan alamat emel yang sah',
    'phone.required': 'Nombor telefon diperlukan',
    'phone.format': 'Masukkan nombor telefon yang sah (nombor sahaja, tanpa kod negara)',
    'zip.required': 'Poskod diperlukan',
    'zip.format': 'Poskod mesti alfanumerik dan maksimum 12 aksara',
    'state.format': 'Negeri/Provinsi mesti 2–3 huruf (format ISO)',
    'state.required_for_country': 'Negeri/Provinsi diperlukan untuk AS, Kanada dan Australia',
    'city.required': 'Bandar diperlukan',
    'city.max': 'Bandar maksimum 50 aksara',
    'address.required': 'Alamat diperlukan',
    'address.max': 'Alamat maksimum 100 aksara'
  }
}
