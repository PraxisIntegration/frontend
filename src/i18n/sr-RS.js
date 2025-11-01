export default {
  common: {
    paymentRedirect: 'Preusmeravanje plaćanja',
    redirectingInSeconds: 'Preusmeravanje za {{count}} sekundi...'
  },
  withdrawal: {
    initializing: 'Inicijalizacija isplate...',
    noRedirect: 'URL za preusmeravanje nije primljen',
    errorWithMessage: 'Greška pri pokretanju isplate. {{message}}. Kontaktirajte podršku.'
  },
  form: {
    selectCountry: 'Izaberite zemlju',
    country: 'Zemlja',
    firstName: 'Ime',
    lastName: 'Prezime',
    dob: 'Datum rođenja',
    email: 'Email',
    phone: 'Telefon',
    postalCode: 'Poštanski broj',
    stateProvince: 'Država/Provincija',
    city: 'Grad',
    address: 'Adresa',
    submit: 'Pošalji',
    submitting: 'Slanje...',
    phonePlaceholder: 'npr. 201112222',
    statePlaceholder: 'npr. CA, NY, JS',
    submitSuccess: 'Forma je uspešno poslata!',
    submitError: 'Greška pri slanju forme. Pokušajte ponovo.'
  },
  validation: {
    'country.required': 'Zemlja je obavezna',
    'first_name.required': 'Ime je obavezno',
    'first_name.max': 'Ime može imati najviše 25 karaktera',
    'last_name.required': 'Prezime je obavezno',
    'last_name.max': 'Prezime može imati najviše 25 karaktera',
    'dob.required': 'Datum rođenja je obavezan',
    'dob.range': 'Unesite važeći datum između 1900. i danas',
    'email.required': 'Email je obavezan',
    'email.max': 'Email može imati najviše 50 karaktera',
    'email.format': 'Unesite važeću email adresu',
    'phone.required': 'Broj telefona je obavezan',
    'phone.format': 'Unesite važeći broj telefona (samo cifre, bez pozivnog broja)',
    'zip.required': 'Poštanski broj je obavezan',
    'zip.format': 'Poštanski broj mora biti alfanumerički i do 12 karaktera',
    'state.format': 'Država/Provincija mora imati 2–3 slova (ISO format)',
    'state.required_for_country': 'Država/Provincija je obavezna za SAD, Kanadu i Australiju',
    'city.required': 'Grad je obavezan',
    'city.max': 'Grad može imati najviše 50 karaktera',
    'address.required': 'Adresa je obavezna',
    'address.max': 'Adresa može imati najviše 100 karaktera'
  }
}
