export default {
  common: {
    paymentRedirect: 'Přesměrování platby',
    redirectingInSeconds: 'Přesměrování za {{count}} sekund...'
  },
  withdrawal: {
    initializing: 'Inicializace výběru...',
    noRedirect: 'Nebyla přijata adresa URL pro přesměrování',
    errorWithMessage: 'Chyba při zahájení výběru. {{message}}. Kontaktujte podporu.'
  },
  form: {
    selectCountry: 'Vyberte zemi',
    country: 'Země',
    firstName: 'Jméno',
    lastName: 'Příjmení',
    dob: 'Datum narození',
    email: 'E-mail',
    phone: 'Telefon',
    postalCode: 'PSČ',
    stateProvince: 'Stát/Provincie',
    city: 'Město',
    address: 'Adresa',
    submit: 'Odeslat',
    submitting: 'Odesílání...',
    phonePlaceholder: 'např. 201112222',
    statePlaceholder: 'např. CA, NY, JS',
    submitSuccess: 'Formulář úspěšně odeslán!',
    submitError: 'Chyba při odesílání formuláře. Zkuste to znovu.'
  },
  validation: {
    'country.required': 'Země je povinná',
    'first_name.required': 'Jméno je povinné',
    'first_name.max': 'Jméno může mít nejvýše 25 znaků',
    'last_name.required': 'Příjmení je povinné',
    'last_name.max': 'Příjmení může mít nejvýše 25 znaků',
    'dob.required': 'Datum narození je povinné',
    'dob.range': 'Zadejte platné datum mezi rokem 1900 a dneškem',
    'email.required': 'E-mail je povinný',
    'email.max': 'E-mail může mít nejvýše 50 znaků',
    'email.format': 'Zadejte platnou e-mailovou adresu',
    'phone.required': 'Telefonní číslo je povinné',
    'phone.format': 'Zadejte platné telefonní číslo (pouze číslice, s předvolbou)',
    'zip.required': 'PSČ je povinné',
    'zip.format': 'PSČ musí být alfanumerické a nejvýše 12 znaků',
    'state.format': 'Stát/Provincie musí mít 2–3 písmena (formát ISO)',
    'state.required_for_country': 'Stát/Provincie je povinný pro US, CA a AU',
    'city.required': 'Město je povinné',
    'city.max': 'Město může mít nejvýše 50 znaků',
    'address.required': 'Adresa je povinná',
    'address.max': 'Adresa může mít nejvýše 100 znaků'
  }
}
