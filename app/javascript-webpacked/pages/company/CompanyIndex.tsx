import * as React from 'react'
import gql from 'graphql-tag'
import { graphql, ChildProps, compose } from 'react-apollo'

import CompanyRow from './CompanyRow'
import {Link} from 'react-router-dom'
import Breadcrumbs from '../../components/Breadcrumbs'

type Company = {
  id: string
  legalName: string
  contactName: string
  contactPhone: string
}

const getCompanies = gql`
  query companies {
    companies {
      id
      legalName
      contactName
      contactPhone
    }
  }
`
type Response = {
  companies: Company[]
}

type CombinedProps = ChildProps<{}, Response>
class CompanyIndexContainer extends React.Component<CombinedProps> {
  render() {
    if (!this.props.data || this.props.data.loading || !this.props.data.companies) {
      return null
    }
    const companies = this.props.data.companies
    const breadCrumbs = [
      {path: "", title: "Companies", active: true},
    ]
    return (
      <div className="container">
        <Breadcrumbs items={breadCrumbs}/>
        <div className="row">
          <div className="col-md-6">
            <h3>Companies</h3>
            <div>{`${companies.length} companies`}</div>
          </div>
          <div className="col-md-6">
            <Link className="btn-t btn-t-lg btn-t-primary-2 btn-t-icon btn-head-table pull-right mt-40"
              to="/companies/new">
              <img src="/images/add.png"/>
              <span>New Company</span>
            </Link>
          </div>
        </div>
        <br/>
        <table className="table table-hover table-t">
          <thead>
            <tr className="text-center">
              <th className="table-header">Name</th>
              <th className="table-header">Contact Name</th>
              <th className="table-header">Contact Phone</th>
              <th className="table-header">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              companies.map(company => {
                return (
                  <CompanyRow key={company.id} company={company} />
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default compose(graphql(getCompanies, {
  options: {fetchPolicy: 'cache-and-network'} })
)(CompanyIndexContainer)
