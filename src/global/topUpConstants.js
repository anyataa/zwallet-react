export const topUpOption = [
  {
    name: "BCA OneKlik",
    slogan: "Easy to top up only one click away from your finger",
    url: "bcaOneKlik",
  },
  {
    name: "Bank Transfer",
    slogan: "BCA, BRI, Mandiri, BNI, Bank Syariah Indonesia, and Sea Bank",
    url: "bankTransfer",
  },
  {
    name: "Bank Branch Office & Agent",
    slogan: "ATM Bersama, BCA, BPD DIY, Bank KB Bukopin, Bank Sinarmas, OCBC NISP, and Outlet Pos Indonesia",
    url: "branchAgent",
  },
  {
    name: "Alfamart, Alfamidi, or Dan+Dan",
    slogan:
      "Top up to Alfamart, Alfamidi, and Dan+Dan based on your registered phone number in Zwallet",
    url: "alfaGroup",
  },
  {
    name: "Indomaret or i.Saku",
    slogan:
      "Top up to Indomaret based on your registered phone number in Zwallet",
    url: "indomaretGroup",
  },
];

export const bankTransferInstruction = [
  {
    methods: "Via ATM",
    steps: [
      "Go to the nearest ATM. ",
      "Type your security number on the ATM .",
      "Type the virtual account number that we provide you at the top.",
      "Type the amount of the money you want to top up.",
      "Read the summary details.",
      "Press transfer / top up.",
      "You can see your money in Zwallet within 3 hours.",
      "Type your security number on the ATM .",
    ],
  },
  {
    methods: "M-Banking",
    steps: [
      "Go to your M-Banking Application",
      "Type your security number on the M-Banking.",
      "Choose Transfer to Virtual Account.",
      "Type the virtual account number that we provide you at the top.",
      "Type the amount of the money you want to top up.",
      "Read the summary details.",
      "Press transfer / top up.",
      "You can see your money in Zwallet within 3 hours.",
      "Type your security number on the M-Banking.",
    ],
  },
  {
    methods: "Internet Banking",
    steps: [
      "Go to your Internet Banking Application",
      "Type your security number on the Internet Banking.",
      "Choose Transfer to Virtual Account.",
      "Type the virtual account number that we provide you at the top.",
      "Type the amount of the money you want to top up.",
      "Read the summary details.",
      "Press transfer / top up.",
      "You can see your money in Zwallet within 3 hours.",
      "Type your security number on the Internet Banking.",
    ],
  },
  {
    methods: "SMS Banking",
    steps: [
      "Go to your SMS Application",
      "Type your SMS Code for transfer transaction.",
      "Choose methods for Transfer to Virtual Account.",
      "Type the virtual account number that we provide you at the top.",
      "Type the amount of the money you want to top up.",
      "The SMS format as : methods (space) virtual account number (space) top up amount.",
      "Press send to your SMS Banking number.",
      "You can see your money in Zwallet within 3 hours.",
      "Make sure you are using the registered phone number for SMS Banking Service so the transaction can be successfully excecuted.",
    ],
  },
];

export const branchAgentTransferInstruction = [
  {
    methods: "ATM Bersama - Cash Deposit",
    steps: [
      "Fill in cash deposit form.",
      "Write Zwallet company code as the destination account : 123 and your Zwallet app registered phone number.",
      "Write your registered name on Zwallet app as the receiver name.",
      "Enter top up amount.",
      "Follow the instruction to complete your transaction.",
    ],
  },
  {
    methods: "BCA - SIM Toolkit",
    steps: [
      "Select m-BCA.",
      "Select m-PAYMENT > OTHERS/LAINNYA.",
      "Type in TVA and press OK.",
      "Enter Zwallet company code : 80008 and your Zwallet app registered phone number.",
      "Enter top up amount.",
      "Enter your BCA PIN and press OK.",
      "You will receive a confirmation through SMS.",
    ],
  },
  {
    methods: "BPD DIY",
    steps: [
      "Go to the nearby bank and ask the teller for Zwallet top up.",
      "Inform your Zwallet app registered phone number and top up amount at the counter.",
      "Teller will handle your top up transaction.",
      "You'll get a receipt after the transaction is successfull.",
    ],
  },
  {
    methods: "Bank KB Bukopin - Mini ATM",
    steps: [
      "Ask the agent for a Zwallet top up with Bank Bukopin EDC Mini ATM.",
      "Hand your Bukopin debit card to the agent if you have. Otherwise, you can pay in cash.",
      "Tell the agent your phone number that's used in your Zwallet app and the top up amount.",
      "Enter your Bukopin PIN if you use your debit card.",
      "If you pay in cash, pay the amount to the agent (plus top up fee Rp 1.000).",
      "Once the agent is done, make sure the amount is added to your Zwallet.",
      "Keep the receipt for proof of payment.",
    ],
  },
  {
    methods: "Bank Sinarmas - Teller",
    steps: [
      "Come to the PPOB counter and prepare cash money for top up.",
      "Mention your Zwallet app registered phone number and top up amount at the counter.",
      "Teller will handle your top up transaction.",
      "You'll get a receipt after the transaction is successfull.",
    ],
  },
  {
    methods: "OCBC NISP - PPOB",
    steps: [
      "Come to the PPOB counter and prepare cash money for top up.",
      "Mention your Zwallet app registered phone number and top up amount at the counter.",
      "Teller will handle your top up transaction.",
      "You'll get a receipt after the transaction is successfull.",
    ],
  },
  {
    methods: "Outlet Pos Indonesia",
    steps: [
      "Ask the staff for a Zwallet top up.",
      "Inform your Zwallet app registered phone number and top up amount at the counter.",
      "Once the staff is done, make sure the amount is added to your Zwallet.",
    ],
  }
];

export const alfaTransferInstruction = [
  {
    methods: "Alfamart",
    steps: [
      "Go to the nearest Alfamart.",
      "Inform to cashier that you want to top up Zwallet.",
      "Inform the phone number that you used to top up Zwallet.",
      "Tell the cashier the Zwallet top up amount (Choose Rp. 10.000, Rp. 50.000, Rp. 100.000, Rp. 200.000, Rp. 300.000, Rp. 400.000, Rp. 500.000).",
      "Cashier will add the balance to your Zwallet.",
      "Make sure it's added to your Zwallet. Keep the payment receipt as proof of payment in case any further verification is needed.",
    ],
  },
  {
    methods: "Alfamidi",
    steps: [
      "Go to the nearest Alfamidi.",
      "Inform to cashier that you want to top up Zwallet.",
      "Inform the phone number that you used to top up Zwallet.",
      "Tell the cashier the Zwallet top up amount (Choose Rp. 10.000, Rp. 50.000, Rp. 100.000, Rp. 200.000, Rp. 300.000, Rp. 400.000, Rp. 500.000).",
      "Cashier will add the balance to your Zwallet.",
      "Make sure it's added to your Zwallet. Keep the payment receipt as proof of payment in case any further verification is needed.",
    ],
  },
  {
    methods: "Dan+Dan",
    steps: [
      "Go to the nearest Dan+Dan.",
      "Inform to cashier that you want to top up Zwallet.",
      "Inform the phone number that you used to top up Zwallet.",
      "Tell the cashier the Zwallet top up amount (Choose Rp. 10.000, Rp. 50.000, Rp. 100.000, Rp. 200.000, Rp. 300.000, Rp. 400.000, Rp. 500.000).",
      "Cashier will add the balance to your Zwallet.",
      "Make sure it's added to your Zwallet. Keep the payment receipt as proof of payment in case any further verification is needed.",
    ],
  }
];

export const indomaretTransferInstruction = [
  {
    methods: "Indomaret",
    steps: [
      "Go to the nearest Indomaret.",
      "Inform to cashier that you want to top up Zwallet.",
      "Inform the phone number that you used to top up Zwallet.",
      "Tell the cashier the Zwallet top up amount (Choose Rp. 10.000, Rp. 50.000, Rp. 100.000, Rp. 200.000, Rp. 300.000, Rp. 400.000, Rp. 500.000).",
      "Cashier will add the balance to your Zwallet.",
      "Make sure it's added to your Zwallet. Keep the payment receipt as proof of payment in case any further verification is needed.",
    ],
  },
  {
    methods: "i.Saku",
    steps: [
      "Open i.Saku app.",
      "Select see all > e-Wallet.",
      "Select Zwallet as Service Provider & input your payment code. Click PROCESS.",
      "Check your payment details. Ensure that Vendor is Zwallet and total amount is correct. If correct, choose PAY.",
      "Your order will be verified automatically once payment is successfull.",
    ],
  }
];

