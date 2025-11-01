import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { countries } from '../constants/countries'
import { initialFormData } from '../constants/form'
import { phoneCodes } from '../constants/phoneCodes'
import { initDeposit } from '../server'
import { formatDateForSubmission, validationRules, sanitizePhone } from '../utils'
import RedirectIframe from './RedirectIframe'

const CustomerForm = ({ query_params, theme = 'light' }) => {
  const { t } = useTranslation()

  const [form_data, setFormData] = useState(initialFormData)
  const [phone_code, setPhoneCode] = useState('+1')
  const [errors, setErrors] = useState({})
  const [is_submitting, setIsSubmitting] = useState(false)
  const [redirect_url, setRedirectUrl] = useState(null)

  useEffect(() => {
    if (form_data.country && phoneCodes[form_data.country]) {
      setPhoneCode(phoneCodes[form_data.country])
    }
  }, [form_data.country])

  const validate_form = () => {
    const new_errors = {}

    Object.keys(validationRules).forEach(field => {
      const value = form_data[field]
      const field_rules = validationRules[field]

      for (const rule of field_rules) {
        if (rule.test(value)) {
          new_errors[field] = rule.message
          break
        }
      }
    })

    const state_required_countries = ['US', 'CA', 'AU']
    if (state_required_countries.includes(form_data.country) && !form_data.state) {
      new_errors.state = 'validation.state.required_for_country'
    }

    if (!new_errors.phone) {
      const fullDigits = `${sanitizePhone(phone_code)}${sanitizePhone(form_data.phone)}`
      if (fullDigits.length < 8 || fullDigits.length > 15) {
        new_errors.phone = 'validation.phone.format'
      }
    }

    setErrors(new_errors)
    return Object.keys(new_errors).length === 0
  }

  const handle_input_change = (e) => {
    const { name } = e.target
    let { value } = e.target

    if (name === 'phone') {
      value = sanitizePhone(value).slice(0, 12)
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handle_submit = async (e) => {
    e.preventDefault()
    if (!validate_form()) return

    setIsSubmitting(true)

    try {
      const codeDigits = sanitizePhone(phone_code)
      const subscriberDigits = sanitizePhone(form_data.phone)
      const fullDigits = `${codeDigits}${subscriberDigits}`
      const full_phone_number = `+${fullDigits}`

      const submission_data = {
        ...form_data,
        dob: formatDateForSubmission(form_data.dob),
        phone: full_phone_number
      }

      const result = await initDeposit({
        customer: submission_data,
        session_id: query_params.session_id,
        return_url: query_params.return_url,
        client_id: query_params.client_id,
        locale: query_params.locale
      })

      if (result.redirectUrl) {
        setRedirectUrl(result.redirectUrl)
      } else {
        alert(t('form.submitSuccess'))
        setFormData(initialFormData)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert(t('form.submitError'))
    } finally {
      setIsSubmitting(false)
    }
  }

  if (redirect_url) {
    return <RedirectIframe redirect_url={redirect_url} theme={theme} />
  }

  const is_dark = theme === 'dark'
  const cx = (...classes) => classes.filter(Boolean).join(' ')

  const form_classes = cx(
    'flex w-full flex-col gap-6 px-5',
    'pb-[calc(32px+env(safe-area-inset-bottom,0px))]',
    'pt-[calc(40px+env(safe-area-inset-top,0px))]',
    'sm:px-6',
    'md:px-10 md:pt-10',
    'lg:pt-12',
    is_dark ? 'text-slate-100' : 'text-slate-900'
  )

  const row_classes = 'flex flex-col gap-5 md:flex-row md:gap-6'
  const group_classes = 'flex min-w-0 flex-1 flex-col'
  const label_classes = is_dark ? 'mb-2 text-sm font-medium text-slate-200' : 'mb-2 text-sm font-medium text-slate-700'

  const base_input_classes = 'w-full rounded-lg border-2 px-3.5 py-3 text-base transition focus:outline-none focus:ring-2 placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-80'
  const tone_input_classes = is_dark
    ? 'border-slate-600 bg-slate-800 text-slate-100 focus:border-emerald-400 focus:ring-emerald-300'
    : 'border-slate-200 bg-white text-slate-900 focus:border-indigo-600 focus:ring-indigo-200'
  const error_input_classes = 'border-red-500 focus:border-red-500 focus:ring-red-300'
  const error_message_classes = 'mt-1 text-xs font-semibold text-red-500'

  const input_class = (field) => cx(
    base_input_classes,
    tone_input_classes,
    errors[field] && error_input_classes
  )

  const phone_container_classes = cx(
    'flex items-center rounded-lg border-2 transition focus-within:outline-none focus-within:ring-2',
    is_dark
      ? 'border-slate-600 bg-slate-800 focus-within:border-emerald-400 focus-within:ring-emerald-300'
      : 'border-slate-200 bg-white focus-within:border-indigo-600 focus-within:ring-indigo-200',
    errors.phone && 'border-red-500 focus-within:border-red-500 focus-within:ring-red-300'
  )

  const phone_code_classes = is_dark
    ? 'flex min-w-[64px] items-center justify-center border-r border-slate-600 bg-slate-700 px-3 py-3 text-sm font-semibold text-slate-100'
    : 'flex min-w-[64px] items-center justify-center border-r border-slate-200 bg-slate-100 px-3 py-3 text-sm font-semibold text-slate-600'

  const phone_input_classes = cx(
    'flex-1 border-none bg-transparent px-3.5 py-3 text-base focus:outline-none placeholder:text-slate-400',
    is_dark ? 'text-slate-100' : 'text-slate-900'
  )

  const submit_button_classes = cx(
    'mt-2 w-full rounded-lg px-4 py-3 text-base font-semibold transition focus:outline-none focus:ring-2',
    'disabled:cursor-not-allowed disabled:opacity-70',
    is_dark
      ? 'bg-[#00f4a1] text-black hover:bg-[#00d994] focus:ring-emerald-200'
      : 'bg-[#030314] text-white hover:bg-[#0f0f29] focus:ring-indigo-200'
  )

  const handle_date_click = (event) => {
    event.currentTarget.showPicker?.()
  }

  const handle_date_mouse_down = (event) => {
    event.preventDefault()
    event.currentTarget.focus()
    event.currentTarget.showPicker?.()
  }

  const handle_date_key_down = (event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault()
      event.currentTarget.showPicker?.()
    }
  }

  return (
    <form onSubmit={handle_submit} className={form_classes}>
      <div className={row_classes}>
        <div className={group_classes}>
          <label className={label_classes} htmlFor="country">{t('form.country')} *</label>
          <select
            id="country"
            name="country"
            value={form_data.country}
            onChange={handle_input_change}
            className={input_class('country')}
            required
          >
            <option value="">{t('form.selectCountry')}</option>
            {countries.map(country => (
              <option key={country.code} value={country.code}>
                {country.code} - {country.name}
              </option>
            ))}
          </select>
          {errors.country && <span className={error_message_classes}>{t(errors.country)}</span>}
        </div>
      </div>

      <div className={row_classes}>
        <div className={group_classes}>
          <label className={label_classes} htmlFor="first_name">{t('form.firstName')} *</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={form_data.first_name}
            onChange={handle_input_change}
            maxLength="25"
            className={input_class('first_name')}
            required
          />
          {errors.first_name && <span className={error_message_classes}>{t(errors.first_name)}</span>}
        </div>

        <div className={group_classes}>
          <label className={label_classes} htmlFor="last_name">{t('form.lastName')} *</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={form_data.last_name}
            onChange={handle_input_change}
            maxLength="25"
            className={input_class('last_name')}
            required
          />
          {errors.last_name && <span className={error_message_classes}>{t(errors.last_name)}</span>}
        </div>
      </div>

      <div className={row_classes}>
        <div className={group_classes}>
          <label className={label_classes} htmlFor="dob">{t('form.dob')} *</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={form_data.dob}
            onChange={handle_input_change}
            min="1900-01-01"
            max={new Date().toISOString().split('T')[0]}
            className={cx(
              input_class('dob'),
              'datepicker-input',
              is_dark && 'datepicker-input--dark'
            )}
            onMouseDown={handle_date_mouse_down}
            onClick={handle_date_click}
            onFocus={handle_date_click}
            onKeyDown={handle_date_key_down}
            required
          />
          {errors.dob && <span className={error_message_classes}>{t(errors.dob)}</span>}
        </div>

        <div className={group_classes}>
          <label className={label_classes} htmlFor="email">{t('form.email')} *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form_data.email}
            onChange={handle_input_change}
            maxLength="50"
            className={input_class('email')}
            required
          />
          {errors.email && <span className={error_message_classes}>{t(errors.email)}</span>}
        </div>
      </div>

      <div className={row_classes}>
        <div className={group_classes}>
          <label className={label_classes} htmlFor="phone">{t('form.phone')} *</label>
          <div className={phone_container_classes}>
            <div className={phone_code_classes}>
              {phone_code}
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form_data.phone}
              onChange={handle_input_change}
              placeholder={t('form.phonePlaceholder')}
              inputMode="numeric"
              pattern="[0-9]*"
              autoComplete="tel"
              className={phone_input_classes}
              required
            />
          </div>
          {errors.phone && <span className={error_message_classes}>{t(errors.phone)}</span>}
        </div>

        <div className={group_classes}>
          <label className={label_classes} htmlFor="zip">{t('form.postalCode')} *</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={form_data.zip}
            onChange={handle_input_change}
            maxLength="12"
            className={input_class('zip')}
            required
          />
          {errors.zip && <span className={error_message_classes}>{t(errors.zip)}</span>}
        </div>
      </div>

      <div className={row_classes}>
        <div className={group_classes}>
          <label className={label_classes} htmlFor="state">
            {t('form.stateProvince')}
            {['US', 'CA', 'AU'].includes(form_data.country) && ' *'}
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={form_data.state}
            onChange={handle_input_change}
            maxLength="3"
            placeholder={t('form.statePlaceholder')}
            className={input_class('state')}
            required={['US', 'CA', 'AU'].includes(form_data.country)}
          />
          {errors.state && <span className={error_message_classes}>{t(errors.state)}</span>}
        </div>

        <div className={group_classes}>
          <label className={label_classes} htmlFor="city">{t('form.city')} *</label>
          <input
            type="text"
            id="city"
            name="city"
            value={form_data.city}
            onChange={handle_input_change}
            maxLength="50"
            className={input_class('city')}
            required
          />
          {errors.city && <span className={error_message_classes}>{t(errors.city)}</span>}
        </div>
      </div>

      <div className={row_classes}>
        <div className="flex w-full flex-col">
          <label className={label_classes} htmlFor="address">{t('form.address')} *</label>
          <input
            type="text"
            id="address"
            name="address"
            value={form_data.address}
            onChange={handle_input_change}
            maxLength="100"
            className={input_class('address')}
            required
          />
          {errors.address && <span className={error_message_classes}>{t(errors.address)}</span>}
        </div>
      </div>

      <button
        type="submit"
        className={submit_button_classes}
        disabled={is_submitting}
      >
        {is_submitting ? t('form.submitting') : t('form.submit')}
      </button>
    </form>
  )
}

export default CustomerForm
