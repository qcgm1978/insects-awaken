// subcontainer
import Welcome from '../components/welcome.js'

import { connect } from 'react-redux'

function stateToProps(state) {
	console.log(state)
	return {
		name: state.todo.name
	}
}

const Subcontainer = connect(stateToProps)(Welcome)

export default Subcontainer