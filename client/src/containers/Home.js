import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {

	render() {
		return (
			<div>
				<h4>GraphQL Products App</h4>

				<p>
					<Link to="/merchants">
						<a className="waves-effect waves-light btn">
							<i className="material-icons left">list</i>Merchants List
						</a>
					</Link>
				</p>

				<p>
					<Link to="/products">
						<a className="waves-effect waves-light btn">
							<i className="material-icons left">list</i>Products List
						</a>
					</Link>
				</p>
			</div>
		)
	}
}

export default Home