import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

try {
  ReactDOM.render(
    <Router>
      <App/>
    </Router>,
    document.getElementById('root')
  )
} catch (e) {

}