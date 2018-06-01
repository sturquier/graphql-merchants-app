import React, { Component } from 'react'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
import MerchantList from '../components/merchants/MerchantList'
import ProductList from '../components/products/ProductList'
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
						<Route exact path="/merchants" component={MerchantList}/>
						<Route exact path="/products" component={ProductList}/>
					</Switch>
				</HashRouter>
			</ApolloProvider>
		)
	}
}

export default App