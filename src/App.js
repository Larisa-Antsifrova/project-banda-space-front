import React from "react";
import { Switch, Route } from "react-router-dom";
import AppBarTop from "./components/AppBarTop/AppBarTop";
import AppBarBottom from "./components/AppBarBottom/AppBarBottom";
import Main from "./components/Main/Main";
import HomePage from "./views/HomePage/HomePage";
import EntriesPage from "./views/EntriesPage/EntriresPage";
import EditorPage from "./views/EditorPage/EditorPage";
import SettingsPage from "./views/SettingsPage/SettingsPage";
import NotFoundPage from "./views/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <AppBarTop />
      <Main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/entries">
            <EntriesPage />
          </Route>
          <Route path="/edit">
            <EditorPage />
          </Route>
          <Route path="/settings">
            <SettingsPage />
          </Route>
          <Route path="/">
            <NotFoundPage />
          </Route>
        </Switch>
      </Main>
      <AppBarBottom />
    </>
  );
}

export default App;
