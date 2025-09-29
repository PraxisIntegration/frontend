export default {
  common: {
    paymentRedirect: 'Viderekobling for betaling',
    redirectingInSeconds: 'Viderekoblar om {{count}} sekund...'
  },
  withdrawal: {
    initializing: 'Initierer uttak...',
    noRedirect: 'Mottok ikkje URL for viderekobling',
    errorWithMessage: 'Feil ved start av uttak. {{message}}. Kontakt støtte.'
  },
  form: {
    selectCountry: 'Vel land',
    country: 'Land',
    firstName: 'Fornamn',
    lastName: 'Etternamn',
    dob: 'Fødselsdato',
    email: 'E-post',
    phone: 'Telefon',
    postalCode: 'Postnummer',
    stateProvince: 'Stat/Provins',
    city: 'By',
    address: 'Adresse',
    submit: 'Send',
    submitting: 'Sender...',
    phonePlaceholder: 't.d. 201112222',
    statePlaceholder: 't.d. CA, NY, JS',
    submitSuccess: 'Skjema sendt!',
    submitError: 'Feil ved innsending. Prøv igjen.'
  },
  validation: {
    'country.required': 'Land er påkravd',
    'first_name.required': 'Fornamn er påkravd',
    'first_name.max': 'Fornamn kan ha maks 25 teikn',
    'last_name.required': 'Etternamn er påkravd',
    'last_name.max': 'Etternamn kan ha maks 25 teikn',
    'dob.required': 'Fødselsdato er påkravd',
    'dob.range': 'Oppgi ein gyldig dato mellom 1900 og i dag',
    'email.required': 'E-post er påkravd',
    'email.max': 'E-post kan ha maks 50 teikn',
    'email.format': 'Oppgi ei gyldig e-postadresse',
    'phone.required': 'Telefonnummer er påkravd',
    'phone.format': 'Oppgi eit gyldig telefonnummer (berre siffer, med landskode)',
    'zip.required': 'Postnummer er påkravd',
    'zip.format': 'Postnummer må vere alfanumerisk og maks 12 teikn',
    'state.format': 'Stat/Provins må ha 2–3 bokstavar (ISO)',
    'state.required_for_country': 'Stat/Provins er påkravd for USA, Canada og Australia',
    'city.required': 'By er påkravd',
    'city.max': 'By kan ha maks 50 teikn',
    'address.required': 'Adresse er påkravd',
    'address.max': 'Adresse kan ha maks 100 teikn'
  }
}
