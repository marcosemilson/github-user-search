import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './core/Components/Navabar';
import Home from './Pages/Home';
import Search from './Pages/Search';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Routes;