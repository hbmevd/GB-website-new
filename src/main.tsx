import "../src/assets/css/style.css";
import "../src/assets/css/plugins.css";
import "../src/assets/switcher/css/switcher.css";
import "../src/assets/switcher/styles.css";
import "react-datepicker/dist/react-datepicker.css"; // Day-picker
import "react-phone-number-input/style.css"; //Country selctor
import "../src/assets/css/icons.css";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { Fragment } from "react";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  trustWallet,
  rainbowWallet,
} from "@thirdweb-dev/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThirdwebProvider
    activeChain="ethereum"
    clientId="9b406d6af880a571a409bc229085bdc5"
    supportedWallets={[
      metamaskWallet({ recommended: true }),
      coinbaseWallet(),
      walletConnect(),
      localWallet(),
      trustWallet(),
      rainbowWallet(),
    ]}
  >
    <Fragment>
      <App />
    </Fragment>
  </ThirdwebProvider>
);
