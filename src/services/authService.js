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

export { AUTH_LOGIN_URL, USE_MOCK_AUTH };
