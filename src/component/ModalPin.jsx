import React from 'react'

export const ModalPin = () => {
    return (
        <div id="modal">
        <div class="pin-confirmation-box">
          <div class="modal-close-icon-wrapper">
            <p class="transfer-primary-text">Enter PIN to Transfer</p>
            <img
              src="../assets/images/modal-close.svg"
              alt=""
              class="modal-close-icon"
              onclick="modalHandler()"
            />
          </div>
          <p class="transfer-secondary-text">
            Enter your 6 digits PIN for confirmation to <br />
            continue transferring money.
          </p>
          <div class="transfer-pin-input-wrapper">
            <input
              type="number"
              class="transfer-input-pin"
              oninput="pinHandler(0)"
            />
            <input
              type="number"
              class="transfer-input-pin"
              oninput="pinHandler(1)"
            />
            <input
              type="number"
              class="transfer-input-pin"
              oninput="pinHandler(2)"
            />
            <input
              type="number"
              class="transfer-input-pin"
              oninput="pinHandler(3)"
            />
            <input
              type="number"
              class="transfer-input-pin"
              oninput="pinHandler(4)"
            />
            <input
              type="number"
              class="transfer-input-pin"
              oninput="pinHandler(5)"
            />
          </div>
          <input
            type="button"
            value="Continue"
            class="transfer-btn"
            id="pin-btn"
            disabled
            onclick="pinValidation()"
          />
        </div>
      </div>
    )
}
