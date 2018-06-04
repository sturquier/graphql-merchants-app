import React, { Component } from 'react'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
import MerchantsList from '../components/merchants/MerchantsList'
import ProductsList from '../components/products/ProductsList'
import './App.css'

const client = new ApolloClient({
	link: new HttpLink(),
	cache: new InMemoryCache()
})

class App extends Component {

	render() {
		return (
			<ApolloProvider client={client}>
				<HashRouter>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/merchants" component={MerchantsList}/>
						<Route exact path="/products" component={ProductsList}/>
					</Switch>
				</HashRouter>
			</ApolloProvider>
		)
	}
}

export default App