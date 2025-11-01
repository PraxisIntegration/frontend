export default {
  common: {
    paymentRedirect: 'Reindirizzamento pagamento',
    redirectingInSeconds: 'Reindirizzamento tra {{count}} secondi...'
  },
  withdrawal: {
    initializing: 'Inizializzazione prelievo...'
    ,noRedirect: 'Nessun URL di reindirizzamento ricevuto',
    errorWithMessage: 'Errore durante l\'avvio del prelievo. {{message}}. Contatta il supporto.'
  },
  form: {
    selectCountry: 'Seleziona paese',
    country: 'Paese',
    firstName: 'Nome',
    lastName: 'Cognome',
    dob: 'Data di nascita',
    email: 'Email',
    phone: 'Telefono',
    postalCode: 'CAP',
    stateProvince: 'Stato/Provincia',
    city: 'Città',
    address: 'Indirizzo',
    submit: 'Invia',
    submitting: 'Invio...'
    ,phonePlaceholder: 'es. 201112222',
    statePlaceholder: 'es. CA, NY, JS',
    submitSuccess: 'Modulo inviato con successo!',
    submitError: 'Errore durante l\'invio del modulo. Riprova.'
  },
  validation: {
    'country.required': 'Il paese è obbligatorio',
    'first_name.required': 'Il nome è obbligatorio',
    'first_name.max': 'Il nome deve avere al massimo 25 caratteri',
    'last_name.required': 'Il cognome è obbligatorio',
    'last_name.max': 'Il cognome deve avere al massimo 25 caratteri',
    'dob.required': 'La data di nascita è obbligatoria',
    'dob.range': 'Inserisci una data valida tra il 1900 e oggi',
    'email.required': 'L\'email è obbligatoria',
    'email.max': 'L\'email deve avere al massimo 50 caratteri',
    'email.format': 'Inserisci un indirizzo email valido',
    'phone.required': 'Il numero di telefono è obbligatorio',
    'phone.format': 'Inserisci un numero di telefono valido (solo cifre, senza prefisso internazionale)',
    'zip.required': 'Il CAP è obbligatorio',
    'zip.format': 'Il CAP deve essere alfanumerico e massimo 12 caratteri',
    'state.format': 'Stato/Provincia deve avere 2–3 lettere (formato ISO)',
    'state.required_for_country': 'Stato/Provincia è obbligatorio per US, CA e AU',
    'city.required': 'La città è obbligatoria',
    'city.max': 'La città deve avere al massimo 50 caratteri',
    'address.required': 'L\'indirizzo è obbligatorio',
    'address.max': 'L\'indirizzo deve avere al massimo 100 caratteri'
  }
}
