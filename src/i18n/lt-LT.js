export default {
  common: {
    paymentRedirect: 'Mokėjimo nukreipimas',
    redirectingInSeconds: 'Nukreipiama po {{count}} sek....'
  },
  withdrawal: {
    initializing: 'Išėmimo inicijavimas...',
    noRedirect: 'Negautas nukreipimo URL',
    errorWithMessage: 'Klaida pradedant išėmimą. {{message}}. Susisiekite su palaikymu.'
  },
  form: {
    selectCountry: 'Pasirinkite šalį',
    country: 'Šalis',
    firstName: 'Vardas',
    lastName: 'Pavardė',
    dob: 'Gimimo data',
    email: 'El. paštas',
    phone: 'Telefonas',
    postalCode: 'Pašto kodas',
    stateProvince: 'Valstija/Provincija',
    city: 'Miestas',
    address: 'Adresas',
    submit: 'Pateikti',
    submitting: 'Pateikiama...',
    phonePlaceholder: 'pvz., 201112222',
    statePlaceholder: 'pvz., CA, NY, JS',
    submitSuccess: 'Forma sėkmingai pateikta!',
    submitError: 'Klaida pateikiant formą. Bandykite dar kartą.'
  },
  validation: {
    'country.required': 'Šalis yra privaloma',
    'first_name.required': 'Vardas yra privalomas',
    'first_name.max': 'Vardas turi būti ne ilgesnis kaip 25 simboliai',
    'last_name.required': 'Pavardė yra privaloma',
    'last_name.max': 'Pavardė turi būti ne ilgesnė kaip 25 simboliai',
    'dob.required': 'Gimimo data yra privaloma',
    'dob.range': 'Įveskite galiojančią datą nuo 1900 m. iki šiandienos',
    'email.required': 'El. paštas yra privalomas',
    'email.max': 'El. paštas turi būti ne ilgesnis kaip 50 simbolių',
    'email.format': 'Įveskite galiojantį el. pašto adresą',
    'phone.required': 'Telefono numeris yra privalomas',
    'phone.format': 'Įveskite galiojantį telefono numerį (tik skaičiai, su šalies kodu)',
    'zip.required': 'Pašto kodas yra privalomas',
    'zip.format': 'Pašto kodas turi būti raidinis-skaitmeninis ir iki 12 simbolių',
    'state.format': 'Valstija/Provincija turi būti 2–3 raidės (ISO formatas)',
    'state.required_for_country': 'Valstija/Provincija privaloma JAV, Kanadoje ir Australijoje',
    'city.required': 'Miestas yra privalomas',
    'city.max': 'Miestas turi būti ne ilgesnis kaip 50 simbolių',
    'address.required': 'Adresas yra privalomas',
    'address.max': 'Adresas turi būti ne ilgesnis kaip 100 simbolių'
  }
}
