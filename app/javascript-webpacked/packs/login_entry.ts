import LoginContainer from '../auth/LoginContainer'
import apolloClient from '../modules/apolloClient'
import renderReact from '../modules/renderReact'

renderReact(LoginContainer, 'login-form-wrapper', apolloClient, {})
