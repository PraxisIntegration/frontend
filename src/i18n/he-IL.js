export default {
  common: {
    paymentRedirect: 'הפניית תשלום',
    redirectingInSeconds: 'מופנה בעוד {{count}} שניות...'
  },
  withdrawal: {
    initializing: 'מאתחל משיכה...',
    noRedirect: 'לא התקבל כתובת להפניה',
    errorWithMessage: 'שגיאה בעת התחלת המשיכה. {{message}}. אנא פנו לתמיכה.'
  },
  form: {
    selectCountry: 'בחר מדינה',
    country: 'מדינה',
    firstName: 'שם פרטי',
    lastName: 'שם משפחה',
    dob: 'תאריך לידה',
    email: 'אימייל',
    phone: 'טלפון',
    postalCode: 'מיקוד',
    stateProvince: 'מדינה/מחוז',
    city: 'עיר',
    address: 'כתובת',
    submit: 'שלח',
    submitting: 'שולח...',
    phonePlaceholder: 'לדוגמה: 201112222',
    statePlaceholder: 'לדוגמה: CA, NY, JS',
    submitSuccess: 'הטופס נשלח בהצלחה!',
    submitError: 'שגיאה בשליחת הטופס. נסו שוב.'
  },
  validation: {
    'country.required': 'נדרש לבחור מדינה',
    'first_name.required': 'נדרש שם פרטי',
    'first_name.max': 'שם פרטי עד 25 תווים',
    'last_name.required': 'נדרש שם משפחה',
    'last_name.max': 'שם משפחה עד 25 תווים',
    'dob.required': 'נדרש תאריך לידה',
    'dob.range': 'הזן תאריך תקף בין 1900 להיום',
    'email.required': 'נדרש אימייל',
    'email.max': 'אימייל עד 50 תווים',
    'email.format': 'הזן כתובת אימייל תקפה',
    'phone.required': 'נדרש מספר טלפון',
    'phone.format': 'הזן מספר טלפון תקף (ספרות בלבד, עם קידומת מדינה)',
    'zip.required': 'נדרש מיקוד',
    'zip.format': 'המיקוד חייב להיות אלפאנומרי ועד 12 תווים',
    'state.format': 'מדינה/מחוז חייבים להיות 2–3 אותיות (פורמט ISO)',
    'state.required_for_country': 'מדינה/מחוז נדרש עבור ארה\'ב, קנדה ואוסטרליה',
    'city.required': 'נדרשת עיר',
    'city.max': 'שם העיר עד 50 תווים',
    'address.required': 'נדרשת כתובת',
    'address.max': 'כתובת עד 100 תווים'
  }
}
