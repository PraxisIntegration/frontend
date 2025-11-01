export default {
  common: {
    paymentRedirect: 'Presmerovanie platby',
    redirectingInSeconds: 'Presmerovanie o {{count}} sekúnd...'
  },
  withdrawal: {
    initializing: 'Inicializujem výber...',
    noRedirect: 'Nebolo prijaté URL na presmerovanie',
    errorWithMessage: 'Chyba pri spustení výberu. {{message}}. Kontaktujte podporu.'
  },
  form: {
    selectCountry: 'Vyberte krajinu',
    country: 'Krajina',
    firstName: 'Meno',
    lastName: 'Priezvisko',
    dob: 'Dátum narodenia',
    email: 'E-mail',
    phone: 'Telefón',
    postalCode: 'PSČ',
    stateProvince: 'Štát/Provincia',
    city: 'Mesto',
    address: 'Adresa',
    submit: 'Odoslať',
    submitting: 'Odosielam...',
    phonePlaceholder: 'napr. 201112222',
    statePlaceholder: 'napr. CA, NY, JS',
    submitSuccess: 'Formulár bol úspešne odoslaný!',
    submitError: 'Chyba pri odosielaní formulára. Skúste znova.'
  },
  validation: {
    'country.required': 'Krajina je povinná',
    'first_name.required': 'Meno je povinné',
    'first_name.max': 'Meno môže mať najviac 25 znakov',
    'last_name.required': 'Priezvisko je povinné',
    'last_name.max': 'Priezvisko môže mať najviac 25 znakov',
    'dob.required': 'Dátum narodenia je povinný',
    'dob.range': 'Zadajte platný dátum medzi rokom 1900 a dneškom',
    'email.required': 'E-mail je povinný',
    'email.max': 'E-mail môže mať najviac 50 znakov',
    'email.format': 'Zadajte platnú e-mailovú adresu',
    'phone.required': 'Telefónne číslo je povinné',
    'phone.format': 'Zadajte platné telefónne číslo (iba číslice, bez predvoľby)',
    'zip.required': 'PSČ je povinné',
    'zip.format': 'PSČ musí byť alfanumerické a najviac 12 znakov',
    'state.format': 'Štát/Provincia musí mať 2–3 písmená (ISO formát)',
    'state.required_for_country': 'Štát/Provincia je povinná pre US, CA a AU',
    'city.required': 'Mesto je povinné',
    'city.max': 'Mesto môže mať najviac 50 znakov',
    'address.required': 'Adresa je povinná',
    'address.max': 'Adresa môže mať najviac 100 znakov'
  }
}
