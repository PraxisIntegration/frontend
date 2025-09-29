export default {
  common: {
    paymentRedirect: 'Maksājuma novirzīšana',
    redirectingInSeconds: 'Novirzīšana pēc {{count}} sekundēm...'
  },
  withdrawal: {
    initializing: 'Izņemšanas inicializēšana...',
    noRedirect: 'Netika saņemta novirzīšanas saite',
    errorWithMessage: 'Kļūda uzsākot izņemšanu. {{message}}. Lūdzu, sazinieties ar atbalstu.'
  },
  form: {
    selectCountry: 'Izvēlieties valsti',
    country: 'Valsts',
    firstName: 'Vārds',
    lastName: 'Uzvārds',
    dob: 'Dzimšanas datums',
    email: 'E-pasts',
    phone: 'Tālrunis',
    postalCode: 'Pasta indekss',
    stateProvince: 'Štats/Province',
    city: 'Pilsēta',
    address: 'Adrese',
    submit: 'Iesniegt',
    submitting: 'Iesniedz...',
    phonePlaceholder: 'piem., 201112222',
    statePlaceholder: 'piem., CA, NY, JS',
    submitSuccess: 'Veidlapa veiksmīgi iesniegta!',
    submitError: 'Kļūda iesniedzot veidlapu. Mēģiniet vēlreiz.'
  },
  validation: {
    'country.required': 'Valsts ir obligāta',
    'first_name.required': 'Vārds ir obligāts',
    'first_name.max': 'Vārds nedrīkst pārsniegt 25 rakstzīmes',
    'last_name.required': 'Uzvārds ir obligāts',
    'last_name.max': 'Uzvārds nedrīkst pārsniegt 25 rakstzīmes',
    'dob.required': 'Dzimšanas datums ir obligāts',
    'dob.range': 'Ievadiet derīgu datumu no 1900. gada līdz šodienai',
    'email.required': 'E-pasts ir obligāts',
    'email.max': 'E-pasts nedrīkst pārsniegt 50 rakstzīmes',
    'email.format': 'Ievadiet derīgu e-pasta adresi',
    'phone.required': 'Tālruņa numurs ir obligāts',
    'phone.format': 'Ievadiet derīgu tālruņa numuru (tikai cipari, ar valsts kodu)',
    'zip.required': 'Pasta indekss ir obligāts',
    'zip.format': 'Pasta indeksam jābūt burtciparu un ne garākam par 12 rakstzīmēm',
    'state.format': 'Štatam/Provincei jābūt 2–3 burtiem (ISO formāts)',
    'state.required_for_country': 'ASV, Kanādai un Austrālijai nepieciešams štats/province',
    'city.required': 'Pilsēta ir obligāta',
    'city.max': 'Pilsētai jābūt ne garākai par 50 rakstzīmēm',
    'address.required': 'Adrese ir obligāta',
    'address.max': 'Adresei jābūt ne garākai par 100 rakstzīmēm'
  }
}
