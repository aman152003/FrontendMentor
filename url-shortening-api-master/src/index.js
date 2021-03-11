import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {AppProvider} from './components/AppContext'

ReactDOM.render(
<AppProvider>
    <App />
</AppProvider>,
document.getElementById('root'));