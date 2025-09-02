export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validateDate = (date) => {
  const selectedDate = new Date(date)
  const currentDate = new Date()
  const minDate = new Date('1900-01-01')
  
  return selectedDate <= currentDate && selectedDate >= minDate
}

export const validatePhone = (phone) => {
  const phoneRegex = /^\d+$/
  return phoneRegex.test(phone) && phone.length >= 7
}

export const validateZip = (zip) => {
  const zipRegex = /^[A-Za-z0-9\s-]{1,12}$/
  return zipRegex.test(zip)
}

export const validateState = (state) => {
  const stateRegex = /^[A-Za-z]{2,3}$/
  return stateRegex.test(state)
}

export const formatDateForSubmission = (date) => {
  const d = new Date(date)
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const year = d.getFullYear()
  return `${month}/${day}/${year}`
}

export const validationRules = {
  country: [
    { test: value => !value, message: 'Country is required' }
  ],
  first_name: [
    { test: value => !value, message: 'First name is required' },
    { test: value => value.length > 25, message: 'First name must be 25 characters or less' }
  ],
  last_name: [
    { test: value => !value, message: 'Last name is required' },
    { test: value => value.length > 25, message: 'Last name must be 25 characters or less' }
  ],
  dob: [
    { test: value => !value, message: 'Date of birth is required' },
    { test: value => value && !validateDate(value), message: 'Please enter a valid date between 1900 and today' }
  ],
  email: [
    { test: value => !value, message: 'Email is required' },
    { test: value => value.length > 50, message: 'Email must be 50 characters or less' },
    { test: value => value && !validateEmail(value), message: 'Please enter a valid email address' }
  ],
  phone: [
    { test: value => !value, message: 'Phone number is required' },
    { test: value => value && !validatePhone(value), message: 'Please enter a valid phone number (numbers only, with country code)' }
  ],
  zip: [
    { test: value => !value, message: 'Postal code is required' },
    { test: value => value && !validateZip(value), message: 'Postal code must be alphanumeric and 12 characters or less' }
  ],
  state: [
    { test: value => !value, message: 'State/Province is required' },
    { test: value => value && !validateState(value), message: 'State must be 2-3 characters (ISO format)' }
  ],
  city: [
    { test: value => !value, message: 'City is required' },
    { test: value => value.length > 50, message: 'City must be 50 characters or less' }
  ],
  address: [
    { test: value => !value, message: 'Address is required' },
    { test: value => value.length > 100, message: 'Address must be 100 characters or less' }
  ]
}