import React, { Component } from 'react';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import './App.css';

const client = new ApolloClient({
	link: new HttpLink(),
	cache: new InMemoryCache()
});

class App extends Component {

	render() {
		return (
			<div>
				<h4>GraphQL Products App</h4>
			</div>
		);
	}
}

export default App;