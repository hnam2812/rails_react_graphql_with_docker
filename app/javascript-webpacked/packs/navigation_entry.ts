import NavigationContainer from '../components/NavigationContainer'
import apolloClient from '../modules/apolloClient'
import renderReact from '../modules/renderReact'

renderReact(NavigationContainer, 'nav-header', apolloClient, {})
