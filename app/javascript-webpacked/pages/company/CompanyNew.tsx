import * as React from 'react'
import gql from 'graphql-tag'
import { ApolloError } from 'apollo-boost'
import { graphql, ChildProps, MutationFunc, compose } from 'react-apollo'
import {
  createCompanyMutation,
  createCompanyMutationVariables
} from '../../graphql/__generated__/operation-types'

import CompanyForm from './CompanyForm'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import Breadcrumbs from '../../components/Breadcrumbs'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { RootState } from '../../reducers/root'
import {testAction} from '../../actions/action_test'
import { State as ReduxState } from '../../reducers/test_reducer'

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
  test: ReduxState
}

const createCompany = gql`
  mutation createCompany($input: CompanyInputType!) {
    createCompany(input: $input) {
      legalName
      contactName
      contactPhone
      address
      vestingSchedule
      rights
      restrictiveLegends
      accelerationProvisions
      ceoSignature
      certificateOfIncorporation
      secretarySignature
      removeCeoSignature
      removeCertificateOfIncorporation
      removeSecretarySignature
    }
  }
`

type MutationProps = {
  createCompany: MutationFunc<createCompanyMutation, createCompanyMutationVariables>
  onCancelClick: () => void
}

type CombinedProps = ChildProps<RouteComponentProps<any, any>, Response> & MutationProps & Props

type State = {
  errors: Array<string>
}

class CompanyNew extends React.Component<CombinedProps, State> {
  state: State = {
    errors: [],
  }

  handleFormSubmit = (input: any) => {
    this.props
      .createCompany({
        variables: {
          input: input
        }
      })
      .then(() => {
        this.props.history.push('/companies')
      })
      .catch((error: ApolloError) => {
        const err = JSON.parse(error.graphQLErrors[0].message);
        this.setState({errors: err});
      })
  }

  handleFormCancel = () => {
    this.props.history.push('/companies')
  }

  componentWillMount() {
    this.props.testAction('Company New action')
  }

  render() {
    console.log(this.props.test)
    const newCompany = {
      legalName: '',
      contactName: '',
      contactPhone: '',
      address: '',
      vestingSchedule: '',
      rights: '',
      restrictiveLegends: '',
      accelerationProvisions: '',
      ceoSignature: '',
      certificateOfIncorporation: '',
      secretarySignature: '',
      removeCeoSignature: false,
      removeCertificateOfIncorporation: false,
      removeSecretarySignature: false
    }

    const breadCrumbs = [
      {path: "/companies", title: "Companies"},
      {path: "", title: "New", active: true}
    ]

    return (
      <React.Fragment>
        <Breadcrumbs items={breadCrumbs}/>
        <ul className='error'>
          { this.state.errors.map((error, index) =>{
            return <li key={index}>{error}</li>
          })}
        </ul>
        <div className="panel">
          <div className="panel-body">
            <CompanyForm
              form={newCompany}
              company={newCompany}
              errors={this.state.errors}
              onSubmit={this.handleFormSubmit}
              onCancel={this.handleFormCancel}
              formFitle='Add New Company'
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(compose(
  withRouter,
  graphql(createCompany, { name: 'createCompany' }),
  connect(mapStateToProps, mapDispatchToProps)
)(CompanyNew))
