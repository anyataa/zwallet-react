import axios from "axios";
// Email validation in login page and sign up
export const emailValidation = (email) => {
  if (email.includes("@") == false) {
    return false;
  } else {
    return true;
  }
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

export const setTransactionData = () => {
  axios.get("http://localhost:4000/transaction").then((res) => {
    localStorage.setItem("transaction-data", JSON.stringify(res.data));
    // return JSON.parse(localStorage.getItem("transaction-data"))
  });
};
