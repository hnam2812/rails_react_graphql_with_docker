import * as React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './NavBar'
import CompanyIndex from 'pages/company/CompanyIndex'
import CompanyShow from 'pages/company/CompanyShow'
import CompanyNew from 'pages/company/CompanyNew'
import CompanyEdit from 'pages/company/CompanyEdit'
import LoginContainer from 'auth/LoginContainer'
import DashboardContainer from 'pages/DashboardContainer'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
const store = configureStore
class Navigation extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            { localStorage.getItem('authToken') && <NavBar/> }
            <Switch>
              <Route exact path="/" component={DashboardContainer} />
              <Route exact path="/login" component={LoginContainer} />
              <Route exact path="/companies" component={CompanyIndex} />
              <Route exact path="/companies/new" component={CompanyNew} />
              <Route exact path="/companies/:id" component={CompanyShow} />
              <Route exact path="/companies/:id/edit" component={CompanyEdit} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default Navigation
