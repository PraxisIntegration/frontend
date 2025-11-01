export default {
  common: {
    paymentRedirect: 'Redirección de pago',
    redirectingInSeconds: 'Redirigiendo en {{count}} segundos...'
  },
  withdrawal: {
    initializing: 'Inicializando retiro...',
    noRedirect: 'No se recibió URL de redirección',
    errorWithMessage: 'Error al iniciar el retiro. {{message}}. Por favor, contacte al soporte.'
  },
  form: {
    selectCountry: 'Seleccionar país',
    country: 'País',
    firstName: 'Nombre',
    lastName: 'Apellido',
    dob: 'Fecha de nacimiento',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    postalCode: 'Código postal',
    stateProvince: 'Estado/Provincia',
    city: 'Ciudad',
    address: 'Dirección',
    submit: 'Enviar',
    submitting: 'Enviando...',
    phonePlaceholder: 'p. ej., 201112222',
    statePlaceholder: 'p. ej., CA, NY, JS',
    submitSuccess: '¡Formulario enviado con éxito!',
    submitError: 'Error al enviar el formulario. Inténtelo de nuevo.'
  },
  validation: {
    'country.required': 'El país es obligatorio',
    'first_name.required': 'El nombre es obligatorio',
    'first_name.max': 'El nombre debe tener 25 caracteres o menos',
    'last_name.required': 'El apellido es obligatorio',
    'last_name.max': 'El apellido debe tener 25 caracteres o menos',
    'dob.required': 'La fecha de nacimiento es obligatoria',
    'dob.range': 'Introduzca una fecha válida entre 1900 y hoy',
    'email.required': 'El correo electrónico es obligatorio',
    'email.max': 'El correo electrónico debe tener 50 caracteres o menos',
    'email.format': 'Introduzca una dirección de correo válida',
    'phone.required': 'El número de teléfono es obligatorio',
    'phone.format': 'Introduzca un número de teléfono válido (solo números, sin código de país)',
    'zip.required': 'El código postal es obligatorio',
    'zip.format': 'El código postal debe ser alfanumérico y de 12 caracteres o menos',
    'state.format': 'El Estado/Provincia debe tener 2–3 letras (formato ISO)',
    'state.required_for_country': 'El Estado/Provincia es obligatorio para US, CA y AU',
    'city.required': 'La ciudad es obligatoria',
    'city.max': 'La ciudad debe tener 50 caracteres o menos',
    'address.required': 'La dirección es obligatoria',
    'address.max': 'La dirección debe tener 100 caracteres o menos'
  }
}
