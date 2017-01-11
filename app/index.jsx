import React                   from 'react'
import ReactDOM                from 'react-dom'
import routes                  from '$config/routes'
import { Router, hashHistory } from 'react-router/es6'

ReactDOM.render(
  <Router history={hashHistory} routes={routes()} />,
  document.getElementById('root')
)
