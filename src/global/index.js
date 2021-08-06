import axios from "axios";
import { useReducer } from "react";

//  image form

// Email validation in login page and sign up

export const emailValidation = (email) => {
  if (email.includes("@") == false) {
    return false;
  } else {
    return true;
  }
};
// rupiah format
export const inRupiah = (amount) => {
  return Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

// rupiah format
export const formatRupiah = (prefix, Initalinput) => {
  var number_string = Initalinput.replace(/[^,\d]/g, "").toString(),
    split = number_string.split(","),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi),
    separator = "";

  if (Initalinput.value.length > 0) {
    Initalinput.style.textIndent = 0;
    Initalinput.style.textAlign = "center";
  } else {
    Initalinput.style.textIndent = "44.5%";
    Initalinput.style.textAlign = "left";
  }

  if (ribuan) {
    separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
  return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
};
// Fetch Data
export const setFriendsData = () => {
  axios.get("http://localhost:4000/user").then((res) => {
    // Local storage set item will soon be removed once Redux is implemented
    localStorage.setItem("friends-data", JSON.stringify(res.data));
  });
};

export const setTransactionData = (accountId) => {
  axios
    .get(`http://localhost:8080/zwallet-api/transaction/${accountId}`)
    .then((res) => {
      localStorage.setItem("transaction-data", JSON.stringify(res.data));
      // return JSON.parse(localStorage.getItem("transaction-data"))
    });
};

export const setGraphData = (accountId) => {
  axios
    .get(`http://localhost:8080/zwallet-api/transaction/graph/${accountId}`)
    .then((res) => {
      localStorage.setItem("graph-data", JSON.stringify(res.data.data));
      // return JSON.parse(localStorage.getItem("transaction-data"))
    });
};

export const getAccountData = (accountId) => {
  // axios
  //   .get(`http://localhost:8080/zwallet-api/account/${accountId}`)
  //   .then((res) => {
  //     localStorage.setItem("account-data", JSON.stringify(res.data));
  //     // return JSON.parse(localStorage.getItem("transaction-data"))
  //   });
};

export const getTransactionByPeriod = (accountId) => {
  axios
    .get(`http://localhost:8080/zwallet-api/transaction/history/${accountId}`)
    .then((res) => {
      localStorage.setItem("transaction-history", JSON.stringify(res.data));
      // return JSON.parse(localStorage.getItem("transaction-data"))
    });
};

// Pin Handler
export const pinHandler = (index, pin) => {
  // if (PinTotal[index].value != null) {
  //   console.log(PinTotal)
  // } else{  console.log(PinTotal)}
  // if (pin[index].value < 0) {
  //   pin[index].value = null;
  // } else if (pin[index].value > 9) {
  //   pin[index].value = pin[index].value[1];
  // } else if (pin[index].value.length > 1) {
  //   pin[index].value = pin[index].value[1];
  // }
  // if (pin[index].value.length > 0 && index < 5) {
  //   pin[index + 1].focus();
  //   // anya: izin nambah ini ya, supaya berubah warna kalo uda diinput
  //   // thanks, kalo ngebug kasi tau ya. biar diperbaiki
  //   pin[index].classList.add("border-secondary");
  //   console.log("move right");
  // }
  // pin[index].addEventListener("keyup", (event) => {
  //   if (event.code == "Backspace" && index > 0) {
  //     pin[index - 1].focus();
  //     console.log("move left");
  //   }
  //   //   add on to suits react behavior
  //   else {
  //     pin[index + 1].focus();
  //   }
  // });
  // if (pin[index].value.length > 0) {
  //   pin[index].style.borderColor = "#6379F4";
  // } else {
  //   pin[index].style.borderColor = "rgba(66, 63, 63, 0.4)";
  // }
  // if (
  //   pin[0].value.length > 0 &&
  //   pin[1].value.length > 0 &&
  //   pin[2].value.length > 0 &&
  //   pin[3].value.length > 0 &&
  //   pin[4].value.length > 0 &&
  //   pin[5].value.length > 0
  // ) {
  //   document.getElementById("pin-btn").removeAttribute("disabled");
  // } else {
  //   document.getElementById("pin-btn").setAttribute("disabled", "");
  // }
};
