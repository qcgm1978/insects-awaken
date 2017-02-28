import { combineReducers } from 'redux'
import {todo as lay_1, test as lay_2} from './todos.js'

const todoApp = combineReducers({
  lay_1,
  lay_2,
})

export default todoApp