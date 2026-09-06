import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import AuthFormCard from '../components/AuthFormCard'
import { shellStyles, tokens } from '../components/designSystem'

const signupStyles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    textAlign: 'left',
  },
  label: {
    fontWeight: 600,
    color: tokens.colors.text,
  },
  input: {
    padding: '12px 14px',
    border: `1px solid ${tokens.colors.border}`,
    borderRadius: tokens.radii.xs,
    fontSize: '16px',
    color: tokens.colors.text,
    backgroundColor: tokens.colors.surface,
  },
  helperText: {
    margin: 0,
    color: tokens.colors.textSubtle,
    fontSize: '14px',
    lineHeight: 1.5,
  },
  errorText: {
    margin: 0,
    color: tokens.colors.danger,
    fontSize: '14px',
  },
  successText: {
    margin: 0,
    color: tokens.colors.success,
    fontSize: '14px',
  },
  button: {
    ...shellStyles.primaryButton,
    width: '100%',
    border: 'none',
    cursor: 'pointer',
  },
  disabledButton: {
    ...shellStyles.primaryButton,
    width: '100%',
    cursor: 'not-allowed',
    opacity: 0.65,
    boxShadow: 'none',
  },
  footer: {
    textAlign: 'center',
    color: tokens.colors.textMuted,
    margin: 0,
  },
  footerLink: {
    color: tokens.colors.primaryStrong,
    fontWeight: 700,
    textDecoration: 'none',
  },
}

const validateEmail = (email) => /\S+@\S+\.\S+/.test(email)

const validatePassword = (password) => password.length >= 8

const genderOptions = [
  { value: '', label: 'Select a gender' },
  { value: 'woman', label: 'Woman' },
  { value: 'man', label: 'Man' },
  { value: 'non-binary', label: 'Non-binary' },
  { value: 'prefer-not-to-say', label: 'Prefer not to say' },
]

function Signup() {
  const navigate = useNavigate()
  const { signup } = useAuth()
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
  })
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const nextErrors = {}
    const trimmedName = formValues.name.trim()
    const trimmedEmail = formValues.email.trim()

    if (!trimmedName) {
      nextErrors.name = 'Please enter your name.'
    }

    if (!trimmedEmail) {
      nextErrors.email = 'Please enter your email address.'
    } else if (!validateEmail(trimmedEmail)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!formValues.password) {
      nextErrors.password = 'Please create a password.'
    } else if (!validatePassword(formValues.password)) {
      nextErrors.password = 'Password must be at least 8 characters long.'
    }

    if (!formValues.gender) {
      nextErrors.gender = 'Please select a gender.'
    }

    setErrors(nextErrors)
    setSubmitError('')
    setSubmitSuccess('')

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    setIsSubmitting(true)

    try {
      const result = await signup({
        name: trimmedName,
        email: trimmedEmail,
        password: formValues.password,
        gender: formValues.gender,
      })

      if (result?.error) {
        setSubmitError(result.error.message)
        return
      }

      setSubmitSuccess(result?.message || 'Account created successfully.')
      navigate('/')
    } catch {
      setSubmitError('We could not create your account right now. Please try again in a moment.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AuthFormCard
      title="Create your candidate profile"
      description="Set up your account to track opportunities and stay connected with the recruitment team."
    >
      <form style={signupStyles.form} onSubmit={handleSubmit} noValidate>
        <div style={signupStyles.fieldGroup}>
          <label htmlFor="name" style={signupStyles.label}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formValues.name}
            onChange={handleChange}
            style={signupStyles.input}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name ? (
            <p id="name-error" style={signupStyles.errorText}>
              {errors.name}
            </p>
          ) : null}
        </div>

        <div style={signupStyles.fieldGroup}>
          <label htmlFor="signup-email" style={signupStyles.label}>
            Email
          </label>
          <input
            id="signup-email"
            name="email"
            type="email"
            autoComplete="email"
            value={formValues.email}
            onChange={handleChange}
            style={signupStyles.input}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'signup-email-error' : undefined}
          />
          {errors.email ? (
            <p id="signup-email-error" style={signupStyles.errorText}>
              {errors.email}
            </p>
          ) : null}
        </div>

        <div style={signupStyles.fieldGroup}>
          <label htmlFor="signup-password" style={signupStyles.label}>
            Password
          </label>
          <input
            id="signup-password"
            name="password"
            type="password"
            autoComplete="new-password"
            value={formValues.password}
            onChange={handleChange}
            style={signupStyles.input}
            aria-invalid={Boolean(errors.password)}
            aria-describedby={errors.password ? 'signup-password-error helper-password' : 'helper-password'}
          />
          <p id="helper-password" style={signupStyles.helperText}>
            Use at least 8 characters.
          </p>
          {errors.password ? (
            <p id="signup-password-error" style={signupStyles.errorText}>
              {errors.password}
            </p>
          ) : null}
        </div>

        <div style={signupStyles.fieldGroup}>
          <label htmlFor="gender" style={signupStyles.label}>
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formValues.gender}
            onChange={handleChange}
            style={signupStyles.input}
            aria-invalid={Boolean(errors.gender)}
            aria-describedby={errors.gender ? 'gender-error' : undefined}
          >
            {genderOptions.map((option) => (
              <option key={option.value || 'placeholder'} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.gender ? (
            <p id="gender-error" style={signupStyles.errorText}>
              {errors.gender}
            </p>
          ) : null}
        </div>

        {submitError ? <p style={signupStyles.errorText}>{submitError}</p> : null}
        {submitSuccess ? <p style={signupStyles.successText}>{submitSuccess}</p> : null}

        <button
          type="submit"
          style={isSubmitting ? signupStyles.disabledButton : signupStyles.button}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Creating account...' : 'Create profile'}
        </button>
      </form>

      <p style={signupStyles.footer}>
        Already have an account?{' '}
        <Link to="/login" style={signupStyles.footerLink}>
          Log in
        </Link>
      </p>
    </AuthFormCard>
  )
}

export default Signup
