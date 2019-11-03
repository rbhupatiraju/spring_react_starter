import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import ScrollToTop from './components/ScrollTop'

export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ HomePage } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
)