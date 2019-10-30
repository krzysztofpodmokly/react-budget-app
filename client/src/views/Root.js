import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import BudgetView from 'views/BudgetView';
import HomeView from 'views/HomeView';

const Root = () => {
  return (
    <MainTemplate>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/budget" component={BudgetView} />
        </Switch>
      </BrowserRouter>
    </MainTemplate>
  );
};

export default Root;
