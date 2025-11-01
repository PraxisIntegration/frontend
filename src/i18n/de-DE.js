export default {
  common: {
    paymentRedirect: 'Zahlungsweiterleitung',
    redirectingInSeconds: 'Weiterleitung in {{count}} Sekunden...'
  },
  withdrawal: {
    initializing: 'Auszahlung wird initialisiert...',
    noRedirect: 'Keine Weiterleitungs-URL erhalten',
    errorWithMessage: 'Fehler beim Start der Auszahlung. {{message}}. Bitte kontaktieren Sie den Support.'
  },
  form: {
    selectCountry: 'Land auswählen',
    country: 'Land',
    firstName: 'Vorname',
    lastName: 'Nachname',
    dob: 'Geburtsdatum',
    email: 'E-Mail',
    phone: 'Telefon',
    postalCode: 'Postleitzahl',
    stateProvince: 'Bundesland/Provinz',
    city: 'Stadt',
    address: 'Adresse',
    submit: 'Senden',
    submitting: 'Wird gesendet...',
    phonePlaceholder: 'z. B. 201112222',
    statePlaceholder: 'z. B. CA, NY, JS',
    submitSuccess: 'Formular erfolgreich gesendet!',
    submitError: 'Fehler beim Senden des Formulars. Bitte versuchen Sie es erneut.'
  },
  validation: {
    'country.required': 'Land ist erforderlich',
    'first_name.required': 'Vorname ist erforderlich',
    'first_name.max': 'Vorname darf höchstens 25 Zeichen haben',
    'last_name.required': 'Nachname ist erforderlich',
    'last_name.max': 'Nachname darf höchstens 25 Zeichen haben',
    'dob.required': 'Geburtsdatum ist erforderlich',
    'dob.range': 'Bitte ein gültiges Datum zwischen 1900 und heute eingeben',
    'email.required': 'E-Mail ist erforderlich',
    'email.max': 'E-Mail darf höchstens 50 Zeichen haben',
    'email.format': 'Bitte eine gültige E-Mail-Adresse eingeben',
    'phone.required': 'Telefonnummer ist erforderlich',
    'phone.format': 'Bitte eine gültige Telefonnummer eingeben (nur Zahlen, ohne Ländervorwahl)',
    'zip.required': 'Postleitzahl ist erforderlich',
    'zip.format': 'Postleitzahl muss alphanumerisch sein und höchstens 12 Zeichen haben',
    'state.format': 'Bundesland/Provinz muss 2–3 Buchstaben (ISO) haben',
    'state.required_for_country': 'Bundesland/Provinz ist für US, CA und AU erforderlich',
    'city.required': 'Stadt ist erforderlich',
    'city.max': 'Stadt darf höchstens 50 Zeichen haben',
    'address.required': 'Adresse ist erforderlich',
    'address.max': 'Adresse darf höchstens 100 Zeichen haben'
  }
}
