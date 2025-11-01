export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateDate = (date) => {
  const selectedDate = new Date(date);
  const currentDate = new Date();
  const minDate = new Date("1900-01-01");

  return selectedDate <= currentDate && selectedDate >= minDate;
};

export const sanitizePhone = (phone) => (phone || '').replace(/[^\d]/g, '');

export const validatePhone = (phone) => {
  const digits = sanitizePhone(phone);
  if (digits.length < 6 || digits.length > 12) {
    return false;
  }
  if (/^(\d)\1{5,}$/.test(digits)) {
    return false;
  }
  return true;
};

export const validateZip = (zip) => {
  const zipRegex = /^[A-Za-z0-9\s-]{1,12}$/;
  return zipRegex.test(zip);
};

export const validateState = (state) => {
  const stateRegex = /^[A-Za-z]{2,3}$/;
  return stateRegex.test(state);
};

export const formatDateForSubmission = (date) => {
  const d = new Date(date);
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const year = d.getFullYear();
  return `${month}/${day}/${year}`;
};

export const validationRules = {
  country: [{ test: (value) => !value, message: 'validation.country.required' }],
  first_name: [
    { test: (value) => !value, message: 'validation.first_name.required' },
    {
      test: (value) => value.length > 25,
      message: 'validation.first_name.max',
    },
  ],
  last_name: [
    { test: (value) => !value, message: 'validation.last_name.required' },
    {
      test: (value) => value.length > 25,
      message: 'validation.last_name.max',
    },
  ],
  dob: [
    { test: (value) => !value, message: 'validation.dob.required' },
    {
      test: (value) => value && !validateDate(value),
      message: 'validation.dob.range',
    },
  ],
  email: [
    { test: (value) => !value, message: 'validation.email.required' },
    {
      test: (value) => value.length > 50,
      message: 'validation.email.max',
    },
    {
      test: (value) => value && !validateEmail(value),
      message: 'validation.email.format',
    },
  ],
  phone: [
    { test: (value) => !value, message: 'validation.phone.required' },
    {
      test: (value) => value && !validatePhone(value),
      message: 'validation.phone.format',
    },
  ],
  zip: [
    { test: (value) => !value, message: 'validation.zip.required' },
    {
      test: (value) => value && !validateZip(value),
      message: 'validation.zip.format',
    },
  ],
  state: [
    {
      test: (value) => value && !validateState(value),
      message: 'validation.state.format',
    },
  ],
  city: [
    { test: (value) => !value, message: 'validation.city.required' },
    {
      test: (value) => value.length > 50,
      message: 'validation.city.max',
    },
  ],
  address: [
    { test: (value) => !value, message: 'validation.address.required' },
    {
      test: (value) => value.length > 100,
      message: 'validation.address.max',
    },
  ],
}
