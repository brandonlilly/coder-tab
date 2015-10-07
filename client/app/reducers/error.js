function errorReducer(errorState = null, action) {
  const { type, error } = action;

  switch(type) {
    case 'RESET_ERROR_MESSAGE':
      return error;
    default:
      return errorState;
  }
}

export default errorReducer;
