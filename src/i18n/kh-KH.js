export default {
  common: {
    paymentRedirect: 'ប្ដូរទិសការទូទាត់',
    redirectingInSeconds: 'កំពុងប្ដូរទិសក្នុង {{count}} វិនាទី...'
  },
  withdrawal: {
    initializing: 'កំពុងចាប់ផ្តើមដកប្រាក់...',
    noRedirect: 'មិនបានទទួល URL សម្រាប់ប្ដូរទិស',
    errorWithMessage: 'កំហុសនៅពេលចាប់ផ្តើមដកប្រាក់។ {{message}}។ សូមទាក់ទងជំនួយ។'
  },
  form: {
    selectCountry: 'ជ្រើសរើសប្រទេស',
    country: 'ប្រទេស',
    firstName: 'នាមខ្លួន',
    lastName: 'នាមត្រកូល',
    dob: 'ថ្ងៃខែឆ្នាំកំណើត',
    email: 'អ៊ីមែល',
    phone: 'ទូរស័ព្ទ',
    postalCode: 'លេខប្រៃសណីយ៍',
    stateProvince: 'រដ្ឋ/ខេត្ត',
    city: 'ទីក្រុង',
    address: 'អាសយដ្ឋាន',
    submit: 'បញ្ជូន',
    submitting: 'កំពុងបញ្ជូន...',
    phonePlaceholder: 'ឧ. 201112222',
    statePlaceholder: 'ឧ. CA, NY, JS',
    submitSuccess: 'បំពេញទម្រង់ជោគជ័យ!',
    submitError: 'កំហុសពេលបញ្ជូនទម្រង់។ សូមព្យាយាមម្ដងទៀត។'
  },
  validation: {
    'country.required': 'ប្រទេសត្រូវតែបំពេញ',
    'first_name.required': 'នាមខ្លួនត្រូវតែបំពេញ',
    'first_name.max': 'នាមខ្លួនអតិបរមា 25 តួអក្សរ',
    'last_name.required': 'នាមត្រកូលត្រូវតែបំពេញ',
    'last_name.max': 'នាមត្រកូលអតិបរមា 25 តួអក្សរ',
    'dob.required': 'ថ្ងៃខែឆ្នាំកំណើតត្រូវតែបំពេញ',
    'dob.range': 'សូមបញ្ចូលកាលបរិច្ឆេទត្រឹមត្រូវចន្លោះឆ្នាំ 1900 ដល់ថ្ងៃនេះ',
    'email.required': 'អ៊ីមែលត្រូវតែបំពេញ',
    'email.max': 'អ៊ីមែលអតិបរមា 50 តួអក្សរ',
    'email.format': 'សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលត្រឹមត្រូវ',
    'phone.required': 'លេខទូរស័ព្ទត្រូវតែបំពេញ',
    'phone.format': 'សូមបញ្ចូលលេខទូរស័ព្ទត្រឹមត្រូវ (តែលេខ គ្មានលេខកូដប្រទេស)',
    'zip.required': 'លេខប្រៃសណីយ៍ត្រូវតែបំពេញ',
    'zip.format': 'លេខប្រៃសណីយ៍ត្រូវតែជាអក្សរលាយលេខ ហើយអតិបរមា 12 តួ',
    'state.format': 'រដ្ឋ/ខេត្តត្រូវមាន 2–3 អក្សរ (ទ្រង់ទ្រាយ ISO)',
    'state.required_for_country': 'រដ្ឋ/ខេត្តត្រូវការសម្រាប់សហរដ្ឋអាមេរិក កាណាដា និងអូស្ត្រាលី',
    'city.required': 'ទីក្រុងត្រូវតែបំពេញ',
    'city.max': 'ទីក្រុងអតិបរមា 50 តួអក្សរ',
    'address.required': 'អាសយដ្ឋានត្រូវតែបំពេញ',
    'address.max': 'អាសយដ្ឋានអតិបរមា 100 តួអក្សរ'
  }
}
