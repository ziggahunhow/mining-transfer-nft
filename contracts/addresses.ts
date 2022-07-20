type IAddress = {
  [networkID: string]: {
    [contractName: string]: string;
  };
};

const addresses: IAddress = {
  18: {
    // TTStaking: "0x2449EE023bD9A4969045BB216Ae7Ba207db5dd85",
    TTStaking: "0x6e32A7798143a9BCC1696e19A79cCe46Dd64e7A1",
    Mining: "0x706a85F6265F74e9341aF0e5ed75A19Cec7777E1",
  },
  108: {
    TTStaking: "0xc68adb799A8E12Fc27B85EFbd836d30fA22C9b0E",
    Mining: "0x2a34a5774bc624aB812337da301618F0A3D8e683",
  },
};

export default addresses;
