import React, { Component } from 'react'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import MerchantsList from '../components/merchants/MerchantsList'
import MerchantDetails from '../components/merchants/MerchantDetails'
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
						<Route exact path="/merchants/:id" component={MerchantDetails}/>
					</Switch>
				</HashRouter>
			</ApolloProvider>
		)
	}
}

export default App