import * as React from 'react'
import { api } from '../api'

type State = {
  error: string | null
  form: {
    email: string
    password: string
  }
}

class LoginContainer extends React.Component<State> {
  state: State = {
    error: null,
    form: {
      email: '',
      password: ''
    }
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value
    const name = e.target.name
    if (Object.keys(this.state.form).indexOf(name) >= 0) {
      this.setState({
        form: {
          ...this.state.form,
          [name]: value
        }
      })
    }
  }

  handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    api
      .post('/sign_in', this.state.form)
      .then((response: any) => {
        console.log(response.data)
        localStorage.setItem('authToken', response.data.auth_token)
        localStorage.setItem('email', response.data.email)
        window.location.href = '/'
      })
      .catch((err: any) => {
        if (err.response.status == 401) {
          this.setState({ error: err.response.data.errors })
        }
      })
  }

  handleErrorClick() {
    this.setState({ error: null })
  }

  render() {
      return (
        <div className="row">
          {(this.state.error)
            ? <div id="flash">
              {this.state.error}
              <button className="close" onClick={this.handleErrorClick.bind(this)} type="button">×</button>
            </div>
            : ''
          }
          <div className="col-md-12 login-container">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="form-login">
                  <div className="form-group">
                    <h3 className="text-center form-login-header">SKELETON_APP</h3>
                    <p className="text-center form-login-lead">Let’s get started. Please login.</p>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                      <fieldset className="fieldset-t">
                        <legend>Email</legend>
                        <input autoFocus className="form-control input-t" type="email"
                          id="user-email" value={this.state.form.email}
                          name="email"
                          placeholder=" Email"
                          onChange={this.handleInputChange.bind(this)}
                        />
                      </fieldset>

                      <div className="mrt-25"></div>

                      <fieldset className="fieldset-t">
                        <legend>Password</legend>
                        <input autoComplete="false" className="form-control input-t" type="password"
                          placeholder=" Password"
                          name="password"
                          value={this.state.form.password}
                          onChange={this.handleInputChange.bind(this)}
                        />
                        <div className="form-control-feedback input-t-icon">
                            <img src="/images/trailing-icon.png" alt=""/>
                        </div>
                      </fieldset>

                      <div className="form-login-footer">
                        <p className="pull-left forgot">
                          <a href="/users/password/new">Forgot password?</a>
                        </p>
                        <input type="submit" className="pull-right btn-t btn-t-md btn-t-info" value="LOGIN"/>
                        <div className="clearfix"></div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default LoginContainer
