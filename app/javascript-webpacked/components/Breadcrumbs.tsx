import * as React from 'react'
import { Link } from 'react-router-dom'
import BreadcrumbsItem, { BreadcrumbsItemType } from './BreadcrumbsItem'

type Props = {
  items: Array<BreadcrumbsItemType>
}

class Breadcrumbs extends React.Component<Props, {}> {
  render() {
    return (
      <nav aria-label="breadcrumb" role="navigation">
        <ol className="breadcrumb">
          <li className='breadcrumb-item'>
            <Link to='/'>Dashboard</Link>
          </li>
          {this.props.items.map((item, i) => <BreadcrumbsItem key={i} item={item} />)}
        </ol>
      </nav>
    )
  }
}

export default Breadcrumbs
