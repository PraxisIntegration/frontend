export default {
  common: {
    paymentRedirect: 'Preusmeritev plačila',
    redirectingInSeconds: 'Preusmeritev čez {{count}} sekund...'
  },
  withdrawal: {
    initializing: 'Inicializacija izplačila...',
    noRedirect: 'Ni bila prejeta URL za preusmeritev',
    errorWithMessage: 'Napaka pri zagonu izplačila. {{message}}. Obrnite se na podporo.'
  },
  form: {
    selectCountry: 'Izberite državo',
    country: 'Država',
    firstName: 'Ime',
    lastName: 'Priimek',
    dob: 'Datum rojstva',
    email: 'E-pošta',
    phone: 'Telefon',
    postalCode: 'Poštna številka',
    stateProvince: 'Zvezna država/Provinca',
    city: 'Mesto',
    address: 'Naslov',
    submit: 'Pošlji',
    submitting: 'Pošiljanje...',
    phonePlaceholder: 'npr. 201112222',
    statePlaceholder: 'npr. CA, NY, JS',
    submitSuccess: 'Obrazec je bil uspešno poslan!',
    submitError: 'Napaka pri pošiljanju obrazca. Poskusite znova.'
  },
  validation: {
    'country.required': 'Država je obvezna',
    'first_name.required': 'Ime je obvezno',
    'first_name.max': 'Ime je lahko dolgo največ 25 znakov',
    'last_name.required': 'Priimek je obvezen',
    'last_name.max': 'Priimek je lahko dolg največ 25 znakov',
    'dob.required': 'Datum rojstva je obvezen',
    'dob.range': 'Vnesite veljaven datum med letom 1900 in danes',
    'email.required': 'E-pošta je obvezna',
    'email.max': 'E-pošta je lahko dolga največ 50 znakov',
    'email.format': 'Vnesite veljaven e-poštni naslov',
    'phone.required': 'Telefonska številka je obvezna',
    'phone.format': 'Vnesite veljavno telefonsko številko (samo številke, z klicno številko države)',
    'zip.required': 'Poštna številka je obvezna',
    'zip.format': 'Poštna številka mora biti alfanumerična in dolga največ 12 znakov',
    'state.format': 'Zvezna država/Provinca mora imeti 2–3 črke (format ISO)',
    'state.required_for_country': 'Zvezna država/Provinca je obvezna za ZDA, Kanado in Avstralijo',
    'city.required': 'Mesto je obvezno',
    'city.max': 'Mesto je lahko dolgo največ 50 znakov',
    'address.required': 'Naslov je obvezen',
    'address.max': 'Naslov je lahko dolg največ 100 znakov'
  }
}
