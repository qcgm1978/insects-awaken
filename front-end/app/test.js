// import _ from 'lodash';
import {render} from 'react-dom';
import React from 'react';
// let {render} = require('react-dom')
// let render = React.render
import { createStore, compose} from 'redux'
import { Provider } from 'react-redux'
// import Welcome from '../components/welcome.js'
import App from '../components/app.js'
import reducer from '../reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DevTools from '../container/devtools.js'
import { Router, Route, Link, browserHistory } from 'react-router'

const enhancer = compose(
  DevTools.instrument()
);

// import MyAwesomeReactComponent from './MyAwesomeReactComponent';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin(); 

let defaultState = {
  lay_1: {
    text: {__html: 'George.<b>麻</b>'},
    name: 'Unipus.cn',
    lay_1_0: {label: "Toggle"},
    lay_1_1: {tooltip: "Show the Notification messages."},
  },
  lay_2 : {name: 'hello'},
  // lay_1: {
  //   children: ['lay_1_1', 'lay_1_2']
  // },
  
  // lay_1_2: {}
}

const store = createStore(reducer, defaultState, enhancer)

const About = () => {
  return (
      <div>about....</div>
    )
}

const Nav = () => {
  return (
      <ul>
          <li><Link to='/'>Main</Link></li>
          <li><Link to='/App'>App</Link></li>
          <li><Link to='/About'>About</Link></li>
        </ul>
    )
}

const NoMatch = () => {
  return (
      <div>todo....</div>
    )
}

const Main = (props) => {
  return (
      <div>
       <Nav />
       {props.children}
      </div>
    )
}

const _App = () => {
    return  <Provider store={store}>
            <div>
             <MuiThemeProvider>
              <App />
             </MuiThemeProvider>
             <DevTools />
            </div>
          </Provider>
}

function component () {

  render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="/App" component={_App}/>
      <Route path="/about" component={About}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'))

  // render(
  //     <div>hh</div>
  //   )
  // return element;
}
// document.body.appendChild(component());
component();