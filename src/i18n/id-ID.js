export default {
  common: {
    paymentRedirect: 'Pengalihan pembayaran',
    redirectingInSeconds: 'Mengalihkan dalam {{count}} detik...'
  },
  withdrawal: {
    initializing: 'Memulai penarikan...',
    noRedirect: 'URL pengalihan tidak diterima',
    errorWithMessage: 'Terjadi kesalahan saat memulai penarikan. {{message}}. Silakan hubungi dukungan.'
  },
  form: {
    selectCountry: 'Pilih negara',
    country: 'Negara',
    firstName: 'Nama depan',
    lastName: 'Nama belakang',
    dob: 'Tanggal lahir',
    email: 'Email',
    phone: 'Telepon',
    postalCode: 'Kode pos',
    stateProvince: 'Negara Bagian/Provinsi',
    city: 'Kota',
    address: 'Alamat',
    submit: 'Kirim',
    submitting: 'Mengirim...',
    phonePlaceholder: 'mis. 201112222',
    statePlaceholder: 'mis. CA, NY, JS',
    submitSuccess: 'Formulir berhasil dikirim!',
    submitError: 'Terjadi kesalahan saat mengirim formulir. Coba lagi.'
  },
  validation: {
    'country.required': 'Negara wajib diisi',
    'first_name.required': 'Nama depan wajib diisi',
    'first_name.max': 'Nama depan maksimal 25 karakter',
    'last_name.required': 'Nama belakang wajib diisi',
    'last_name.max': 'Nama belakang maksimal 25 karakter',
    'dob.required': 'Tanggal lahir wajib diisi',
    'dob.range': 'Masukkan tanggal yang valid antara tahun 1900 dan hari ini',
    'email.required': 'Email wajib diisi',
    'email.max': 'Email maksimal 50 karakter',
    'email.format': 'Masukkan alamat email yang valid',
    'phone.required': 'Nomor telepon wajib diisi',
    'phone.format': 'Masukkan nomor telepon yang valid (hanya angka, tanpa kode negara)',
    'zip.required': 'Kode pos wajib diisi',
    'zip.format': 'Kode pos harus alfanumerik dan maksimal 12 karakter',
    'state.format': 'Negara Bagian/Provinsi harus 2–3 huruf (format ISO)',
    'state.required_for_country': 'Negara Bagian/Provinsi wajib untuk US, CA, dan AU',
    'city.required': 'Kota wajib diisi',
    'city.max': 'Kota maksimal 50 karakter',
    'address.required': 'Alamat wajib diisi',
    'address.max': 'Alamat maksimal 100 karakter'
  }
}
