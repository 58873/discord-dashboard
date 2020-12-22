import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Sidebar } from "./components/Sidebar";
import { DashboardPage } from "./pages/Dashboard";
import {} from "../__mocks__";

function App() {
  return (
    <div style={{ height: "100%", display: "flex" }}>
      <Sidebar />
      <Menu title="Drinks Bot Menu" />
      <Switch>
        <Redirect path="/" exact={true} to="/dashboard" />
        <Route path="/dashboard" exact={true} component={DashboardPage} />
      </Switch>
    </div>
  );
}

export default App;
