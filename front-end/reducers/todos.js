export const todo = (state={}, action) => {
  console.log('====> action ' + action.type )
  console.log(state)
  switch (action.type) {
    case 'SHOW_NAME':
      return {
        ...state,
        isShow: !state.isShow
      }

    default:
      return state
  }
}

export const test = (state={}, action) => {
  console.log('test ====> action ' + action.type )
  console.log(state)
  return state
}

// const todos = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         todo(undefined, action)
//       ]
//     case 'TOGGLE_TODO':
//       return state.map(t =>
//         todo(t, action)
//       )
//     default:
//       return state
//   }
// }
// export {todos, todo}

// export {todos, todo}