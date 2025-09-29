export default {
  common: {
    paymentRedirect: 'Maksun uudelleenohjaus',
    redirectingInSeconds: 'Uudelleenohjataan {{count}} sekunnin kuluttua...'
  },
  withdrawal: {
    initializing: 'Noston alustus...',
    noRedirect: 'Uudelleenohjauksen URL-osoitetta ei vastaanotettu',
    errorWithMessage: 'Virhe noston käynnistyksessä. {{message}}. Ota yhteyttä tukeen.'
  },
  form: {
    selectCountry: 'Valitse maa',
    country: 'Maa',
    firstName: 'Etunimi',
    lastName: 'Sukunimi',
    dob: 'Syntymäaika',
    email: 'Sähköposti',
    phone: 'Puhelin',
    postalCode: 'Postinumero',
    stateProvince: 'Osavaltio/Provinsi',
    city: 'Kaupunki',
    address: 'Osoite',
    submit: 'Lähetä',
    submitting: 'Lähetetään...',
    phonePlaceholder: 'esim. 201112222',
    statePlaceholder: 'esim. CA, NY, JS',
    submitSuccess: 'Lomake lähetetty onnistuneesti!',
    submitError: 'Virhe lomakkeen lähetyksessä. Yritä uudelleen.'
  },
  validation: {
    'country.required': 'Maa on pakollinen',
    'first_name.required': 'Etunimi on pakollinen',
    'first_name.max': 'Etunimi saa olla enintään 25 merkkiä',
    'last_name.required': 'Sukunimi on pakollinen',
    'last_name.max': 'Sukunimi saa olla enintään 25 merkkiä',
    'dob.required': 'Syntymäaika on pakollinen',
    'dob.range': 'Anna kelvollinen päivämäärä vuosien 1900 ja tämän päivän väliltä',
    'email.required': 'Sähköposti on pakollinen',
    'email.max': 'Sähköposti saa olla enintään 50 merkkiä',
    'email.format': 'Anna kelvollinen sähköpostiosoite',
    'phone.required': 'Puhelinnumero on pakollinen',
    'phone.format': 'Anna kelvollinen puhelinnumero (vain numerot, maatunnuksella)',
    'zip.required': 'Postinumero on pakollinen',
    'zip.format': 'Postinumeron tulee olla aakkosnumeerinen ja enintään 12 merkkiä',
    'state.format': 'Osavaltio/Provinsi tulee olla 2–3 kirjainta (ISO)',
    'state.required_for_country': 'Osavaltio/Provinsi vaaditaan USA:ssa, Kanadassa ja Australiassa',
    'city.required': 'Kaupunki on pakollinen',
    'city.max': 'Kaupunki saa olla enintään 50 merkkiä',
    'address.required': 'Osoite on pakollinen',
    'address.max': 'Osoite saa olla enintään 100 merkkiä'
  }
}
