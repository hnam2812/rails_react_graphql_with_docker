import * as React from 'react'
import gql from 'graphql-tag'
import { ApolloError } from 'apollo-boost'
import { graphql, ChildProps, MutationFunc, compose } from 'react-apollo'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import {
  updateCompanyMutation,
  updateCompanyMutationVariables
} from '../../graphql/__generated__/operation-types'

import CompanyForm, { CompanyInput } from './CompanyForm'
import Breadcrumbs from '../../components/Breadcrumbs'

const updateCompany = gql`
  mutation updateCompany($input: CompanyInputType!, $id: ID!) {
    updateCompany(input: $input, id: $id) {
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

const getCompany = gql`
  query companyEdit($id: ID!) {
    company(id: $id) {
      id
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

      ceoSignatureFilename
      certificateOfIncorporationFilename
      secretarySignatureFilename

      certificateOfIncorporationFileSize
      ceoSignatureFileSize
      secretarySignatureFileSize

      certificateOfIncorporationFileExtension
      ceoSignatureFileExtension
      secretarySignatureFileExtension
    }
  }
`

type Response = {
  company: CompanyInput
}

type MutationProps = {
  updateCompany: MutationFunc<updateCompanyMutation, updateCompanyMutationVariables>
  onCancelClick: () => void
}

type CombinedProps = ChildProps<RouteComponentProps<any, any>, Response> & MutationProps

type State = {
  errors: Array<string>
}
class CompanyEdit extends React.Component<CombinedProps, State> {
  state: State = {
    errors: []
  }

  handleFormSubmit = (input: any) => {
    this.props
      .updateCompany({
        variables: {
          id: this.props.match.params.id,
          input
        }
      })
      .then(() => {
        this.props.history.push('/companies')
      })
      .catch((error: ApolloError) => {
        const err = JSON.parse(error.graphQLErrors[0].message)
        this.setState({ errors: err })
      })
  }

  handleFormCancel = () => {
    this.props.history.push('/companies')
  }

  render() {
    if (!this.props.data || this.props.data.loading || !this.props.data.company) {
      return null
    }
    const company = this.props.data.company
    const formInput = {
      legalName: company.legalName,
      contactName: company.contactName,
      contactPhone: company.contactPhone,
      address: company.address,
      vestingSchedule: company.vestingSchedule,
      rights: company.rights,
      restrictiveLegends: company.restrictiveLegends,
      accelerationProvisions: company.accelerationProvisions,
      ceoSignature: company.ceoSignature,
      certificateOfIncorporation: company.certificateOfIncorporation,
      secretarySignature: company.secretarySignature,
      removeCeoSignature: false,
      removeCertificateOfIncorporation: false,
      removeSecretarySignature: false
    }
    const breadCrumbs = [
      { path: '/companies', title: 'Companies' },
      { path: `/companies/${company.id}`, title: company.legalName },
      { path: '', title: 'Edit', active: true }
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
              form={formInput}
              company={company}
              errors={this.state.errors}
              onSubmit={this.handleFormSubmit}
              onCancel={this.handleFormCancel}
              formFitle='Edit Company'
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(compose(
  withRouter,
  graphql(getCompany, {
    options: (props: CombinedProps) => ({ variables: props.match.params, fetchPolicy: 'cache-and-network' })
  }),
  graphql(updateCompany, { name: 'updateCompany' }),
  )(CompanyEdit))
