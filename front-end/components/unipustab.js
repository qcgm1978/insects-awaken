import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from '../style/Button.css'
import {showName} from '../actions'
// import Subcontainer from '../container/subcontainer.js'
import * as Includes from '../app/inlcudelist.js'

const UnipusTab = ({ todo, test, dispatch}) => {
  const toggleShowName = () => dispatch(showName());
  // const ele = makeElement('RaisedButton', {label:'Button', 
  //     )
  const events = {
    onTouchTap: toggleShowName,
    onClick: toggleShowName
  }
  // const key_1_1 = React.createElement(Inlcudes.IconButton, key_1_1)
  return (
    <div>
      <Includes.RaisedButton {...todo.lay_1_0} {...events}/>
      {/*<Subcontainer />*/}
      <Includes.IconButton {...todo.lay_1_1} {...events}>
        <Includes.NotificationsIcon/>
      </Includes.IconButton>
      {todo.isShow && <p dangerouslySetInnerHTML={todo.text} />}
    </div>
  )
}

UnipusTab.propTypes = {
  todo: PropTypes.shape({
    isShow: PropTypes.boolean,
    text: PropTypes.string.isRequired
  }).isRequired,
  // test: PropTypes.string,
}

export default UnipusTab