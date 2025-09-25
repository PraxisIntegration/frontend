import { useState, useEffect } from 'react'

import { countries } from '../constants/countries'
import { initialFormData } from '../constants/form'
import { themes } from '../constants/themes'
import { phoneCodes } from '../constants/phoneCodes'
import { initDeposit } from '../server'
import { formatDateForSubmission, validationRules } from '../utils'
import RedirectIframe from './RedirectIframe'

import './CustomerForm.css'

const CustomerForm = ({ query_params, theme = 'light' }) => {
  console.log(query_params);
  
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
      new_errors.state = 'State/Province is required for US, CA and AU'
    }

    setErrors(new_errors)
    return Object.keys(new_errors).length === 0
  }

  const handle_input_change = (e) => {
    const { name, value } = e.target
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
    if (!validate_form()) return;

    setIsSubmitting(true)

    try {
      const full_phone_number = phone_code + form_data.phone
      
      const submission_data = {
        ...form_data,
        dob: formatDateForSubmission(form_data.dob),
        phone: parseInt(full_phone_number.replace('+', ''), 10)
      }

      const result = await initDeposit({
        customer: submission_data, 
        session_id: query_params.session_id,
        return_url: query_params.return_url,
        client_id: query_params.client_id
      })
      console.log('Form submitted successfully:', result)
      
      if (result.redirectUrl) {
        setRedirectUrl(result.redirectUrl)
      } else {
        alert('Form submitted successfully!')
        setFormData(initialFormData)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Error submitting form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const current_theme = themes[theme]
  
  if (redirect_url) {
    return <RedirectIframe redirect_url={redirect_url} theme={theme} />
  }
  
  return (
    <div 
      className={`form-container ${theme}-theme`}
      style={{
        backgroundColor: current_theme.formBackground,
        color: current_theme.textColor
      }}
    >
      <form onSubmit={handle_submit} className="customer-form">  
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="country">Country *</label>
            <select
              id="country"
              name="country"
              value={form_data.country}
              onChange={handle_input_change}
              className={errors.country ? 'error' : ''}
              required
            >
              <option value="">Select Country</option>
              {countries.map(country => (
                <option key={country.code} value={country.code}>
                  {country.code} - {country.name}
                </option>
              ))}
            </select>
            {errors.country && <span className="error-message">{errors.country}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="first_name">First Name *</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={form_data.first_name}
              onChange={handle_input_change}
              maxLength="25"
              className={errors.first_name ? 'error' : ''}
              required
            />
            {errors.first_name && <span className="error-message">{errors.first_name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="last_name">Last Name *</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={form_data.last_name}
              onChange={handle_input_change}
              maxLength="25"
              className={errors.last_name ? 'error' : ''}
              required
            />
            {errors.last_name && <span className="error-message">{errors.last_name}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="dob">Date of Birth *</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={form_data.dob}
              onChange={handle_input_change}
              min="1900-01-01"
              max={new Date().toISOString().split('T')[0]}
              className={errors.dob ? 'error' : ''}
              required
            />
            {errors.dob && <span className="error-message">{errors.dob}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form_data.email}
              onChange={handle_input_change}
              maxLength="50"
              className={errors.email ? 'error' : ''}
              required
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <div className={`phone-input-container ${errors.phone ? 'error' : ''}`}>
              <div className="phone-code-display">
                {phone_code}
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form_data.phone}
                onChange={handle_input_change}
                placeholder="e.g., 201112222"
                required
              />
            </div>
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="zip">Postal Code *</label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={form_data.zip}
              onChange={handle_input_change}
              maxLength="12"
              className={errors.zip ? 'error' : ''}
              required
            />
            {errors.zip && <span className="error-message">{errors.zip}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="state">
              State/Province 
              {['US', 'CA', 'AU'].includes(form_data.country) && ' *'}
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={form_data.state}
              onChange={handle_input_change}
              maxLength="3"
              placeholder="e.g., CA, NY, JS"
              className={errors.state ? 'error' : ''}
              required={['US', 'CA', 'AU'].includes(form_data.country)}
            />
            {errors.state && <span className="error-message">{errors.state}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="city">City *</label>
            <input
              type="text"
              id="city"
              name="city"
              value={form_data.city}
              onChange={handle_input_change}
              maxLength="50"
              className={errors.city ? 'error' : ''}
              required
            />
            {errors.city && <span className="error-message">{errors.city}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group full-width">
            <label htmlFor="address">Address *</label>
            <input
              type="text"
              id="address"
              name="address"
              value={form_data.address}
              onChange={handle_input_change}
              maxLength="100"
              className={errors.address ? 'error' : ''}
              required
            />
            {errors.address && <span className="error-message">{errors.address}</span>}
          </div>
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={is_submitting}
        >
          {is_submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default CustomerForm