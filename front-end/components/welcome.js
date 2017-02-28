import React, {PropTypes} from 'react'

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}, Welcome to Beijing.</h1>;
  }
}


Welcome.propTypes = {
  name: PropTypes.string
}

export default Welcome