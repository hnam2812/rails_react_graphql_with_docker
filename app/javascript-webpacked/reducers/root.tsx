import { combineReducers } from 'redux'
import testReducer, { State } from './test_reducer'

export type RootState = {
  testReducer: State
}

export default combineReducers<RootState>({
  testReducer
})