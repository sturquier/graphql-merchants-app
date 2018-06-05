import React, { Component } from 'react'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import MerchantsList from '../components/merchants/MerchantsList'
import MerchantForm from '../components/merchants/MerchantForm'
import MerchantDetails from '../components/merchants/MerchantDetails'
import ProductForm from '../components/products/ProductForm'
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
						<Route exact path="/" render={() => (
							<Redirect to="/merchants"/>
						)}/>
						<Route exact path="/merchants" component={MerchantsList}/>
						<Route exact path="/merchants/new" component={MerchantForm}/>
						<Route exact path="/merchants/:id" component={MerchantDetails}/>
						<Route exact path="/merchants/:id/product/new" component={ProductForm}/>
					</Switch>
				</HashRouter>
			</ApolloProvider>
		)
	}
}

export default App