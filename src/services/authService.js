const USE_MOCK_AUTH = true;
const AUTH_LOGIN_URL = 'abc.io/auth/login';

const MOCK_VALID_CREDENTIALS = {
  email: 'demo@abc.io',
  password: 'password123',
};

const MOCK_JWT =
  'mock-jwt-token.header.payload.signature';

const buildInvalidCredentialsError = () => ({
  error: {
    code: 'INVALID_CREDENTIALS',
    message: 'Invalid email or password.',
  },
});

const buildSignupFailure = (message = 'We could not create your account right now. Please review your details and try again.') => ({
  error: {
    code: 'SIGNUP_FAILED',
    message,
  },
});

const loginWithMock = async (email, password) => {
  if (
    email === MOCK_VALID_CREDENTIALS.email &&
    password === MOCK_VALID_CREDENTIALS.password
  ) {
    return {
      token: MOCK_JWT,
      user: {
        email: MOCK_VALID_CREDENTIALS.email,
      },
    };
  }

  return buildInvalidCredentialsError();
};

const signupWithMock = async ({ name, email, password, gender }) => {
  const normalizedEmail = email.trim().toLowerCase();

  if (normalizedEmail.includes('fail')) {
    return buildSignupFailure();
  }

  return {
    success: true,
    message: 'Account created in demo mode. You can now head to the login page and sign in when backend support is ready.',
    user: {
      name: name.trim(),
      email: normalizedEmail,
      gender,
    },
    credentials: {
      email: normalizedEmail,
      password,
    },
  };
};

const loginWithApi = async (email, password) => {
  const response = await fetch(AUTH_LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    return {
      error: {
        code: data?.error?.code || 'AUTHENTICATION_FAILED',
        message: data?.error?.message || 'Authentication failed.',
      },
    };
  }

  return {
    token: data.token,
    user: data.user,
  };
};

/**
 * Login request contract:
 * {
 *   email: string,
 *   password: string
 * }
 *
 * Successful response contract:
 * {
 *   token: string,
 *   user?: {
 *     email: string
 *   }
 * }
 *
 * Error response contract:
 * {
 *   error: {
 *     code: string,
 *     message: string
 *   }
 * }
 */
export const login = async (email, password) => {
  if (USE_MOCK_AUTH) {
    return loginWithMock(email, password);
  }

  return loginWithApi(email, password);
};

/**
 * Signup request contract:
 * {
 *   name: string,
 *   email: string,
 *   password: string,
 *   gender: string
 * }
 *
 * Successful response contract:
 * {
 *   success: true,
 *   message: string,
 *   user: {
 *     name: string,
 *     email: string,
 *     gender: string
 *   },
 *   credentials: {
 *     email: string,
 *     password: string
 *   }
 * }
 *
 * Error response contract:
 * {
 *   error: {
 *     code: string,
 *     message: string
 *   }
 * }
 */
export const signup = async (payload) => signupWithMock(payload);

export { AUTH_LOGIN_URL, USE_MOCK_AUTH };
