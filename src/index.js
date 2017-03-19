import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import {Provider} from 'react-redux';
import './stylesheets/main.less';
import App from './components/App';
import {AppContainer} from 'react-hot-loader';
import Home from './pages/Home';
import EmailEdit from './pages/EmailEdit';
import NotFound from './pages/NotFound';

import {reducers} from './reducers/index';

let emails = [
    {
        id: 1,
        from: "hydroquebec",
        recipient: "loren",
        subject: 'BILL PAYMENTS',
        bundle: "financial",
        date: new Date()
    },
    {
        id: 2,
        from: "linkedin",
        recipient: "loren",
        subject: 'New Opportunity!',
        bundle: "updates",
        date: new Date()
    },
    {
        id: 3,
        from: "john",
        recipient: "loren",
        subject: 'Party invitation',
        bundle: "personal",
        date: new Date()
    },
    {
        id: 4,
        from: "Montreal Post",
        recipient: "loren",
        subject: 'Delivery Confirmation',
        bundle: "purchases",
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


const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Home}/>
                        <Route path="email-edit(/:id)" component={EmailEdit}/>
                        <Route path="*" component={NotFound}/>
                    </Route>
                </Router>
            </Provider>
        </AppContainer>
        , document.getElementById('app')
    )
};
render(App);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App)
    })
}