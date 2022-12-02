import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { H1 } from "@daohaus/ui";
import { formatValueTo } from "@daohaus/utils";

import { TestIcon } from "@daohaus/test-icon";
import { Button, H1 } from "@daohaus/ui";
// import {
//   CONTRACT_KEYCHAINS,
//   generateExplorerLink,
// } from "@daohaus/keychain-utils";
// import { formatDateTimeFromSeconds, FORM_COPY } from "@daohaus/utils";

function App() {
  // const contracts = CONTRACT_KEYCHAINS;

  // console.log("contracts", contracts);

  // const exploreLink = generateExplorerLink({
  //   chainId: "0x5",
  //   address: "0xAce0A31d08671CE10a7c8232B14Dc5Ef6CD63534",
  //   type: "address",
  // });

  // console.log("exploreLink", exploreLink);

  // const formCopy = FORM_COPY;

  // console.log("formCopy", formCopy);

  // const now = new Date().getTime() / 1000;
  // const time = formatDateTimeFromSeconds(now.toFixed());

  // console.log("time", time);

  const num = formatValueTo({ value: "10.77272", format: "number" });

  console.log("num", num);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <H1>POOOPIN</H1>

        <TestIcon />

        <Button>BUTTON</Button>

        {/* <WrappedInput id="1"></WrappedInput> */}
      </header>
    </div>
  );
}

export default App;
