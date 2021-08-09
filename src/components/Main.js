import React from 'react';
import Nav from './Nav';
import Cats from './cats/Cats';
import Dogs from './dogs/Dogs';
import Search from './search/Search';
import ToDo from './todo/ToDo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Main = () => {

    return (
        <React.Fragment>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/home" component={Main} />
                    <Route exact path="/cats" component={ Cats } />
                    <Route exact path="/search" component={ Search } />
                    <Route exact path="/dogs" component={ Dogs } />
                    <Route exact path="/todo" component={ ToDo } />
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default Main;