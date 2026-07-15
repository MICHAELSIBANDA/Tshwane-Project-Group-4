import { useState } from 'react'
import './Register.css'

const initialForm = {
  firstName: '',
  surname: '',
  cellNumber: '',
  idNumber: '',
  email: '',
  password: '',
  confirmPassword: '',
}

function validate(form) {
  const errors = {}

  if (!form.firstName.trim()) errors.firstName = 'Enter a first name.'
  if (!form.surname.trim()) errors.surname = 'Enter a surname.'

  if (!form.cellNumber.trim()) {
    errors.cellNumber = 'Enter a cell number.'
  } else if (!/^0\d{9}$/.test(form.cellNumber.trim())) {
    errors.cellNumber = 'Use a 10-digit number starting with 0.'
  }

  if (!form.idNumber.trim()) {
    errors.idNumber = 'Enter an ID number.'
  } else if (!/^\d{13}$/.test(form.idNumber.trim())) {
    errors.idNumber = 'ID number must be 13 digits.'
  }

  if (!form.email.trim()) {
    errors.email = 'Enter an email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!form.password) {
    errors.password = 'Create a password.'
  } else if (form.password.length < 8) {
    errors.password = 'Use at least 8 characters.'
  }

  if (form.confirmPassword !== form.password || !form.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match.'
  }

  return errors
}

export default function Register() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      // Replace this with your real registration API call.
      console.log('Registering passenger:', form)
      setSubmitted(true)
    }
  }

  return (
    <div className="register-screen">
      <div className="register-overlay" />

      <main className="register-card" aria-labelledby="register-heading">
        <div className="card-header">
          <div className="destination-sign">
            <span className="destination-dot" />
            REGISTER&nbsp;·&nbsp;NEW&nbsp;ACCOUNT
          </div>
          <h1 id="register-heading">Join Tshwane Bus Services</h1>
          <p className="card-subtitle">
            Create an account to book routes, load your travel card and track your bus in real time.
          </p>
        </div>

        {submitted ? (
          <div className="success-panel" role="status">
            <h2>You&apos;re on board</h2>
            <p>Your account request has been submitted. Check your email to confirm and start riding.</p>
            <button type="button" className="ghost-button" onClick={() => { setForm(initialForm); setSubmitted(false) }}>
              Register another passenger
            </button>
          </div>
        ) : (
          <form className="register-form" onSubmit={handleSubmit} noValidate>
            <div className="field-row">
              <Field
                label="Name"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                error={errors.firstName}
                autoComplete="given-name"
                placeholder="Thabo"
              />
              <Field
                label="Surname"
                name="surname"
                value={form.surname}
                onChange={handleChange}
                error={errors.surname}
                autoComplete="family-name"
                placeholder="Mokoena"
              />
            </div>

            <div className="field-row">
              <Field
                label="Cell number"
                name="cellNumber"
                value={form.cellNumber}
                onChange={handleChange}
                error={errors.cellNumber}
                autoComplete="tel"
                placeholder="0821234567"
                inputMode="numeric"
              />
              <Field
                label="ID number"
                name="idNumber"
                value={form.idNumber}
                onChange={handleChange}
                error={errors.idNumber}
                placeholder="13-digit ID number"
                inputMode="numeric"
              />
            </div>

            <Field
              label="Email address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              autoComplete="email"
              placeholder="thabo.mokoena@email.com"
              full
            />

            <div className="field-row">
              <Field
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                error={errors.password}
                autoComplete="new-password"
                placeholder="At least 8 characters"
              />
              <Field
                label="Confirm password"
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
                autoComplete="new-password"
                placeholder="Re-enter password"
              />
            </div>

            <button type="submit" className="primary-button">
              Create account
            </button>

            <p className="login-hint">
              Already registered? <a href="#login">Log in</a>
            </p>
          </form>
        )}
      </main>
    </div>
  )
}

function Field({ label, name, error, full, ...inputProps }) {
  return (
    <label className={`field ${full ? 'field-full' : ''}`} htmlFor={name}>
      <span className="field-label">{label}</span>
      <input
        id={name}
        name={name}
        className={`field-input ${error ? 'field-input-error' : ''}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        {...inputProps}
      />
      {error && (
        <span className="field-error" id={`${name}-error`}>
          {error}
        </span>
      )}
    </label>
  )
}
