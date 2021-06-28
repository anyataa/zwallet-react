import React from 'react'
import { FaTimes } from 'react-icons/fa'


export const ModalPin = () => {
    //   Pin control
    var pin = document.getElementsByClassName("transfer-input-pin");
    const pinHandler = (index) => {
        if (pin[index].value < 0) {
          pin[index].value = null;
        } else if (pin[index].value > 9) {
          pin[index].value = pin[index].value[1];
        } else if (pin[index].value.length > 1) {
          pin[index].value = pin[index].value[1];
        }
      
        // if (pin[index].value.length > 0 && index < 5) {
        //   pin[index + 1].focus();
        //   // anya: izin nambah ini ya, supaya berubah warna kalo uda diinput
        //   // thanks, kalo ngebug kasi tau ya. biar diperbaiki
        //   pin[index].classList.add("border-secondary");
        //   console.log('move right')
        // }

      
        pin[index].addEventListener("keyup", (event) => {
          if (event.code == "Backspace" && index > 0) {
            pin[index - 1].focus();
            console.log('move left')
          } else { pin[index + 1].focus();}
        });
      
        if (pin[index].value.length > 0) {
          pin[index].style.borderColor = "#6379F4";
        } else {
          pin[index].style.borderColor = "rgba(66, 63, 63, 0.4)";
        }
      
        if (
          pin[0].value.length > 0 &&
          pin[1].value.length > 0 &&
          pin[2].value.length > 0 &&
          pin[3].value.length > 0 &&
          pin[4].value.length > 0 &&
          pin[5].value.length > 0
        ) {
          document.getElementById("pin-btn").removeAttribute("disabled");
        } else {
          document.getElementById("pin-btn").setAttribute("disabled", "");
        }
      };
    return (
        // set display to flex for debugging
        <div id="modal" style={{display:"flex"}}>
        <div class="pin-confirmation-box">
          <div class="modal-close-icon-wrapper">
            <p class="transfer-primary-text">Enter PIN to Transfer</p>
            <FaTimes  class="modal-close-icon"></FaTimes>
          </div>
          <p class="transfer-secondary-text">
            Enter your 6 digits PIN for confirmation to <br />
            continue transferring money.
          </p>
          <div class="transfer-pin-input-wrapper">
            <input
              type="number"
              class="transfer-input-pin"
              oninput={pinHandler(0)}
            />
            <input
              type="number"
              class="transfer-input-pin"
              oninput={pinHandler(1)}
            />
            <input
              type="number"
              class="transfer-input-pin"
              oninput={pinHandler(2)}
              
            />
            <input
              type="number"
              class="transfer-input-pin"
              oninput={pinHandler(3)}
            />
            <input
              type="number"
              class="transfer-input-pin"
              oninput={pinHandler(4)}
            />
            <input
              type="number"
              class="transfer-input-pin"
              oninput={pinHandler(5)}
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
