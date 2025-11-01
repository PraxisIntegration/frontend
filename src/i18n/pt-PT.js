export default {
  common: {
    paymentRedirect: 'Redirecionamento de pagamento',
    redirectingInSeconds: 'A redirecionar em {{count}} segundos...'
  },
  withdrawal: {
    initializing: 'A iniciar levantamento...',
    noRedirect: 'Nenhum URL de redirecionamento recebido',
    errorWithMessage: 'Erro ao iniciar o levantamento. {{message}}. Por favor, contacte o suporte.'
  },
  form: {
    selectCountry: 'Selecionar país',
    country: 'País',
    firstName: 'Nome',
    lastName: 'Apelido',
    dob: 'Data de nascimento',
    email: 'Email',
    phone: 'Telefone',
    postalCode: 'Código postal',
    stateProvince: 'Estado/Província',
    city: 'Cidade',
    address: 'Morada',
    submit: 'Submeter',
    submitting: 'A submeter...',
    phonePlaceholder: 'ex.: 201112222',
    statePlaceholder: 'ex.: CA, NY, JS',
    submitSuccess: 'Formulário enviado com sucesso!',
    submitError: 'Erro ao enviar o formulário. Tente novamente.'
  },
  validation: {
    'country.required': 'O país é obrigatório',
    'first_name.required': 'O nome é obrigatório',
    'first_name.max': 'O nome deve ter 25 caracteres ou menos',
    'last_name.required': 'O apelido é obrigatório',
    'last_name.max': 'O apelido deve ter 25 caracteres ou menos',
    'dob.required': 'A data de nascimento é obrigatória',
    'dob.range': 'Introduza uma data válida entre 1900 e hoje',
    'email.required': 'O email é obrigatório',
    'email.max': 'O email deve ter 50 caracteres ou menos',
    'email.format': 'Introduza um email válido',
    'phone.required': 'O número de telefone é obrigatório',
    'phone.format': 'Introduza um número de telefone válido (apenas dígitos, sem indicativo de país)',
    'zip.required': 'O código postal é obrigatório',
    'zip.format': 'O código postal deve ser alfanumérico e ter no máximo 12 caracteres',
    'state.format': 'O Estado/Província deve ter 2–3 letras (formato ISO)',
    'state.required_for_country': 'O Estado/Província é obrigatório para US, CA e AU',
    'city.required': 'A cidade é obrigatória',
    'city.max': 'A cidade deve ter no máximo 50 caracteres',
    'address.required': 'A morada é obrigatória',
    'address.max': 'A morada deve ter no máximo 100 caracteres'
  }
}
