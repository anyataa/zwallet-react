const INITIAL_STATE = {
  userId: "",
  userName: "",
  phoneNumber: "",
  userEmail: "",
  accountId: "",
  accountBalance: 0,
  userPin: "",
  userImage: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...INITIAL_STATE,
        userId: action.payload.userId,
        userName: action.payload.userName,
        phoneNumber: action.payload.phoneNumber,
        userEmail: action.payload.userEmail,
        accountId: action.payload.accountId,
        accountBalance: action.payload.accountBalance,
        userPin: action.payload.userPin,
        userImage: action.payload.userImage,
      };
    case "UPDATE_BALANCE":
      return { ...INITIAL_STATE, accountBalance: action.payload };
    case "RESET":
      return INITIAL_STATE;
    default:
      return state;
  }
};
