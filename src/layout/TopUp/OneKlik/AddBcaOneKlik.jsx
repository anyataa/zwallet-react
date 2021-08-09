import React from "react";
import { Link } from "react-router-dom";
import OneKlik from "../../../asset/image/oneklik.png";

export const AddBcaOneKlik = () => {
  return (
    <div className="right">
      <div className="transfer-right-top">
        <img src={OneKlik} style={{ height: "16vh", width: "8vw" }} />
        <p className="transfer-primary-text"></p>
      </div>
      <div className="transfer-input-amount-wrapper">
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">NOMOR KARTU</p>
        <input type="number" placeholder="1234 5678 0111 2345" style={{ height: "50%", width: "100%", fontSize: '22px', border: 'none', color: '#6379F4'}}/>
      </div>
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">LIMIT HARIAN PER KARTU</p>
        <p className="transfer-primary-text">maks. Rp 3.000.000</p>
      </div>
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">PILIH NOMOR HP m-BCA UNTUK KONFIRMASI REGISTRASI</p>
        <p className="transfer-primary-text">Pilih nomor HP m-BCA</p>
      </div>
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">Halo BCA 1500888</p>
      </div>
      </div>
      <div className="set-transfer-button-confirmation">
        <Link to="/topup/bcaOneKlik" style={{ textDecoration: "none" }}>
          <input type="button" value="Back" className="transfer-btn" />
        </Link>
        <Link>
          <input type="button" value="Lanjut" className="transfer-btn" />
        </Link>
      </div>
    </div>
  );
};
