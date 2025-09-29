export default {
  common: {
    paymentRedirect: 'கட்டணம் மாற்று',
    redirectingInSeconds: '{{count}} விநாடிகளில் மாற்றப்படுகிறது...'
  },
  withdrawal: {
    initializing: 'பணம் எடுப்பது தொடங்குகிறது...',
    noRedirect: 'மாற்று URL கிடைக்கவில்லை',
    errorWithMessage: 'பணம் எடுப்பதைத் தொடங்கும்போது பிழை. {{message}}. உதவியை தொடர்பு கொள்ளவும்.'
  },
  form: {
    selectCountry: 'நாட்டைத் தேர்ந்தெடுக்கவும்',
    country: 'நாடு',
    firstName: 'முதல் பெயர்',
    lastName: 'கடைசி பெயர்',
    dob: 'பிறந்த தேதி',
    email: 'இமெயில்',
    phone: 'தொலைபேசி',
    postalCode: 'அஞ்சல் குறியீடு',
    stateProvince: 'மாநிலம்/மாகாணம்',
    city: 'நகரம்',
    address: 'முகவரி',
    submit: 'சமர்ப்பிக்கவும்',
    submitting: 'சமர்ப்பிக்கப்படுகிறது...',
    phonePlaceholder: 'எ.கா., 201112222',
    statePlaceholder: 'எ.கா., CA, NY, JS',
    submitSuccess: 'படிவம் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது!',
    submitError: 'படிவத்தை சமர்ப்பிக்கும்போது பிழை. மீண்டும் முயற்சிக்கவும்.'
  },
  validation: {
    'country.required': 'நாடு அவசியம்',
    'first_name.required': 'முதல் பெயர் அவசியம்',
    'first_name.max': 'முதல் பெயர் அதிகபட்சம் 25 எழுத்துகள்',
    'last_name.required': 'கடைசி பெயர் அவசியம்',
    'last_name.max': 'கடைசி பெயர் அதிகபட்சம் 25 எழுத்துகள்',
    'dob.required': 'பிறந்த தேதி அவசியம்',
    'dob.range': '1900 முதல் இன்று வரை சரியான தேதியை உள்ளிடவும்',
    'email.required': 'இமெயில் அவசியம்',
    'email.max': 'இமெயில் அதிகபட்சம் 50 எழுத்துகள்',
    'email.format': 'சரியான இமெயில் முகவரியை உள்ளிடவும்',
    'phone.required': 'தொலைபேசி எண் அவசியம்',
    'phone.format': 'சரியான தொலைபேசி எண்ணை உள்ளிடவும் (எண்கள் மட்டுமே, நாடு குறியீடு உடன்)',
    'zip.required': 'அஞ்சல் குறியீடு அவசியம்',
    'zip.format': 'அஞ்சல் குறியீடு எழுத்து-எண் மற்றும் அதிகபட்சம் 12 எழுத்துகள்',
    'state.format': 'மாநிலம்/மாகாணம் 2–3 எழுத்துகள் (ISO வடிவம்) இருக்க வேண்டும்',
    'state.required_for_country': 'US, CA மற்றும் AU க்கு மாநிலம்/மாகாணம் அவசியம்',
    'city.required': 'நகரம் அவசியம்',
    'city.max': 'நகரம் அதிகபட்சம் 50 எழுத்துகள்',
    'address.required': 'முகவரி அவசியம்',
    'address.max': 'முகவரி அதிகபட்சம் 100 எழுத்துகள்'
  }
}
