import { connect } from 'react-redux'
import UnipusTab from '../components/unipustab.js'

const mapStateToProps = (state) => {
  return {
    todo: state.lay_1,
  }
}

export default connect(
	mapStateToProps
	)(UnipusTab)