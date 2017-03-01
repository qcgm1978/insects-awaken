var React = require('react')

class Group extends React.Component {
  render() {
    return (
      <div>
        <hr />
        {this.props.children}
      </div>
    )
  }

}

module.exports = Group