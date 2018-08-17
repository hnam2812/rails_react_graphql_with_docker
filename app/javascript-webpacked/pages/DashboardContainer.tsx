import * as React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { RootState } from '../reducers/root'
import {testAction} from '../actions/action_test'
import { State } from 'reducers/test_reducer'

const mapStateToProps = (state: RootState) => ({
  test: state.testReducer
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    testAction: bindActionCreators(
      testAction, dispatch
    )
})

type Props = {
  testAction: (payload: string)=> void
  test: State
}

class DashboardContainer extends React.Component<Props> {

  componentWillMount() {
    this.props.testAction('test')
  }

  render() {
    if(!localStorage.getItem('authToken')) return <Redirect to='/login' />
    return (
      <div className='container'>
        <h1>Dashboard</h1>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
