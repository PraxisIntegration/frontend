export default {
  common: {
    paymentRedirect: 'Pag-redirect ng bayad',
    redirectingInSeconds: 'Nire-redirect sa loob ng {{count}} segundo...'
  },
  withdrawal: {
    initializing: 'Ini-initialize ang withdrawal...',
    noRedirect: 'Walang natanggap na redirect URL',
    errorWithMessage: 'Nagkaroon ng error sa pagsisimula ng withdrawal. {{message}}. Mangyaring makipag-ugnayan sa suporta.'
  },
  form: {
    selectCountry: 'Pumili ng bansa',
    country: 'Bansa',
    firstName: 'Pangalan',
    lastName: 'Apelyido',
    dob: 'Araw ng kapanganakan',
    email: 'Email',
    phone: 'Telepono',
    postalCode: 'Postal code',
    stateProvince: 'Estado/Probinsya',
    city: 'Lungsod',
    address: 'Address',
    submit: 'Isumite',
    submitting: 'Isinusumite...',
    phonePlaceholder: 'hal. 201112222',
    statePlaceholder: 'hal. CA, NY, JS',
    submitSuccess: 'Matagumpay na naisumite ang form!',
    submitError: 'Nagkaroon ng error sa pagsusumite. Subukang muli.'
  },
  validation: {
    'country.required': 'Kinakailangan ang bansa',
    'first_name.required': 'Kinakailangan ang pangalan',
    'first_name.max': 'Hanggang 25 na karakter ang pangalan',
    'last_name.required': 'Kinakailangan ang apelyido',
    'last_name.max': 'Hanggang 25 na karakter ang apelyido',
    'dob.required': 'Kinakailangan ang araw ng kapanganakan',
    'dob.range': 'Maglagay ng wastong petsa mula 1900 hanggang ngayon',
    'email.required': 'Kinakailangan ang email',
    'email.max': 'Hanggang 50 na karakter ang email',
    'email.format': 'Maglagay ng wastong email address',
    'phone.required': 'Kinakailangan ang numero ng telepono',
    'phone.format': 'Maglagay ng wastong numero (mga numero lamang, may country code)',
    'zip.required': 'Kinakailangan ang postal code',
    'zip.format': 'Ang postal code ay alpanumeriko at hanggang 12 na karakter',
    'state.format': 'Ang Estado/Probinsya ay dapat 2–3 titik (ISO)',
    'state.required_for_country': 'Kinakailangan ang Estado/Probinsya para sa US, CA at AU',
    'city.required': 'Kinakailangan ang lungsod',
    'city.max': 'Hanggang 50 na karakter ang lungsod',
    'address.required': 'Kinakailangan ang address',
    'address.max': 'Hanggang 100 na karakter ang address'
  }
}
