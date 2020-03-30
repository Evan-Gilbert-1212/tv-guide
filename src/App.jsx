import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TvShowDetails from './pages/TvShowDetails'

const App = () => {
  return (
    <main>
      <header>
        <h1>TV GUIDE</h1>
      </header>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/tv/:showID" component={TvShowDetails}></Route>
        </Switch>
      </Router>
    </main>
  )
}

export default App
