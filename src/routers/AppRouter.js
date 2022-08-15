import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpanseDashboardPage from "../components/ExpanseDashboardPage";
import AddExpansePage from "../components/AddExpansePage";
import EditExpansePage from "../components/EditExpansePage";
import NotFoundPage from "../components/NotFoundPage";
import HelpPage from "../components/HelpPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpanseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpansePage} />
        <Route path="/edit/:id" component={EditExpansePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
