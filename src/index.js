import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import {Provider} from 'react-redux';

import './stylesheets/main.less';
import App from './components/App';

import Home from './pages/Home';
import EmailEdit from './pages/EmailEdit';
import NotFound from './pages/NotFound';

import {reducers} from './reducers/index';

let emails = [
    {
        id: 1,
        from: "hydroquebec",
        to: "loren",
        subject: 'BILL PAYMENTS',
        bundle: "financial",
        date: new Date()
    },
    {
        id: 2,
        from: "linkedin",
        to: "loren",
        subject: 'New Opportunity!',
        bundle: "updates",
        date: new Date()
    },
    {
        id: 3,
        from: "john",
        to: "loren",
        subject: 'Party invitation',
        bundle: "personal",
        date: new Date()
    }
];
const initial_state = {
    emails: {
        list: emails
    }
};

let middleware = applyMiddleware(routerMiddleware(browserHistory));
const store = createStore(reducers, initial_state, middleware);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="email-edit(/:id)" component={EmailEdit}/>
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    </Provider>
    , document.getElementById('app'));
