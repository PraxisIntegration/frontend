export default {
  common: {
    paymentRedirect: 'Payment Redirect',
    redirectingInSeconds: 'Redirecting in {{count}} seconds...'
  },
  withdrawal: {
    initializing: 'Initializing withdrawal...',
    noRedirect: 'No redirect URL received',
    errorWithMessage: 'Error initiating withdrawal. {{message}}. Please contact support.'
  },
  form: {
    selectCountry: 'Select Country',
    country: 'Country',
    firstName: 'First Name',
    lastName: 'Last Name',
    dob: 'Date of Birth',
    email: 'Email',
    phone: 'Phone',
    postalCode: 'Postal Code',
    stateProvince: 'State/Province',
    city: 'City',
    address: 'Address',
    submit: 'Submit',
    submitting: 'Submitting...',
    phonePlaceholder: 'e.g., 201112222',
    statePlaceholder: 'e.g., CA, NY, JS',
    submitSuccess: 'Form submitted successfully!',
    submitError: 'Error submitting form. Please try again.'
  },
  validation: {
    'country.required': 'Country is required',
    'first_name.required': 'First name is required',
    'first_name.max': 'First name must be 25 characters or less',
    'last_name.required': 'Last name is required',
    'last_name.max': 'Last name must be 25 characters or less',
    'dob.required': 'Date of birth is required',
    'dob.range': 'Please enter a valid date between 1900 and today',
    'email.required': 'Email is required',
    'email.max': 'Email must be 50 characters or less',
    'email.format': 'Please enter a valid email address',
    'phone.required': 'Phone number is required',
    'phone.format': 'Please enter a valid phone number (numbers only, with country code)',
    'zip.required': 'Postal code is required',
    'zip.format': 'Postal code must be alphanumeric and 12 characters or less',
    'state.format': 'State must be 2-3 characters (ISO format)',
    'state.required_for_country': 'State/Province is required for US, CA and AU',
    'city.required': 'City is required',
    'city.max': 'City must be 50 characters or less',
    'address.required': 'Address is required',
    'address.max': 'Address must be 100 characters or less'
  }
}

