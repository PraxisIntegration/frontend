export default {
  common: {
    paymentRedirect: 'Fizetési átirányítás',
    redirectingInSeconds: 'Átirányítás {{count}} másodperc múlva...'
  },
  withdrawal: {
    initializing: 'Kifizetés inicializálása...',
    noRedirect: 'Nem érkezett átirányítási URL',
    errorWithMessage: 'Hiba a kifizetés indításakor. {{message}}. Kérjük, lépjen kapcsolatba a támogatással.'
  },
  form: {
    selectCountry: 'Ország kiválasztása',
    country: 'Ország',
    firstName: 'Keresztnév',
    lastName: 'Vezetéknév',
    dob: 'Születési dátum',
    email: 'E-mail',
    phone: 'Telefon',
    postalCode: 'Irányítószám',
    stateProvince: 'Állam/Provincia',
    city: 'Város',
    address: 'Cím',
    submit: 'Küldés',
    submitting: 'Küldés folyamatban...',
    phonePlaceholder: 'pl. 201112222',
    statePlaceholder: 'pl. CA, NY, JS',
    submitSuccess: 'Űrlap sikeresen elküldve!',
    submitError: 'Hiba az űrlap küldésekor. Próbálja újra.'
  },
  validation: {
    'country.required': 'Az ország megadása kötelező',
    'first_name.required': 'A keresztnév megadása kötelező',
    'first_name.max': 'A keresztnév legfeljebb 25 karakter lehet',
    'last_name.required': 'A vezetéknév megadása kötelező',
    'last_name.max': 'A vezetéknév legfeljebb 25 karakter lehet',
    'dob.required': 'A születési dátum megadása kötelező',
    'dob.range': 'Adjon meg érvényes dátumot 1900 és a mai nap között',
    'email.required': 'Az e-mail megadása kötelező',
    'email.max': 'Az e-mail legfeljebb 50 karakter lehet',
    'email.format': 'Adjon meg érvényes e-mail címet',
    'phone.required': 'A telefonszám megadása kötelező',
    'phone.format': 'Adjon meg érvényes telefonszámot (csak számok, országkód nélkül)',
    'zip.required': 'Az irányítószám megadása kötelező',
    'zip.format': 'Az irányítószám alfanumerikus, legfeljebb 12 karakter',
    'state.format': 'Az állam/provincia 2–3 betűs (ISO formátum)',
    'state.required_for_country': 'Állam/Provincia kötelező az USA, Kanada és Ausztrália esetén',
    'city.required': 'A város megadása kötelező',
    'city.max': 'A város legfeljebb 50 karakter lehet',
    'address.required': 'A cím megadása kötelező',
    'address.max': 'A cím legfeljebb 100 karakter lehet'
  }
}
