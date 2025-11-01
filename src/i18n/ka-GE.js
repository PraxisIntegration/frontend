export default {
  common: {
    paymentRedirect: 'გადახდის გადამისამართება',
    redirectingInSeconds: 'გადამისამართება {{count}} წამში...'
  },
  withdrawal: {
    initializing: 'გამოტანის ინიციალიზაცია...',
    noRedirect: 'გადამისამართების URL არ მიღებულა',
    errorWithMessage: 'შეცდომა გამოტანის დაწყებისას. {{message}}. გთხოვთ, დაუკავშირდეთ მხარდაჭერას.'
  },
  form: {
    selectCountry: 'აირჩიეთ ქვეყანა',
    country: 'ქვეყანა',
    firstName: 'სახელი',
    lastName: 'გვარი',
    dob: 'დაბადების თარიღი',
    email: 'ელ. ფოსტა',
    phone: 'ტელეფონი',
    postalCode: 'საფოსტო ინდექსი',
    stateProvince: 'შტატი/პროვინცია',
    city: 'ქალაქი',
    address: 'მისამართი',
    submit: 'გაგზავნა',
    submitting: 'იგზავნება...',
    phonePlaceholder: 'მაგ.: 201112222',
    statePlaceholder: 'მაგ.: CA, NY, JS',
    submitSuccess: 'ფორმა წარმატებით გაიგზავნა!',
    submitError: 'ფორმის გაგზავნისას მოხდა შეცდომა. სცადეთ ხელახლა.'
  },
  validation: {
    'country.required': 'ქვეყანა სავალდებულოა',
    'first_name.required': 'სახელი სავალდებულოა',
    'first_name.max': 'სახელი უნდა იყოს მაქს. 25 სიმბოლო',
    'last_name.required': 'გვარი სავალდებულოა',
    'last_name.max': 'გვარი უნდა იყოს მაქს. 25 სიმბოლო',
    'dob.required': 'დაბადების თარიღი სავალდებულოა',
    'dob.range': 'შეიყვანეთ ვალიდური თარიღი 1900 წლიდან დღემდე',
    'email.required': 'ელ. ფოსტა სავალდებულოა',
    'email.max': 'ელ. ფოსტა მაქს. 50 სიმბოლო',
    'email.format': 'შეიყვანეთ ვალიდური ელ. ფოსტის მისამართი',
    'phone.required': 'ტელეფონის ნომერი სავალდებულოა',
    'phone.format': 'შეიყვანეთ ვალიდური ნომერი (მხოლოდ ციფრები, ქვეყნის კოდის გარეშე)',
    'zip.required': 'საფოსტო ინდექსი სავალდებულოა',
    'zip.format': 'ინდექსი ალფანუმერულია და მაქს. 12 სიმბოლო',
    'state.format': 'შტატი/პროვინცია უნდა იყოს 2–3 ასო (ISO ფორმატი)',
    'state.required_for_country': 'შტატი/პროვინცია სავალდებულოა აშშ, კანადა და ავსტრალიისთვის',
    'city.required': 'ქალაქი სავალდებულოა',
    'city.max': 'ქალაქი მაქს. 50 სიმბოლო',
    'address.required': 'მისამართი სავალდებულოა',
    'address.max': 'მისამართი მაქს. 100 სიმბოლო'
  }
}
