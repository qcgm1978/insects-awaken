// import _ from 'lodash';
import {render} from 'react-dom';
import React from 'react';
// let {render} = require('react-dom')
// let render = React.render
import { createStore, compose} from 'redux'
import { Provider } from 'react-redux'
// import Welcome from '../components/welcome.js'
// import App from '../components/app.js'
import reducer from '../reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DevTools from '../container/devtools.js'
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router'

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


const Nav = () => {
  return (
      <ul>
          <li><Link to='/'>Main</Link></li>
          <li><Link to='/u_1'>Unit 1</Link></li>
          <li><Link to='/u_2'>Unit 2</Link></li>
          <li><Link to='/u_3'>Unit 3</Link></li>
        </ul>
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

const rootRoute = {
  childRoutes: [{
    path: '/',
    component: Main,
    ...require('./routes.js')
  }]
};
  

function component () {

  render((
      <Router history={browserHistory} routes={rootRoute} />  
    ), document.getElementById('root'))

  // render((
  //     <Router history={browserHistory} >  
  //      <Route path="/" component={Main}>
  //           <Route path="app" component={_App}/>
  //           <Route path="about" component={About}/>
  //           <Route path="*" component={NoMatch}/>
  //         </Route>     
  //     </Router>
  //   ), document.getElementById('root'))

  // render(
  //     <div>hh</div>
  //   )
  // return element;
}
// document.body.appendChild(component());
component();