import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './stylesheets/main.less';
import App from './components/App';
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

const store = createStore(reducers, initial_state);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('app'));
