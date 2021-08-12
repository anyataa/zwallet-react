const INITIAL_STATE = {
  id: 0,
  name: "",
  phone: "",
  nominalTransfer: 0,
  noteTransfer: "",
  balance: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TRANSFER":
      return {
        ...INITIAL_STATE,
        id: action.payload.id,
        name: action.payload.name,
        phone: action.payload.phone,
        nominalTransfer: action.payload.nominalTransfer,
        noteTransfer: action.payload.noteTransfer,
        balance: action.payload.balance
      };
    case "RESET_TRANSFER":
      return INITIAL_STATE;
    default:
      return state;
  }
};
