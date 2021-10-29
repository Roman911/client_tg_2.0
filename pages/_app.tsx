import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import { useApollo } from '../lib/apolloClient'
import { wrapper } from '../store'
import '../styles/globals.scss'

const WrappedApp: React.FC<AppProps> = ({Component, pageProps}) => {
  const client = useApollo(pageProps.initialApolloState)

  return <ApolloProvider client={ client } >
    <Component {...pageProps} />
  </ApolloProvider>
}

export default wrapper.withRedux(WrappedApp)