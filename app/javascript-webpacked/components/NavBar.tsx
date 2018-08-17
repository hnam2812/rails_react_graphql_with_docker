import * as React from 'react'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import LogoutContainer from '../auth/LogoutContainer'

type State = {
  navBar: {
    link: string
    label: string
  }[]
}

class NavBar extends React.Component<RouteComponentProps<any, any>, State> {
  state: State = {
    navBar: [
      {
        link: '/companies',
        label: 'Companies'
      }
    ]
  }

  render() {
    return (
      <div className="navbar-container">
          <div className="panel panel-default">
              <div className="panel-body">
                  <div className="panel panel-default navbar-t">
                      <div className="navbar-t-body" id="myNavbar">
                          <ul className="nav navbar-nav navbar-t-left">
                              <li className="active">
                                  <Link to="/">SKELETON_APP</Link>
                              </li>
                              {this.state.navBar.map(item => {
                                const isActive = this.props.location.pathname.search(item.link) == 0
                                return (
                                  <li key={ item.label } className={ isActive ? 'active' : '' }>
                                    <Link to={ item.link }>
                                      { item.label }
                                    </Link>
                                  </li>
                                )
                              })}
                          </ul>

                          <ul className="nav navbar-nav navbar-right navbar-t-right">
                            {
                              localStorage.getItem('authToken') ? (
                                <li>
                                  <div className="dropdown">
                                    <button className="btn-t dropdown-toggle dropdown-t" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        {localStorage.getItem('email')}
                                        <span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <li>
                                            <a href="#">Edit Profile</a>
                                        </li>
                                        <li role="separator" className="divider no-margin-r"></li>
                                        <li>
                                          <LogoutContainer />
                                        </li>
                                    </ul>
                                  </div>
                                </li>
                              ) : (
                                <React.Fragment>
                                  <li>
                                    <a href="/login">Login</a>
                                  </li>
                                  <li><a href="/sign_up">Sign up</a></li>
                                </React.Fragment>
                              )
                            }
                          </ul>
                          <div className="clearfix"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default withRouter(NavBar)
