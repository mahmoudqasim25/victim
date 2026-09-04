import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AuthFormCard from '../components/AuthFormCard';

const authFormStyles = {
  page: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  },
  card: {
    width: '100%',
    maxWidth: '420px',
    padding: '32px',
    border: '1px solid #d1d5db',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    backgroundColor: '#ffffff',
  },
  heading: {
    margin: '0 0 8px',
    textAlign: 'center',
  },
  description: {
    margin: '0 0 24px',
    textAlign: 'center',
    color: '#4b5563',
  },
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
    fontWeight: '600',
    color: '#111827',
  },
  input: {
    padding: '12px',
    border: '1px solid #9ca3af',
    borderRadius: '8px',
    fontSize: '16px',
  },
  errorText: {
    margin: 0,
    color: '#b91c1c',
    fontSize: '14px',
  },
  button: {
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  disabledButton: {
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#93c5fd',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'not-allowed',
  },
};

const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = {};
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!validateEmail(trimmedEmail)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!password) {
      nextErrors.password = 'Please enter your password.';
    }

    setErrors(nextErrors);
    setAuthError('');

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await login(trimmedEmail, password);

      if (result?.error) {
        setAuthError('Unable to sign in with those credentials. Please try again.');
        return;
      }

      navigate('/');
    } catch {
      setAuthError('Unable to sign in right now. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthFormCard title="Log in" description="Enter your email and password to continue." styles={authFormStyles}>
      <form style={authFormStyles.form} onSubmit={handleSubmit} noValidate>
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
            style={authFormStyles.input}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email ? (
            <p id="email-error" style={authFormStyles.errorText}>
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
            style={authFormStyles.input}
            aria-invalid={Boolean(errors.password)}
            aria-describedby={errors.password ? 'password-error' : undefined}
          />
          {errors.password ? (
            <p id="password-error" style={authFormStyles.errorText}>
              {errors.password}
            </p>
          ) : null}
        </div>

        {authError ? <p style={authFormStyles.errorText}>{authError}</p> : null}

        <button
          type="submit"
          style={isSubmitting ? authFormStyles.disabledButton : authFormStyles.button}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Signing in...' : 'Log in'}
        </button>
      </form>
    </AuthFormCard>
  );
}

export default Login;
