import React, { useState } from "react";
import "./App.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import Routes from "../src/pages/Routes";

export const Context = React.createContext();
function App() {
  const [signedIn, signedOut] = useState(false);
  return (
    <Context.Provider value={[signedIn, signedOut]}>
      <Routes />
    </Context.Provider>
  );
}

export default App;
