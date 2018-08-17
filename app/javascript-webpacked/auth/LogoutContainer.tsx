import * as React from 'react'
import { api } from '../api'

class LogoutContainer extends React.Component {

  handleLogoutClick() {
    api
      .get('/logout')
      .then(() => {
        localStorage.clear()
        window.location.href = '/login'
      })
      .catch((err: any) => {
        if (err.response.status == 401) {
          this.setState({ error: err.response.data.errors })
        }
      })
  }

  render() {
      return (
        <a href="#" onClick={this.handleLogoutClick.bind(this)}>Logout</a>
      )
  }
}

export default LogoutContainer
