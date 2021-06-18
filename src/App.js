import React from "react";

import Container from "./components/Container/Container";
import AppBarTop from "./components/AppBarTop/AppBarTop";
import { ReactComponent as ReactLogo } from "./assets/logo.svg";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <AppBarTop>
        <Container>
          <ReactLogo />
        </Container>
      </AppBarTop>
      <Main></Main>
    </>
  );
}

export default App;
