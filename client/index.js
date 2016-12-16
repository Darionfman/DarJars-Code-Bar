import React from "react"
import { Provider } from 'mobx-react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './components/App'
import List from './components/List'
import AddSnippet from './components/AddSnippet'
import SnippetSingle from './components/SnippetSingle'
import SnippetStore from './SnippetStore'

render(
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={List}/>
          <Route path="/add" component={AddSnippet} />
          <Route path="/snippet/:id" component={SnippetSingle} />
        </Route>
      </Router>,
  document.getElementById('app')
)

