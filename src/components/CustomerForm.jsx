import { useState } from 'react'

import { submitCustomerForm } from '../server'
import { countries } from '../constants/countries'
import { initialFormData } from '../constants/form'
import { themes } from '../constants/themes'
import { validationRules, formatDateForSubmission } from '../utils'

import './CustomerForm.css'

const CustomerForm = ({ queryParams, theme = 'light' }) => {
  console.log(queryParams);
  
  const [formData, setFormData] = useState(initialFormData)

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)


  const validateForm = () => {
    const newErrors = {}

    Object.keys(validationRules).forEach(field => {
      const value = formData[field]
      const fieldRules = validationRules[field]
      
      for (const rule of fieldRules) {
        if (rule.test(value)) {
          newErrors[field] = rule.message
          break
        }
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
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


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return;

    setIsSubmitting(true)

    try {
      const submissionData = {
        ...formData,
        dob: formatDateForSubmission(formData.dob),
        phone: parseInt(formData.phone, 10)
      }

      const result = await submitCustomerForm(submissionData)
      console.log('Form submitted successfully:', result)
      alert('Form submitted successfully!')
      
      setFormData(initialFormData)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Error submitting form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const currentTheme = themes[theme]
  
  return (
    <div 
      className={`form-container ${theme}-theme`}
      style={{
        backgroundColor: currentTheme.formBackground,
        color: currentTheme.textColor
      }}
    >
      <form onSubmit={handleSubmit} className="customer-form">  
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="country">Country *</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
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
              value={formData.first_name}
              onChange={handleInputChange}
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
              value={formData.last_name}
              onChange={handleInputChange}
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
              value={formData.dob}
              onChange={handleInputChange}
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
              value={formData.email}
              onChange={handleInputChange}
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
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="e.g., 44201112222"
              className={errors.phone ? 'error' : ''}
              required
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="zip">Postal Code *</label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleInputChange}
              maxLength="12"
              className={errors.zip ? 'error' : ''}
              required
            />
            {errors.zip && <span className="error-message">{errors.zip}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="state">State/Province *</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              maxLength="3"
              placeholder="e.g., CA, NY, JS"
              className={errors.state ? 'error' : ''}
              required
            />
            {errors.state && <span className="error-message">{errors.state}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="city">City *</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
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
              value={formData.address}
              onChange={handleInputChange}
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
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default CustomerForm