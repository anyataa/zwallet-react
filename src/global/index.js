import axios from "axios";
// Email validation in login page and sign up
export const emailValidation = (email) => {
  if (email.includes("@") == false) {
    alert("format email salah");
  } else {
    alert("format benar");
  }
};

// Fetch Data
export const setFriendsData = () => {
  axios.get("http://localhost:4000/user").then((res) => {
    // Local storage set item will soon be removed once Redux is implemented
    localStorage.setItem("friends-data", JSON.stringify(res.data));
  });
};

export const setTransactionData = () => {
  axios.get("http://localhost:4000/transaction").then((res) => {
    localStorage.setItem("transaction-data", JSON.stringify(res.data));
    // return JSON.parse(localStorage.getItem("transaction-data"))
  });
};
