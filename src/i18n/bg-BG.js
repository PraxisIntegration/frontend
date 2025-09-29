export default {
  common: {
    paymentRedirect: 'Пренасочване на плащане',
    redirectingInSeconds: 'Пренасочване след {{count}} секунди...'
  },
  withdrawal: {
    initializing: 'Инициализиране на теглене...',
    noRedirect: 'Не е получен URL за пренасочване',
    errorWithMessage: 'Грешка при стартиране на тегленето. {{message}}. Моля, свържете се с поддръжката.'
  },
  form: {
    selectCountry: 'Изберете държава',
    country: 'Държава',
    firstName: 'Име',
    lastName: 'Фамилия',
    dob: 'Дата на раждане',
    email: 'Имейл',
    phone: 'Телефон',
    postalCode: 'Пощенски код',
    stateProvince: 'Щат/Провинция',
    city: 'Град',
    address: 'Адрес',
    submit: 'Изпрати',
    submitting: 'Изпращане...',
    phonePlaceholder: 'напр. 201112222',
    statePlaceholder: 'напр. CA, NY, JS',
    submitSuccess: 'Формулярът е изпратен успешно!',
    submitError: 'Грешка при изпращане на формуляра. Опитайте отново.'
  },
  validation: {
    'country.required': 'Държавата е задължителна',
    'first_name.required': 'Името е задължително',
    'first_name.max': 'Името трябва да е до 25 символа',
    'last_name.required': 'Фамилията е задължителна',
    'last_name.max': 'Фамилията трябва да е до 25 символа',
    'dob.required': 'Датата на раждане е задължителна',
    'dob.range': 'Моля, въведете валидна дата между 1900 и днес',
    'email.required': 'Имейлът е задължителен',
    'email.max': 'Имейлът трябва да е до 50 символа',
    'email.format': 'Моля, въведете валиден имейл адрес',
    'phone.required': 'Телефонният номер е задължителен',
    'phone.format': 'Моля, въведете валиден телефонен номер (само цифри, с код на държава)',
    'zip.required': 'Пощенският код е задължителен',
    'zip.format': 'Пощенският код трябва да е буквено-цифров и до 12 символа',
    'state.format': 'Щат/Провинция трябва да е 2–3 букви (ISO формат)',
    'state.required_for_country': 'Щат/Провинция е задължителен за САЩ, Канада и Австралия',
    'city.required': 'Градът е задължителен',
    'city.max': 'Градът трябва да е до 50 символа',
    'address.required': 'Адресът е задължителен',
    'address.max': 'Адресът трябва да е до 100 символа'
  }
}
