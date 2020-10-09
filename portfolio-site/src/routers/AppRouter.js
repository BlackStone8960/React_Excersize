import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import PortfolioDashboardPage from '../components/PortfolioDashboardPage';
import Header from '../components/Header';
import ContactMe from '../components/ContactMe';
import MyWork from '../components/MyWork';
import WhatIveDone from '../components/WhatIveDone';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={PortfolioDashboardPage} exact={true} />
                <Route path="/portfolio" component={MyWork} exact={true} />
                <Route path="/portfolio/:id" component={WhatIveDone} />
                <Route path="/contact" component={ContactMe} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>		
    </BrowserRouter>
);

export default AppRouter;