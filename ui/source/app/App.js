import React from "react"
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import {BrowserRouter, Route} from 'react-router-dom'
import {IntlProvider} from 'react-intl'
import AppContainer from './Container'
import reactIntlFormat from './formats'
const reducers = {

};

let store

export default class App extends React.Component {

    constructor(props) {
        super(props);
        const rootReducer = combineReducers(reducers);
        store = createStore(
            rootReducer
        );
    }

    render() {
        return (
            <IntlProvider locale={'en-us'} formats={reactIntlFormat}>
                <Provider store={store}>
                    <BrowserRouter basename={this.props.contextPath}>
                        <Route path={'/'} component={AppContainer} />
                    </BrowserRouter>
                </Provider>
            </IntlProvider>
        );
    }
}

App.propTypes = {
    contextPath: PropTypes.string
}
