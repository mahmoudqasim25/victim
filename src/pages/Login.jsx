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

const loginHighlights = [
  {
    title: 'Track progress',
    description: 'Review application activity, interview updates, and recruiter follow-ups in one place.',
  },
  {
    title: 'Stay prepared',
    description: 'Keep your candidate profile ready so you can respond quickly when opportunities move.',
  },
]

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
      title="Access your candidate account"
      description="Use the same professional sign-in flow across your recruitment experience to review applications, updates, and next steps."
      formTitle="Log in"
      formDescription="Enter your account details to continue. Demo access is available with the current mock credentials."
      highlights={loginHighlights}
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
              Signing you in now. Please keep this window open while we confirm your access.
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
            aria-describedby={errors.password ? 'password-error password-helper' : 'password-helper'}
          />
          <p id="password-helper" style={authFormStyles.helperText}>
            For demo access, use the current mock password assigned to your test account.
          </p>
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
          {isSubmitting ? 'Signing in...' : 'Log in to continue'}
        </button>

        <p style={authFormStyles.secondaryText}>
          New here? Select Create profile above to set up your candidate account.
        </p>
      </form>
    </AuthFormCard>
  )
}

export default Login
