import { useState } from 'react';
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
  successText: {
    margin: 0,
    color: '#047857',
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

const validatePassword = (password) => password.length >= 8;

const genderOptions = [
  { value: '', label: 'Select a gender' },
  { value: 'woman', label: 'Woman' },
  { value: 'man', label: 'Man' },
  { value: 'non-binary', label: 'Non-binary' },
  { value: 'prefer-not-to-say', label: 'Prefer not to say' },
];

function Signup() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
  });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = {};
    const trimmedName = formValues.name.trim();
    const trimmedEmail = formValues.email.trim();

    if (!trimmedName) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!trimmedEmail) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!validateEmail(trimmedEmail)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formValues.password) {
      nextErrors.password = 'Please create a password.';
    } else if (!validatePassword(formValues.password)) {
      nextErrors.password = 'Password must be at least 8 characters long.';
    }

    if (!formValues.gender) {
      nextErrors.gender = 'Please select a gender.';
    }

    setErrors(nextErrors);
    setSubmitError('');
    setSubmitSuccess('');

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => {
        window.setTimeout(resolve, 400);
      });

      if (trimmedEmail.toLowerCase().includes('fail')) {
        setSubmitError('We could not create your account right now. Please review your details and try again.');
        return;
      }

      setSubmitSuccess('Account created in demo mode. You can now head to the login page and sign in when backend support is ready.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthFormCard title="Sign up" description="Enter your details to continue." styles={authFormStyles}>
      <form style={authFormStyles.form} onSubmit={handleSubmit} noValidate>
        <div style={authFormStyles.fieldGroup}>
          <label htmlFor="name" style={authFormStyles.label}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formValues.name}
            onChange={handleChange}
            style={authFormStyles.input}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name ? (
            <p id="name-error" style={authFormStyles.errorText}>
              {errors.name}
            </p>
          ) : null}
        </div>

        <div style={authFormStyles.fieldGroup}>
          <label htmlFor="signup-email" style={authFormStyles.label}>
            Email
          </label>
          <input
            id="signup-email"
            name="email"
            type="email"
            autoComplete="email"
            value={formValues.email}
            onChange={handleChange}
            style={authFormStyles.input}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'signup-email-error' : undefined}
          />
          {errors.email ? (
            <p id="signup-email-error" style={authFormStyles.errorText}>
              {errors.email}
            </p>
          ) : null}
        </div>

        <div style={authFormStyles.fieldGroup}>
          <label htmlFor="signup-password" style={authFormStyles.label}>
            Password
          </label>
          <input
            id="signup-password"
            name="password"
            type="password"
            autoComplete="new-password"
            value={formValues.password}
            onChange={handleChange}
            style={authFormStyles.input}
            aria-invalid={Boolean(errors.password)}
            aria-describedby={errors.password ? 'signup-password-error' : undefined}
          />
          {errors.password ? (
            <p id="signup-password-error" style={authFormStyles.errorText}>
              {errors.password}
            </p>
          ) : null}
        </div>

        <div style={authFormStyles.fieldGroup}>
          <label htmlFor="gender" style={authFormStyles.label}>
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formValues.gender}
            onChange={handleChange}
            style={authFormStyles.input}
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
            <p id="gender-error" style={authFormStyles.errorText}>
              {errors.gender}
            </p>
          ) : null}
        </div>

        {submitError ? <p style={authFormStyles.errorText}>{submitError}</p> : null}
        {submitSuccess ? <p style={authFormStyles.successText}>{submitSuccess}</p> : null}

        <button
          type="submit"
          style={isSubmitting ? authFormStyles.disabledButton : authFormStyles.button}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Creating account...' : 'Sign up'}
        </button>
      </form>
    </AuthFormCard>
  );
}

export default Signup;
