var React = require('react')

//wrap and add props to TargetComponent
const __ = (TargetComponent, props) => {
	return class extends React.Component {
	    render() {
	      return <TargetComponent {...this.props} {...props} />;
	    }
	  }
}

const u_1 = {
	path: 'u_1',
	getChildRoutes(partialNextState, cb){
		require.ensure([], (require) => {
			//a unit has one more children( section )
	      cb(null, [
	      	require('../groups/s2_1/route.js')
	      	])
	    });
	},
	component: __(require('./unit.js'), {title: 'Unit ... 1'})
}


const u_2 = {
	path: 'u_2',
	getChildRoutes(partialNextState, cb){
		require.ensure([], (require) => {
	      cb(null, [
	      	require('../groups/s2_1/route.js')
	      	])
	    });
	},
	component: __(require('./unit.js'), {title: 'Unit ... 2'})
}

const u_3 = {
	path: 'u_3',
	getChildRoutes(partialNextState, cb){
		require.ensure([], (require) => {
	      cb(null, [
	      	require('../groups/s2_1/route.js')
	      	])
	    });
	},
	component: __(require('./unit.js'), {title: 'Unit ... 3'})
}


module.exports = {
    path: '/',
    childRoutes: [
        u_1,
        u_2,
        u_3
    ]
  }