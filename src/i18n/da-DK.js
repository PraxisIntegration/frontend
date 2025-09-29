export default {
  common: {
    paymentRedirect: 'Betalingsomdirigering',
    redirectingInSeconds: 'Omdirigerer om {{count}} sekunder...'
  },
  withdrawal: {
    initializing: 'Initialiserer udbetaling...',
    noRedirect: 'Ingen omdirigerings-URL modtaget',
    errorWithMessage: 'Fejl ved start af udbetaling. {{message}}. Kontakt support.'
  },
  form: {
    selectCountry: 'Vælg land',
    country: 'Land',
    firstName: 'Fornavn',
    lastName: 'Efternavn',
    dob: 'Fødselsdato',
    email: 'E-mail',
    phone: 'Telefon',
    postalCode: 'Postnummer',
    stateProvince: 'Stat/Provins',
    city: 'By',
    address: 'Adresse',
    submit: 'Send',
    submitting: 'Sender...',
    phonePlaceholder: 'fx 201112222',
    statePlaceholder: 'fx CA, NY, JS',
    submitSuccess: 'Formular sendt!',
    submitError: 'Fejl ved afsendelse. Prøv igen.'
  },
  validation: {
    'country.required': 'Land er påkrævet',
    'first_name.required': 'Fornavn er påkrævet',
    'first_name.max': 'Fornavn må højst være 25 tegn',
    'last_name.required': 'Efternavn er påkrævet',
    'last_name.max': 'Efternavn må højst være 25 tegn',
    'dob.required': 'Fødselsdato er påkrævet',
    'dob.range': 'Angiv en gyldig dato mellem 1900 og i dag',
    'email.required': 'E-mail er påkrævet',
    'email.max': 'E-mail må højst være 50 tegn',
    'email.format': 'Angiv en gyldig e-mailadresse',
    'phone.required': 'Telefonnummer er påkrævet',
    'phone.format': 'Angiv et gyldigt telefonnummer (kun tal, med landekode)',
    'zip.required': 'Postnummer er påkrævet',
    'zip.format': 'Postnummer skal være alfanumerisk og højst 12 tegn',
    'state.format': 'Stat/Provins skal have 2–3 bogstaver (ISO)',
    'state.required_for_country': 'Stat/Provins er påkrævet for US, CA og AU',
    'city.required': 'By er påkrævet',
    'city.max': 'By må højst være 50 tegn',
    'address.required': 'Adresse er påkrævet',
    'address.max': 'Adresse må højst være 100 tegn'
  }
}
