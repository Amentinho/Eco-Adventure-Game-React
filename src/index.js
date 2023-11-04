import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import MacBookAir1 from './views/mac-book-air1'
import MacBookAir2 from './views/mac-book-air2'
import MacBookAir11 from './views/mac-book-air11'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={MacBookAir1} exact path="/" />
        <Route component={MacBookAir2} exact path="/mac-book-air2" />
        <Route component={MacBookAir11} exact path="/mac-book-air11" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
