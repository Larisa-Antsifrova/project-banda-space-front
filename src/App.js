import React from "react";
import AppBarTop from "./components/AppBarTop/AppBarTop";
import AppBarBottom from "./components/AppBarBottom/AppBarBottom";

import Main from "./components/Main/Main";
import HomePage from "./views/HomePage/HomePage";

function App() {
  return (
    <>
      <AppBarTop />
      <Main>
        <HomePage />
      </Main>
      <AppBarBottom />
    </>
  );
}

export default App;
