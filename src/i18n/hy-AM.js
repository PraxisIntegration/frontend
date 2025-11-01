export default {
  common: {
    paymentRedirect: 'Վճարման վերաուղղում',
    redirectingInSeconds: 'Վերաուղղում {{count}} վայրկյանի ընթացքում...'
  },
  withdrawal: {
    initializing: 'Սկսվում է ելքը...',
    noRedirect: 'Չստացվեց վերաուղղման հղում',
    errorWithMessage: 'Սխալ ելքի մեկնարկի ժամանակ։ {{message}}։ Խնդրում ենք կապվել աջակցությանը։'
  },
  form: {
    selectCountry: 'Ընտրեք երկիրը',
    country: 'Երկիր',
    firstName: 'Անուն',
    lastName: 'Ազգանուն',
    dob: 'Ծննդյան օր',
    email: 'Էլ. փոստ',
    phone: 'Հեռախոս',
    postalCode: 'Փոստային ինդեքս',
    stateProvince: 'Նահանգ/Մարզ',
    city: 'Քաղաք',
    address: 'Հասցե',
    submit: 'Ուղարկել',
    submitting: 'Ուղարկվում է...',
    phonePlaceholder: 'օր. 201112222',
    statePlaceholder: 'օր. CA, NY, JS',
    submitSuccess: 'Ձևը հաջողությամբ ուղարկվեց!',
    submitError: 'Սխալ ձևը ուղարկելիս։ Խնդրում ենք կրկին փորձել։'
  },
  validation: {
    'country.required': 'Երկիրը պարտադիր է',
    'first_name.required': 'Անունը պարտադիր է',
    'first_name.max': 'Անունը պետք է լինի առավելագույնը 25 նիշ',
    'last_name.required': 'Ազգանունը պարտադիր է',
    'last_name.max': 'Ազգանունը պետք է լինի առավելագույնը 25 նիշ',
    'dob.required': 'Ծննդյան օրը պարտադիր է',
    'dob.range': 'Մուտքագրեք վավեր ամսաթիվ 1900-ից մինչև այսօր',
    'email.required': 'Էլ. փոստը պարտադիր է',
    'email.max': 'Էլ. փոստը պետք է լինի առավելագույնը 50 նիշ',
    'email.format': 'Մուտքագրեք վավեր էլ. փոստի հասցե',
    'phone.required': 'Հեռախոսահամարը պարտադիր է',
    'phone.format': 'Մուտքագրեք վավեր հեռախոսահամար (միայն թվեր, առանց երկրի կոդի)',
    'zip.required': 'Փոստային ինդեքսը պարտադիր է',
    'zip.format': 'Փոստային ինդեքսը պետք է լինի տառաթվային և առավելագույնը 12 նիշ',
    'state.format': 'Նահանգ/Մարզը պետք է լինի 2–3 տառ (ISO ձևաչափ)',
    'state.required_for_country': 'Նահանգ/Մարզը պարտադիր է ԱՄՆ, Կանադայի և Ավստրալիայի համար',
    'city.required': 'Քաղաքը պարտադիր է',
    'city.max': 'Քաղաքը պետք է լինի առավելագույնը 50 նիշ',
    'address.required': 'Հասցեն պարտադիր է',
    'address.max': 'Հասցեն պետք է լինի առավելագույնը 100 նիշ'
  }
}
