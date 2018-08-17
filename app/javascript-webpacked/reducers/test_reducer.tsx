import { TEST_ACTION } from '../actions/action_types';
export type State = {
  test: string
}

export type Action = {
  type: string
  payload: any
}

const initState: State = {
  test: ''
}


const testReducer = (state = initState, action: Action) => {
  switch (action.type) {
  case TEST_ACTION:
    return {...state, test: action.payload};
  default:
    return state;
  }
}

export default testReducer