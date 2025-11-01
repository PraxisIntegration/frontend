export default {
  common: {
    paymentRedirect: 'Betalningsomdirigering',
    redirectingInSeconds: 'Omdirigerar om {{count}} sekunder...'
  },
  withdrawal: {
    initializing: 'Initierar uttag...',
    noRedirect: 'Ingen omdirigerings-URL mottagen',
    errorWithMessage: 'Fel vid start av uttag. {{message}}. Kontakta support.'
  },
  form: {
    selectCountry: 'Välj land',
    country: 'Land',
    firstName: 'Förnamn',
    lastName: 'Efternamn',
    dob: 'Födelsedatum',
    email: 'E-post',
    phone: 'Telefon',
    postalCode: 'Postnummer',
    stateProvince: 'Delstat/Provins',
    city: 'Stad',
    address: 'Adress',
    submit: 'Skicka',
    submitting: 'Skickar...',
    phonePlaceholder: 't.ex. 201112222',
    statePlaceholder: 't.ex. CA, NY, JS',
    submitSuccess: 'Formuläret har skickats!',
    submitError: 'Fel vid sändning av formulär. Försök igen.'
  },
  validation: {
    'country.required': 'Land krävs',
    'first_name.required': 'Förnamn krävs',
    'first_name.max': 'Förnamn får ha högst 25 tecken',
    'last_name.required': 'Efternamn krävs',
    'last_name.max': 'Efternamn får ha högst 25 tecken',
    'dob.required': 'Födelsedatum krävs',
    'dob.range': 'Ange ett giltigt datum mellan 1900 och idag',
    'email.required': 'E-post krävs',
    'email.max': 'E-post får ha högst 50 tecken',
    'email.format': 'Ange en giltig e-postadress',
    'phone.required': 'Telefonnummer krävs',
    'phone.format': 'Ange ett giltigt telefonnummer (endast siffror, utan landskod)',
    'zip.required': 'Postnummer krävs',
    'zip.format': 'Postnummer måste vara alfanumeriskt och högst 12 tecken',
    'state.format': 'Delstat/Provins måste ha 2–3 bokstäver (ISO)',
    'state.required_for_country': 'Delstat/Provins krävs för US, CA och AU',
    'city.required': 'Stad krävs',
    'city.max': 'Stad får ha högst 50 tecken',
    'address.required': 'Adress krävs',
    'address.max': 'Adress får ha högst 100 tecken'
  }
}
