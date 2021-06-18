import React from "react";

import Container from "./components/Container/Container";
import AppBarTop from "./components/AppBarTop/AppBarTop";
import { ReactComponent as ReactLogo } from "./assets/logo.svg";

function App() {
  return (
    <>
      <AppBarTop>
        <Container>
          <ReactLogo />
        </Container>
      </AppBarTop>
    </>
  );
}

export default App;
