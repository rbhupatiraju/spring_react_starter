import React from 'react'
import { render } from 'react-dom'
import App from './app/App'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { AppContainer } from 'react-hot-loader'
import './app.less'

const rootElement = document.getElementById('app')
const AppContainerDND = DragDropContext(HTML5Backend)(AppContainer)
const ctx = window.contextPath;

render(<AppContainerDND><App contextPath={ctx} /></AppContainerDND>, rootElement)

if (module.hot) {
    module.hot.accept('./app/App', () => {
        const NewRoot = require('./app/App').default
        render(
            render(<AppContainerDND><NewRoot contextPath={ctx} /></AppContainerDND>,
            rootElement)
        )
    })
}