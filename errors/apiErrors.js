const apiErrors = {
    WRONG_CREDENTIALS: {
        userMessage: 'Wrong credentials : Please check your email and/or password.', 
        httpCode: 401,
        internalErrorCode: 40001
    },
    INVALID_JWT_TOKEN: {
        userMessage: 'Invalid JWT Token, please login again.', 
        httpCode: 401,
        internalErrorCode: 40002
    },
    JWT_TOKEN_REQUIRED: {
        userMessage: 'No JWT Token provided, please login again.', 
        httpCode: 401,
        internalErrorCode: 40003
    },
  };

  export default apiErrors