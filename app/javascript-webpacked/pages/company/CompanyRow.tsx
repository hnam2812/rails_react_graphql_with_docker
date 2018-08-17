import * as React from 'react'
import { Link } from 'react-router-dom'

type Company = {
  id: string
  legalName: string
  contactName: string
  contactPhone: string
}

type Props = {
  company: Company
}
class CompanyRow extends React.Component<Props, {}> {
  render() {
    const company = this.props.company
    return (
      <tr className='item-row'>
        <td><Link to={`/companies/${company.id}`}>{company.legalName}</Link></td>
        <td>{company.contactName}</td>
        <td>{company.contactPhone}</td>
        <td>
          <Link className="btn btn-flat btn-warning" to={`/companies/${company.id}/edit`}>Edit</Link>
        </td>
      </tr>
    )
  }
}

export default CompanyRow
