import * as React from 'react'
import gql from 'graphql-tag'
import { graphql, ChildProps, compose, MutationFunc } from 'react-apollo'

import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import Breadcrumbs from '../../components/Breadcrumbs'
import {
  deleteCompanyMutation,
  deleteCompanyMutationVariables
} from '../../graphql/__generated__/operation-types'
import ConfirmModal from '../../components/ConfirmModal'

type Company = {
  id: string
  legalName: string
  contactName: string
  contactPhone: string
}

const getCompany = gql`
  query companyShow($id: ID!) {
    company(id: $id) {
      id
      legalName
      contactName
      contactPhone
    }
  }
`

const deleteCompany = gql`
  mutation deleteCompany($id: ID!) {
    deleteCompany(id: $id) {
      legalName
    }
  }
`

type Response = {
  company: Company
}

type MutationProps = {
  deleteCompany: MutationFunc<deleteCompanyMutation, deleteCompanyMutationVariables>
}

type CombinedProps = ChildProps<RouteComponentProps<any, any>, Response> & MutationProps

type State = {
  shouldShowModal: boolean
}
class CompanyShowContainer extends React.Component<CombinedProps, State> {
  state: State = {
    shouldShowModal: false
  }

  handleDeleteButtonClick = () => {
    this.setState({ shouldShowModal: true })
  }

  handleCancelDeleteClick = () => {
    this.setState({ shouldShowModal: false })
  }

  handleConfirmDelete = () => {
    this.props.deleteCompany({ variables: this.props.match.params })
    .then(() => {
      this.props.history.push('/companies')
    })
    .catch(() => {
      // Handle delete error.
    })
  }

  render() {
    if (!this.props.data || this.props.data.loading || !this.props.data.company) {
      return null
    }
    const company = this.props.data.company
    const breadCrumbs = [
      { path: '/companies', title: 'Companies' },
      { path: `/companies/${company.id}`, title: company.legalName, active: true }
    ]
    return (
      <div className="container">
        <Breadcrumbs items={breadCrumbs}/>
        <div className="col-md-12">
          <ConfirmModal isShow={this.state.shouldShowModal}
                title="Confirm delete"
                content={`Do you want to delete company ${company.legalName}?`}
                onCancelClick={this.handleCancelDeleteClick}
                onSubmitClick={this.handleConfirmDelete}/>

          <div className="actions-bar">
            <Link className="edit-table-item" to={`/companies/${company.id}/edit`}>
              <strong>EDIT</strong>
            </Link>
            <a className="edit-table-item mrl-25" href="javascript:void(0)"
              onClick={this.handleDeleteButtonClick.bind(this)}
            ><strong>DELETE</strong></a>
          </div>

          <h3>
            <span>Contact info</span>
          </h3>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-2">
                <label className="control-label" htmlFor="legal-name">Entity Legal Name</label>
              </div>
              <div className="col-md-10">
                <div className="form-group">
                  <span>{company.legalName}</span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2">
                <label className="control-label" htmlFor="legal-name">Contact Name</label>
              </div>
              <div className="col-md-10">
                <div className="form-group">
                  <span>{company.contactName}</span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2">
                <label className="control-label" htmlFor="legal-name">Contact Phone</label>
              </div>
              <div className="col-md-10">
                <div className="form-group">
                  <span>{company.contactPhone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(compose(
  withRouter,
  graphql(getCompany, {
    options: (props: CombinedProps) => ({ variables: props.match.params })
  }),
  graphql(deleteCompany, { name: 'deleteCompany' })
)(CompanyShowContainer))
