//https://eth-ropsten.alchemyapi.io/v2/Z-z_om0mw4k0E8sl3-8kqt_fGW2LB4rs
import "@nomiclabs/hardhat-waffle";

export default {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/Z-z_om0mw4k0E8sl3-8kqt_fGW2LB4rs",
      accounts: [
        "180820e12ccf3e55d81d794fdc15141145daef56caa09661e3279bf41b5f1e25",
      ],
    },
  },
};
