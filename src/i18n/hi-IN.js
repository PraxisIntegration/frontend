export default {
  common: {
    paymentRedirect: 'भुगतान रीडायरेक्ट',
    redirectingInSeconds: '{{count}} सेकंड में रीडायरेक्ट किया जा रहा है...'
  },
  withdrawal: {
    initializing: 'निकासी प्रारंभ की जा रही है...',
    noRedirect: 'रीडायरेक्ट URL प्राप्त नहीं हुआ',
    errorWithMessage: 'निकासी शुरू करते समय त्रुटि। {{message}}। कृपया सहायता से संपर्क करें।'
  },
  form: {
    selectCountry: 'देश चुनें',
    country: 'देश',
    firstName: 'पहला नाम',
    lastName: 'अंतिम नाम',
    dob: 'जन्म तिथि',
    email: 'ईमेल',
    phone: 'फोन',
    postalCode: 'पिन कोड',
    stateProvince: 'राज्य/प्रांत',
    city: 'शहर',
    address: 'पता',
    submit: 'सबमिट करें',
    submitting: 'सबमिट किया जा रहा है...',
    phonePlaceholder: 'उदा. 201112222',
    statePlaceholder: 'उदा. CA, NY, JS',
    submitSuccess: 'फॉर्म सफलतापूर्वक सबमिट हुआ!',
    submitError: 'फॉर्म सबमिट करते समय त्रुटि। कृपया पुनः प्रयास करें।'
  },
  validation: {
    'country.required': 'देश आवश्यक है',
    'first_name.required': 'पहला नाम आवश्यक है',
    'first_name.max': 'पहला नाम अधिकतम 25 अक्षरों तक होना चाहिए',
    'last_name.required': 'अंतिम नाम आवश्यक है',
    'last_name.max': 'अंतिम नाम अधिकतम 25 अक्षरों तक होना चाहिए',
    'dob.required': 'जन्म तिथि आवश्यक है',
    'dob.range': '1900 और आज के बीच एक मान्य तिथि दर्ज करें',
    'email.required': 'ईमेल आवश्यक है',
    'email.max': 'ईमेल अधिकतम 50 अक्षरों तक होना चाहिए',
    'email.format': 'एक मान्य ईमेल पता दर्ज करें',
    'phone.required': 'फोन नंबर आवश्यक है',
    'phone.format': 'एक मान्य फोन नंबर दर्ज करें (केवल अंक, कंट्री कोड सहित)',
    'zip.required': 'पिन कोड आवश्यक है',
    'zip.format': 'पिन कोड अल्फ़ान्यूमेरिक और 12 अक्षरों तक होना चाहिए',
    'state.format': 'राज्य/प्रांत 2–3 अक्षरों का होना चाहिए (ISO प्रारूप)',
    'state.required_for_country': 'US, CA और AU के लिए राज्य/प्रांत आवश्यक है',
    'city.required': 'शहर आवश्यक है',
    'city.max': 'शहर 50 अक्षरों तक होना चाहिए',
    'address.required': 'पता आवश्यक है',
    'address.max': 'पता 100 अक्षरों तक होना चाहिए'
  }
}
