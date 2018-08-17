import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-boost'

export default function<TApolloCache, TProps>(
  Comp: React.ComponentType<TProps>,
  targetElementOrId: HTMLElement | string,
  apolloClient: ApolloClient<TApolloCache> | null,
  props: Partial<TProps>
) {
  let element
  if (targetElementOrId instanceof HTMLElement) {
    element = targetElementOrId
  } else {
    element = document.getElementById(targetElementOrId)
  }

  if (!element) {
    throw new Error(`(RenderReact) The dom element with ID ${targetElementOrId} does not exist`)
  }

  const elProps = JSON.parse(
    element.dataset.reactProps || element.getAttribute('reactProps') || '{}'
  ) as TProps

  if (!apolloClient) {
    ReactDOM.render(<Comp {...elProps} {...props} />, element)
    return
  }

  ReactDOM.render(
    <ApolloProvider client={apolloClient}>
      <Comp {...elProps} {...props} />
    </ApolloProvider>,
    element
  )
}
