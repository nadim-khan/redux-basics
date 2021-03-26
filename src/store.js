import {createStore} from 'redux'
import reducer from './reducer'

const store = createStore(reducer); //Higher order function -takes function as argument

export default store