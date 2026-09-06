import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import AuthFormCard from '../components/AuthFormCard'
import { shellStyles, tokens } from '../components/designSystem'

const authFormStyles = {
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

function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [authError, setAuthError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const nextErrors = {}
    const trimmedEmail = email.trim()

    if (!trimmedEmail) {
      nextErrors.email = 'Enter the email address you used for your candidate account.'
    } else if (!validateEmail(trimmedEmail)) {
      nextErrors.email = 'Check the email format and try again.'
    }

    if (!password) {
      nextErrors.password = 'Enter your password to continue.'
    }

    setErrors(nextErrors)
    setAuthError('')

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    setIsSubmitting(true)

    try {
      const result = await login(trimmedEmail, password)

      if (result?.error) {
        setAuthError(result.error.message || 'We could not sign you in with those details.')
        return
      }

      navigate('/')
    } catch {
      setAuthError('We could not sign you in right now. Please try again in a moment.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AuthFormCard
      currentView="login"
      title="Welcome back"
      description="Log in to review your applications, track updates, and stay in sync with the hiring team."
    >
      <form style={authFormStyles.form} onSubmit={handleSubmit} noValidate>
        <div style={authFormStyles.statusStack}>
          {authError ? (
            <p role="alert" style={{ ...authFormStyles.statusMessage, ...authFormStyles.errorMessage }}>
              {authError}
            </p>
          ) : null}
          {isSubmitting ? (
            <p style={{ ...authFormStyles.statusMessage, ...authFormStyles.infoMessage }}>
              Signing you in now. Please keep this window open.
            </p>
          ) : null}
        </div>

        <div style={authFormStyles.fieldGroup}>
          <label htmlFor="email" style={authFormStyles.label}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            style={{
              ...authFormStyles.input,
              ...(errors.email ? authFormStyles.inputError : null),
            }}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error email-helper' : 'email-helper'}
          />
          <p id="email-helper" style={authFormStyles.helperText}>
            Use the same email address you registered with.
          </p>
          {errors.email ? (
            <p id="email-error" role="alert" style={{ ...authFormStyles.statusMessage, ...authFormStyles.errorMessage }}>
              {errors.email}
            </p>
          ) : null}
        </div>

        <div style={authFormStyles.fieldGroup}>
          <label htmlFor="password" style={authFormStyles.label}>
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            style={{
              ...authFormStyles.input,
              ...(errors.password ? authFormStyles.inputError : null),
            }}
            aria-invalid={Boolean(errors.password)}
            aria-describedby={errors.password ? 'password-error' : undefined}
          />
          {errors.password ? (
            <p
              id="password-error"
              role="alert"
              style={{ ...authFormStyles.statusMessage, ...authFormStyles.errorMessage }}
            >
              {errors.password}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          style={isSubmitting ? authFormStyles.disabledButton : authFormStyles.button}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Signing in...' : 'Log in to your account'}
        </button>

        <p style={authFormStyles.secondaryText}>
          Need to create an account instead? Use the navigation above to switch to profile setup.
        </p>
      </form>
    </AuthFormCard>
  )
}

export default Login
