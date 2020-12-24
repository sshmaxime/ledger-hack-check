import React, { useState } from "react";
import "./App.css";
import { hashed_ledger_hack } from "./hashed_ledger_hack";
import CryptoJs from "crypto-js";

const defaultState = (): {
  field: string;
  found: boolean | undefined;
} => {
  return {
    field: "",
    found: undefined,
  };
};
function App() {
  const [state, setState] = useState(defaultState());

  const handleChange = (event: any) => {
    setState({ ...state, field: event.target.value });
  };

  const handleSubmit = (event: any) => {
    if (
      hashed_ledger_hack.get(CryptoJs.SHA256(state.field).toString()) ===
      undefined
    ) {
      setState({ ...state, found: false });
    } else {
      setState({ ...state, found: true });
    }
    event.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Email :
          <input type="text" value={state.field} onChange={handleChange} />
        </label>
        <input type="submit" value="Check" />
      </form>
      <br />
      <br />
      {state.found === true ? (
        <div>
          Your email, phone number, name and the location where you ordered your
          ledger device has been leaked by Ledger.
        </div>
      ) : (
        <> </>
      )}
      {state.found === false ? (
        <div>AFAIK your data has not been leaked by Ledger.</div>
      ) : (
        <></>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
      You can contact me @ maximeauba@gmail.com if you need more info.
    </div>
  );
}

export default App;
