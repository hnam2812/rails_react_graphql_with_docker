import * as React from 'react'
import { Link } from 'react-router-dom'

export type BreadcrumbsItemType = {
  path: string
  title: string
  active?: boolean
}

type Props = {
  item: BreadcrumbsItemType
}

class BreadcrumbsItem extends React.Component<Props, {}> {
  render(): any {
    const item = this.props.item
    return (
      <React.Fragment>
        {item.active ? (
          <li className='breadcrumb-item active'>
            {item.title}
          </li>
        ) : (
          <li className='breadcrumb-item'>
            <Link to={item.path}>
              {item.title}
            </Link>
          </li>
        )}
      </React.Fragment>
    )
  }
}

export default BreadcrumbsItem
