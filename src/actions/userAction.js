export const onLoginAction = (data) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};

export const onRegister = (data) => {
  return {
    type: "REGISTER",
    payload: data,
  };
};

export const updateAccountBalance = (balance) => {
  return {
    type: "UPDATE_BALANCE",
    payload: balance,
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};
