import React from "react";

import Container from "./components/Container/Container";
import AppBarTop from "./components/AppBarTop/AppBarTop";
import { ReactComponent as ReactLogo } from "./assets/logo.svg";
import Main from "./components/Main/Main";
import HomePage from "./views/HomePage/HomePage";

function App() {
  return (
    <>
      <AppBarTop>
        <Container>
          <ReactLogo />
        </Container>
      </AppBarTop>
      <Main>
        <HomePage />
      </Main>
    </>
  );
}

export default App;
