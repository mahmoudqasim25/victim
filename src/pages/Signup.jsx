import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import AuthFormCard from '../components/AuthFormCard'
import { shellStyles, tokens } from '../components/designSystem'

const signupStyles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  statusStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
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
  inputError: {
    borderColor: tokens.colors.danger,
    boxShadow: `0 0 0 3px ${tokens.colors.warningSurface}`,
  },
  helperText: {
    margin: 0,
    color: tokens.colors.textSubtle,
    fontSize: '14px',
    lineHeight: 1.5,
  },
  statusMessage: {
    margin: 0,
    padding: '12px 14px',
    borderRadius: tokens.radii.sm,
    fontSize: '14px',
    lineHeight: 1.5,
    border: `1px solid ${tokens.colors.border}`,
  },
  errorMessage: {
    color: tokens.colors.danger,
    backgroundColor: '#fef2f2',
    borderColor: '#fecaca',
  },
  successMessage: {
    color: tokens.colors.success,
    backgroundColor: '#ecfdf5',
    borderColor: '#a7f3d0',
  },
  infoMessage: {
    color: tokens.colors.primaryStrong,
    backgroundColor: tokens.colors.primarySoft,
    borderColor: tokens.colors.borderStrong,
  },
  button: {
    ...shellStyles.primaryButton,
    width: '100%',
    border: 'none',
    cursor: 'pointer',
    minHeight: '48px',
    fontSize: '1rem',
  },
  disabledButton: {
    ...shellStyles.primaryButton,
    width: '100%',
    cursor: 'not-allowed',
    opacity: 0.65,
    boxShadow: 'none',
    minHeight: '48px',
    fontSize: '1rem',
  },
  secondaryText: {
    margin: 0,
    textAlign: 'center',
    color: tokens.colors.textSubtle,
    fontSize: '14px',
    lineHeight: 1.6,
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

const signupHighlights = [
  {
    title: 'Create once',
    description: 'Set up your candidate account with the current profile fields and return whenever roles progress.',
  },
  {
    title: 'Stay informed',
    description: 'Receive application-related updates through the email address tied to your account.',
  },
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
      nextErrors.name = 'Enter your full name so recruiters know who is applying.'
    }

    if (!trimmedEmail) {
      nextErrors.email = 'Enter an email address for account updates and sign-in.'
    } else if (!validateEmail(trimmedEmail)) {
      nextErrors.email = 'Check the email format and try again.'
    }

    if (!formValues.password) {
      nextErrors.password = 'Create a password with at least 8 characters.'
    } else if (!validatePassword(formValues.password)) {
      nextErrors.password = 'Your password must be at least 8 characters long.'
    }

    if (!formValues.gender) {
      nextErrors.gender = 'Select the option that best matches you.'
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
      currentView="signup"
      title="Create your candidate account"
      description="Start with the current profile details to manage applications, stay aligned with recruiters, and keep your hiring activity organized."
      formTitle="Create profile"
      formDescription="Complete the fields below to open your account. Guided help is optional and only explains the process."
      highlights={signupHighlights}
    >
      <form style={signupStyles.form} onSubmit={handleSubmit} noValidate>
        <div style={signupStyles.statusStack}>
          {submitError ? (
            <p role="alert" style={{ ...signupStyles.statusMessage, ...signupStyles.errorMessage }}>
              {submitError}
            </p>
          ) : null}
          {submitSuccess ? (
            <p role="status" style={{ ...signupStyles.statusMessage, ...signupStyles.successMessage }}>
              {submitSuccess}
            </p>
          ) : null}
          {isSubmitting ? (
            <p style={{ ...signupStyles.statusMessage, ...signupStyles.infoMessage }}>
              Creating your profile now. Please keep this window open while we save your details.
            </p>
          ) : null}
        </div>

        <div style={signupStyles.fieldGroup}>
          <label htmlFor="name" style={signupStyles.label}>
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formValues.name}
            onChange={handleChange}
            style={{
              ...signupStyles.input,
              ...(errors.name ? signupStyles.inputError : null),
            }}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error name-helper' : 'name-helper'}
          />
          <p id="name-helper" style={signupStyles.helperText}>
            Enter the name you want associated with your applications.
          </p>
          {errors.name ? (
            <p id="name-error" role="alert" style={{ ...signupStyles.statusMessage, ...signupStyles.errorMessage }}>
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
            style={{
              ...signupStyles.input,
              ...(errors.email ? signupStyles.inputError : null),
            }}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'signup-email-error signup-email-helper' : 'signup-email-helper'}
          />
          <p id="signup-email-helper" style={signupStyles.helperText}>
            We will use this for sign-in and important application updates.
          </p>
          {errors.email ? (
            <p
              id="signup-email-error"
              role="alert"
              style={{ ...signupStyles.statusMessage, ...signupStyles.errorMessage }}
            >
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
            style={{
              ...signupStyles.input,
              ...(errors.password ? signupStyles.inputError : null),
            }}
            aria-invalid={Boolean(errors.password)}
            aria-describedby={errors.password ? 'signup-password-error helper-password' : 'helper-password'}
          />
          <p id="helper-password" style={signupStyles.helperText}>
            Use at least 8 characters. This password secures your account and does not affect hiring decisions.
          </p>
          {errors.password ? (
            <p
              id="signup-password-error"
              role="alert"
              style={{ ...signupStyles.statusMessage, ...signupStyles.errorMessage }}
            >
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
            style={{
              ...signupStyles.input,
              ...(errors.gender ? signupStyles.inputError : null),
            }}
            aria-invalid={Boolean(errors.gender)}
            aria-describedby={errors.gender ? 'gender-error gender-helper' : 'gender-helper'}
          >
            {genderOptions.map((option) => (
              <option key={option.value || 'placeholder'} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p id="gender-helper" style={signupStyles.helperText}>
            This field remains part of the current signup flow and completes your profile setup.
          </p>
          {errors.gender ? (
            <p id="gender-error" role="alert" style={{ ...signupStyles.statusMessage, ...signupStyles.errorMessage }}>
              {errors.gender}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          style={isSubmitting ? signupStyles.disabledButton : signupStyles.button}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Creating profile...' : 'Create your profile'}
        </button>

        <p style={signupStyles.secondaryText}>
          Already have an account? Select Log in above to return to sign-in.
        </p>
      </form>
    </AuthFormCard>
  )
}

export default Signup
