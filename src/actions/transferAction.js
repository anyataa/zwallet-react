export const onTransfer = (data) => {
  return {
    type: "TRANSFER",
    payload: data
  }
}

export const resetTransfer = () => {
  return {
    type: "RESET_TRANSFER",
  };
};