export default {
  common: {
    paymentRedirect: 'Redirection de paiement',
    redirectingInSeconds: 'Redirection dans {{count}} secondes...'
  },
  withdrawal: {
    initializing: 'Initialisation du retrait...',
    noRedirect: "Aucune URL de redirection reçue",
    errorWithMessage: "Erreur lors de l'initialisation du retrait. {{message}}. Veuillez contacter le support."
  },
  form: {
    selectCountry: 'Sélectionner un pays',
    country: 'Pays',
    firstName: 'Prénom',
    lastName: 'Nom',
    dob: 'Date de naissance',
    email: 'E-mail',
    phone: 'Téléphone',
    postalCode: 'Code postal',
    stateProvince: 'État/Province',
    city: 'Ville',
    address: 'Adresse',
    submit: 'Envoyer',
    submitting: 'Envoi...',
    phonePlaceholder: 'ex. 201112222',
    statePlaceholder: 'ex. CA, NY, JS',
    submitSuccess: 'Formulaire envoyé avec succès !',
    submitError: "Erreur lors de l'envoi du formulaire. Veuillez réessayer."
  },
  validation: {
    'country.required': 'Le pays est requis',
    'first_name.required': 'Le prénom est requis',
    'first_name.max': 'Le prénom doit comporter au maximum 25 caractères',
    'last_name.required': 'Le nom est requis',
    'last_name.max': 'Le nom doit comporter au maximum 25 caractères',
    'dob.required': 'La date de naissance est requise',
    'dob.range': 'Veuillez saisir une date valide entre 1900 et aujourd’hui',
    'email.required': "L'e-mail est requis",
    'email.max': "L'e-mail doit comporter au maximum 50 caractères",
    'email.format': 'Veuillez saisir une adresse e-mail valide',
    'phone.required': 'Le numéro de téléphone est requis',
    'phone.format': 'Veuillez saisir un numéro de téléphone valide (chiffres uniquement, sans indicatif pays)',
    'zip.required': 'Le code postal est requis',
    'zip.format': 'Le code postal doit être alphanumérique et comporter au maximum 12 caractères',
    'state.format': "L'État/Province doit comporter 2–3 lettres (format ISO)",
    'state.required_for_country': "L'État/Province est requis pour les US, CA et AU",
    'city.required': 'La ville est requise',
    'city.max': 'La ville doit comporter au maximum 50 caractères',
    'address.required': "L'adresse est requise",
    'address.max': "L'adresse doit comporter au maximum 100 caractères"
  }
}
