export default {
  common: {
    paymentRedirect: 'Przekierowanie płatności',
    redirectingInSeconds: 'Przekierowanie za {{count}} sekund...'
  },
  withdrawal: {
    initializing: 'Inicjowanie wypłaty...',
    noRedirect: 'Nie otrzymano adresu URL przekierowania',
    errorWithMessage: 'Błąd podczas rozpoczynania wypłaty. {{message}}. Skontaktuj się z pomocą techniczną.'
  },
  form: {
    selectCountry: 'Wybierz kraj',
    country: 'Kraj',
    firstName: 'Imię',
    lastName: 'Nazwisko',
    dob: 'Data urodzenia',
    email: 'E-mail',
    phone: 'Telefon',
    postalCode: 'Kod pocztowy',
    stateProvince: 'Stan/ Prowincja',
    city: 'Miasto',
    address: 'Adres',
    submit: 'Wyślij',
    submitting: 'Wysyłanie...',
    phonePlaceholder: 'np. 201112222',
    statePlaceholder: 'np. CA, NY, JS',
    submitSuccess: 'Formularz wysłany pomyślnie!',
    submitError: 'Błąd podczas wysyłania formularza. Spróbuj ponownie.'
  },
  validation: {
    'country.required': 'Kraj jest wymagany',
    'first_name.required': 'Imię jest wymagane',
    'first_name.max': 'Imię może mieć maksymalnie 25 znaków',
    'last_name.required': 'Nazwisko jest wymagane',
    'last_name.max': 'Nazwisko może mieć maksymalnie 25 znaków',
    'dob.required': 'Data urodzenia jest wymagana',
    'dob.range': 'Wprowadź prawidłową datę między 1900 r. a dzisiaj',
    'email.required': 'E-mail jest wymagany',
    'email.max': 'E-mail może mieć maksymalnie 50 znaków',
    'email.format': 'Wprowadź prawidłowy adres e-mail',
    'phone.required': 'Numer telefonu jest wymagany',
    'phone.format': 'Wprowadź prawidłowy numer telefonu (tylko cyfry, z kodem kraju)',
    'zip.required': 'Kod pocztowy jest wymagany',
    'zip.format': 'Kod pocztowy musi być alfanumeryczny i mieć maks. 12 znaków',
    'state.format': 'Stan/ Prowincja musi mieć 2–3 litery (format ISO)',
    'state.required_for_country': 'Stan/ Prowincja jest wymagana dla US, CA i AU',
    'city.required': 'Miasto jest wymagane',
    'city.max': 'Miasto może mieć maksymalnie 50 znaków',
    'address.required': 'Adres jest wymagany',
    'address.max': 'Adres może mieć maksymalnie 100 znaków'
  }
}
