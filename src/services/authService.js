const USE_MOCK_AUTH = true;
const AUTH_LOGIN_URL = 'abc.io/auth/login';

const MOCK_VALID_CREDENTIALS = {
  email: 'demo@abc.io',
  password: 'password123',
};

const MOCK_JWT =
  'mock-jwt-token.header.payload.signature';

export const SIGNUP_ERROR_CODES = {
  validation: 'SIGNUP_VALIDATION_ERROR',
  business: 'SIGNUP_BUSINESS_ERROR',
  system: 'SIGNUP_SYSTEM_ERROR',
};

const buildInvalidCredentialsError = () => ({
  error: {
    code: 'INVALID_CREDENTIALS',
    message: 'Invalid email or password.',
  },
});

const buildSignupError = (type, message, details) => ({
  success: false,
  error: {
    code: SIGNUP_ERROR_CODES[type],
    message,
    details,
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

const signupWithMock = async ({ email, password, confirmPassword }) => {
  if (!email || !password || !confirmPassword) {
    return buildSignupError(
      'validation',
      'Email, password, and confirmation are required.',
      {
        fields: ['email', 'password', 'confirmPassword'],
      },
    );
  }

  if (password !== confirmPassword) {
    return buildSignupError(
      'validation',
      'Passwords do not match.',
      {
        fields: ['password', 'confirmPassword'],
      },
    );
  }

  if (email === 'existing@abc.io') {
    return buildSignupError(
      'business',
      'An account already exists for this email.',
      {
        field: 'email',
      },
    );
  }

  if (email === 'system@abc.io') {
    return buildSignupError(
      'system',
      'Signup is temporarily unavailable.',
    );
  }

  return {
    success: true,
    user: {
      email,
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
 *   email: string,
 *   password: string,
 *   confirmPassword: string
 * }
 *
 * Successful response contract:
 * {
 *   success: true,
 *   user?: {
 *     email: string
 *   }
 * }
 *
 * Error response contract:
 * {
 *   success: false,
 *   error: {
 *     code: 'SIGNUP_VALIDATION_ERROR' | 'SIGNUP_BUSINESS_ERROR' | 'SIGNUP_SYSTEM_ERROR',
 *     message: string,
 *     details?: {
 *       fields?: string[],
 *       field?: string
 *     }
 *   }
 * }
 */
export const signup = async (payload) => signupWithMock(payload);

export { AUTH_LOGIN_URL, USE_MOCK_AUTH };
