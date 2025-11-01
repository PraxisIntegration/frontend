export default {
  common: {
    paymentRedirect: 'Betalingsomleiding',
    redirectingInSeconds: 'Doorverwijzen over {{count}} seconden...'
  },
  withdrawal: {
    initializing: 'Opname initialiseren...',
    noRedirect: 'Geen doorverwijzings-URL ontvangen',
    errorWithMessage: 'Fout bij het starten van de opname. {{message}}. Neem contact op met support.'
  },
  form: {
    selectCountry: 'Selecteer land',
    country: 'Land',
    firstName: 'Voornaam',
    lastName: 'Achternaam',
    dob: 'Geboortedatum',
    email: 'E-mail',
    phone: 'Telefoon',
    postalCode: 'Postcode',
    stateProvince: 'Staat/Provincie',
    city: 'Stad',
    address: 'Adres',
    submit: 'Verzenden',
    submitting: 'Bezig met verzenden...',
    phonePlaceholder: 'bijv. 201112222',
    statePlaceholder: 'bijv. CA, NY, JS',
    submitSuccess: 'Formulier succesvol verzonden!',
    submitError: 'Fout bij verzenden van formulier. Probeer het opnieuw.'
  },
  validation: {
    'country.required': 'Land is verplicht',
    'first_name.required': 'Voornaam is verplicht',
    'first_name.max': 'Voornaam mag maximaal 25 tekens bevatten',
    'last_name.required': 'Achternaam is verplicht',
    'last_name.max': 'Achternaam mag maximaal 25 tekens bevatten',
    'dob.required': 'Geboortedatum is verplicht',
    'dob.range': 'Voer een geldige datum in tussen 1900 en vandaag',
    'email.required': 'E-mail is verplicht',
    'email.max': 'E-mail mag maximaal 50 tekens bevatten',
    'email.format': 'Voer een geldig e-mailadres in',
    'phone.required': 'Telefoonnummer is verplicht',
    'phone.format': 'Voer een geldig telefoonnummer in (alleen cijfers, zonder landcode)',
    'zip.required': 'Postcode is verplicht',
    'zip.format': 'Postcode moet alfanumeriek zijn en maximaal 12 tekens',
    'state.format': 'Staat/Provincie moet 2–3 letters hebben (ISO-formaat)',
    'state.required_for_country': 'Staat/Provincie is vereist voor US, CA en AU',
    'city.required': 'Stad is verplicht',
    'city.max': 'Stad mag maximaal 50 tekens bevatten',
    'address.required': 'Adres is verplicht',
    'address.max': 'Adres mag maximaal 100 tekens bevatten'
  }
}
