import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import getProductsQuery from '../../queries/products/getProducts'

class ProductsList extends Component {

	render() {
		return (
			<div>
				<h4>Products List</h4>
				<table className="table striped responsive-table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Description</th>
							<th>Price</th>
							<th>Merchant</th>
						</tr>
					</thead>
					<tbody>
						{this.renderProducts()}
					</tbody>
				</table>
			</div>
		)
	}

	renderProducts() {
		if (!this.props.getProductsQuery.loading) {
			return this.props.getProductsQuery.products.map((product) => {
				return (<tr key={product.id}>
					<td>{product.name}</td>
					<td>{product.description}</td>
					<td>{product.price}</td>
					<td>ADD LINK</td>
				</tr>)
			})
		} else {
			return 'Loading products'
		}
	}
}

export default compose(
	graphql(getProductsQuery, {
		name: 'getProductsQuery'
	})
)(ProductsList)