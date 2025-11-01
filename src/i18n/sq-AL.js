export default {
  common: {
    paymentRedirect: 'Ridrejtim pagese',
    redirectingInSeconds: 'Ridrejtohet pas {{count}} sekondash...'
  },
  withdrawal: {
    initializing: 'Inicializimi i tërheqjes...',
    noRedirect: 'Nuk u mor URL për ridrejtim',
    errorWithMessage: 'Gabim gjatë nisjes së tërheqjes. {{message}}. Ju lutemi kontaktoni mbështetjen.'
  },
  form: {
    selectCountry: 'Zgjidhni vendin',
    country: 'Vendi',
    firstName: 'Emri',
    lastName: 'Mbiemri',
    dob: 'Data e lindjes',
    email: 'Email',
    phone: 'Telefoni',
    postalCode: 'Kodi postar',
    stateProvince: 'Shtet/Provincë',
    city: 'Qyteti',
    address: 'Adresa',
    submit: 'Dërgo',
    submitting: 'Duke dërguar...',
    phonePlaceholder: 'p.sh. 201112222',
    statePlaceholder: 'p.sh. CA, NY, JS',
    submitSuccess: 'Formulari u dërgua me sukses!',
    submitError: 'Gabim gjatë dërgimit të formularit. Provojeni përsëri.'
  },
  validation: {
    'country.required': 'Vendi është i detyrueshëm',
    'first_name.required': 'Emri është i detyrueshëm',
    'first_name.max': 'Emri duhet të ketë maksimumi 25 karaktere',
    'last_name.required': 'Mbiemri është i detyrueshëm',
    'last_name.max': 'Mbiemri duhet të ketë maksimumi 25 karaktere',
    'dob.required': 'Data e lindjes është e detyrueshme',
    'dob.range': 'Shkruani një datë të vlefshme midis 1900 dhe sot',
    'email.required': 'Email është i detyrueshëm',
    'email.max': 'Email duhet të ketë maksimumi 50 karaktere',
    'email.format': 'Shkruani një adresë email të vlefshme',
    'phone.required': 'Numri i telefonit është i detyrueshëm',
    'phone.format': 'Shkruani një numër telefoni të vlefshëm (vetëm shifra, pa kodin e vendit)',
    'zip.required': 'Kodi postar është i detyrueshëm',
    'zip.format': 'Kodi postar duhet të jetë alfanumerik dhe maksimumi 12 karaktere',
    'state.format': 'Shtet/Provincë duhet të ketë 2–3 shkronja (format ISO)',
    'state.required_for_country': 'Shtet/Provincë është i detyrueshëm për US, CA dhe AU',
    'city.required': 'Qyteti është i detyrueshëm',
    'city.max': 'Qyteti duhet të ketë maksimumi 50 karaktere',
    'address.required': 'Adresa është e detyrueshme',
    'address.max': 'Adresa duhet të ketë maksimumi 100 karaktere'
  }
}
