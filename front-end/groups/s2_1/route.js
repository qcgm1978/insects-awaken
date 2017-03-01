//this is one group...
module.exports = {
  path: 's2_1',
  getChildRoutes(partialNextState, cb){
  	cb(null,[ 
  		{path: 'p_1', component: require('./page_1.js')},
  		{path: 'p_2', component: require('./page_2.js')}
  	]);
  },
  getIndexRoute(partialNextState, cb) {
    cb(null, {
        component: require('./page_1.js'),
      })
  },
  getComponent(nextState, cb) {
      cb(null, require('./group.js'))
  }

}