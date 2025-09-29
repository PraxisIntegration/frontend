export default {
  common: {
    paymentRedirect: 'إعادة توجيه الدفع',
    redirectingInSeconds: 'سيتم إعادة التوجيه خلال {{count}} ثانية...'
  },
  withdrawal: {
    initializing: 'جارٍ تهيئة السحب...',
    noRedirect: 'لم يتم استلام رابط إعادة توجيه',
    errorWithMessage: 'حدث خطأ عند بدء السحب. {{message}}. يرجى التواصل مع الدعم.'
  },
  form: {
    selectCountry: 'اختر الدولة',
    country: 'الدولة',
    firstName: 'الاسم الأول',
    lastName: 'اسم العائلة',
    dob: 'تاريخ الميلاد',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    postalCode: 'الرمز البريدي',
    stateProvince: 'الولاية/المقاطعة',
    city: 'المدينة',
    address: 'العنوان',
    submit: 'إرسال',
    submitting: 'جارٍ الإرسال...',
    phonePlaceholder: 'مثال: 201112222',
    statePlaceholder: 'مثال: CA, NY, JS',
    submitSuccess: 'تم إرسال النموذج بنجاح!',
    submitError: 'حدث خطأ أثناء إرسال النموذج. حاول مرة أخرى.'
  },
  validation: {
    'country.required': 'الدولة مطلوبة',
    'first_name.required': 'الاسم الأول مطلوب',
    'first_name.max': 'يجب ألا يزيد الاسم الأول عن 25 حرفًا',
    'last_name.required': 'اسم العائلة مطلوب',
    'last_name.max': 'يجب ألا يزيد اسم العائلة عن 25 حرفًا',
    'dob.required': 'تاريخ الميلاد مطلوب',
    'dob.range': 'الرجاء إدخال تاريخ صالح بين 1900 واليوم',
    'email.required': 'البريد الإلكتروني مطلوب',
    'email.max': 'يجب ألا يزيد البريد الإلكتروني عن 50 حرفًا',
    'email.format': 'الرجاء إدخال بريد إلكتروني صالح',
    'phone.required': 'رقم الهاتف مطلوب',
    'phone.format': 'الرجاء إدخال رقم هاتف صالح (أرقام فقط مع رمز الدولة)',
    'zip.required': 'الرمز البريدي مطلوب',
    'zip.format': 'يجب أن يكون الرمز البريدي بحروف وأرقام وبحد أقصى 12 خانة',
    'state.format': 'يجب أن تكون الولاية/المقاطعة 2–3 أحرف (صيغة ISO)',
    'state.required_for_country': 'الولاية/المقاطعة مطلوبة للولايات المتحدة وكندا وأستراليا',
    'city.required': 'المدينة مطلوبة',
    'city.max': 'يجب ألا يزيد اسم المدينة عن 50 حرفًا',
    'address.required': 'العنوان مطلوب',
    'address.max': 'يجب ألا يزيد العنوان عن 100 حرف'
  }
}
