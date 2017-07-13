import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import './stylesheets/main.less';
import App from './components/App';
import {AppContainer} from 'react-hot-loader';
import Home from './pages/Home';
import {sagas} from './sagas/index';
import EmailEdit from './pages/EmailEdit';
import NotFound from './pages/NotFound';

import {reducers} from './reducers/index';

//Create Store
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(routerMiddleware(browserHistory), sagaMiddleware)
));
const history = syncHistoryWithStore(browserHistory, store);
sagaMiddleware.run(sagas);

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