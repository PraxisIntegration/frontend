export default {
  common: {
    paymentRedirect: 'Makse ümbersuunamine',
    redirectingInSeconds: 'Ümbersuunamine {{count}} sekundi pärast...'
  },
  withdrawal: {
    initializing: 'Väljamakse algatamine...',
    noRedirect: 'Ümbersuunamise URL-i ei saadud',
    errorWithMessage: 'Tõrge väljamakse alustamisel. {{message}}. Võtke ühendust toega.'
  },
  form: {
    selectCountry: 'Vali riik',
    country: 'Riik',
    firstName: 'Eesnimi',
    lastName: 'Perekonnanimi',
    dob: 'Sünnikuupäev',
    email: 'E-post',
    phone: 'Telefon',
    postalCode: 'Postiindeks',
    stateProvince: 'Osariik/Provints',
    city: 'Linn',
    address: 'Aadress',
    submit: 'Saada',
    submitting: 'Saatmine...',
    phonePlaceholder: 'nt 201112222',
    statePlaceholder: 'nt CA, NY, JS',
    submitSuccess: 'Vorm on edukalt saadetud!',
    submitError: 'Vormi saatmisel tekkis viga. Proovige uuesti.'
  },
  validation: {
    'country.required': 'Riik on kohustuslik',
    'first_name.required': 'Eesnimi on kohustuslik',
    'first_name.max': 'Eesnimi võib olla kuni 25 märki',
    'last_name.required': 'Perekonnanimi on kohustuslik',
    'last_name.max': 'Perekonnanimi võib olla kuni 25 märki',
    'dob.required': 'Sünnikuupäev on kohustuslik',
    'dob.range': 'Sisestage kehtiv kuupäev vahemikus 1900 kuni täna',
    'email.required': 'E-post on kohustuslik',
    'email.max': 'E-post võib olla kuni 50 märki',
    'email.format': 'Sisestage kehtiv e-posti aadress',
    'phone.required': 'Telefoninumber on kohustuslik',
    'phone.format': 'Sisestage kehtiv telefoninumber (ainult numbrid, ilma riigikoodita)',
    'zip.required': 'Postiindeks on kohustuslik',
    'zip.format': 'Postiindeks peab olema tähtnumbriline ja kuni 12 märki',
    'state.format': 'Osariik/Provints peab olema 2–3 tähte (ISO formaat)',
    'state.required_for_country': 'Osariik/Provints on nõutav USA-s, Kanadas ja Austraalias',
    'city.required': 'Linn on kohustuslik',
    'city.max': 'Linn võib olla kuni 50 märki',
    'address.required': 'Aadress on kohustuslik',
    'address.max': 'Aadress võib olla kuni 100 märki'
  }
}
