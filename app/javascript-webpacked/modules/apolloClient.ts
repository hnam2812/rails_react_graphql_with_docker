import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  IntrospectionFragmentMatcher
} from 'apollo-boost'
import { onError } from 'apollo-link-error';

import cleanTypenameFieldLink from '../graphql/cleanTypenameFieldLink'
import * as instrospectionResult from '../graphql/__generated__/schema.json'

if (!instrospectionResult) {
  throw new Error(
    'No admin_schema.json found at ./app/graphql/, make sure you have generated it using `yarn gql-gen`'
  )
}

const endpoint = `/graphql`
const csrfEl = document.querySelector('meta[name="csrf-token"]')
const CSRF = csrfEl ? csrfEl.getAttribute('content') || '' : ''
const token = localStorage.getItem('authToken')

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: (instrospectionResult as any).data
})

const errorLink = onError(({ networkError }) => {
  // if (networkError) window.location.href = '/'
});

const cache = new InMemoryCache({ fragmentMatcher })
const httpLink = new HttpLink({
  uri: endpoint,
  credentials: 'include',
  headers: {
    'Content-type': 'application/json',
    'X-CSRF-TOKEN': CSRF,
    Authorization: token ? `Bearer ${token}` : ''
  }
})

const link = ApolloLink.from([cleanTypenameFieldLink, errorLink, httpLink])

// Create the apollo client
export default new ApolloClient({
  cache,
  link,
  ssrMode: false,
  connectToDevTools: true
})
