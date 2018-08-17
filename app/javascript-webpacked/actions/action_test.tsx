import * as types from './action_types';
import { Action, ActionCreator } from 'redux'

export const testAction: ActionCreator<Action> = (testPayload: any) => ({
  type: types.TEST_ACTION,
  payload: testPayload
})