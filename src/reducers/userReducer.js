const INITIAL_STATE = {
  userId: 0,
  userName: "",
  phoneNumber: "",
  userEmail: "",
  accountId: 0,
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
        userImage: action.payload.userImage
      };
    default:
      return state
  }
};
