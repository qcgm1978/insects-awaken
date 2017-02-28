// import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import UnipusTab from '../components/unipustab.js'
// import RaisedButton from 'material-ui/RaisedButton'
// let RaisedButton = require('material-ui/RaisedButton')
// let React = require('react')
// let PropTypes = React.PropTypes
// import { Welcome } from 'welcome.js'


const mapStateToProps = (state) => {
  console.log('*********')
  console.log(state)
	return {
    todo: state.lay_1,
  }
}

export default connect(
	mapStateToProps
	)(UnipusTab)