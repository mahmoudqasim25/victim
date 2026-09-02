import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const pageStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: '20px',
};

const cardStyle = {
  width: '100%',
  maxWidth: '420px',
  padding: '32px',
  border: '1px solid #d1d5db',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  backgroundColor: '#ffffff',
};

const headingStyle = {
  margin: '0 0 8px',
  textAlign: 'center',
};

const descriptionStyle = {
  margin: '0 0 24px',
  textAlign: 'center',
  color: '#4b5563',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
};

const fieldGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  textAlign: 'left',
};

const labelStyle = {
  fontWeight: '600',
  color: '#111827',
};

const inputStyle = {
  padding: '12px',
  border: '1px solid #9ca3af',
  borderRadius: '8px',
  fontSize: '16px',
};

const errorTextStyle = {
  margin: 0,
  color: '#b91c1c',
  fontSize: '14px',
};

const buttonStyle = {
  padding: '12px',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: '#2563eb',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  cursor: 'pointer',
};

const disabledButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#93c5fd',
  cursor: 'not-allowed',
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
    <div style={pageStyle}>
      <section style={cardStyle}>
        <h1 style={headingStyle}>Log in</h1>
        <p style={descriptionStyle}>Enter your email and password to continue.</p>

        <form style={formStyle} onSubmit={handleSubmit} noValidate>
          <div style={fieldGroupStyle}>
            <label htmlFor="email" style={labelStyle}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              style={inputStyle}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email ? (
              <p id="email-error" style={errorTextStyle}>
                {errors.email}
              </p>
            ) : null}
          </div>

          <div style={fieldGroupStyle}>
            <label htmlFor="password" style={labelStyle}>
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              style={inputStyle}
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? 'password-error' : undefined}
            />
            {errors.password ? (
              <p id="password-error" style={errorTextStyle}>
                {errors.password}
              </p>
            ) : null}
          </div>

          {authError ? <p style={errorTextStyle}>{authError}</p> : null}

          <button type="submit" style={isSubmitting ? disabledButtonStyle : buttonStyle} disabled={isSubmitting}>
            {isSubmitting ? 'Signing in...' : 'Log in'}
          </button>
        </form>
      </section>
    </div>
  );
}

export default Login;
