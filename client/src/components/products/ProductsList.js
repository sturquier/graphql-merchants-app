import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import getMerchantQuery from '../../queries/merchants/getMerchant'
import deleteProductMutation from '../../mutations/products/deleteProduct'

class ProductsList extends Component {

	render() {
		return (
			<div>
				<table className="table striped responsive-table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Description</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{this.props.merchant_id && this.props.products && this.renderProducts()}
					</tbody>
				</table>
			</div>
		)
	}

	renderProducts() {
		return this.props.products.map((product) => {
			return (<tr key={product.id}>
				<td>{product.name}</td>
				<td>{product.description}</td>
				<td>{product.price}</td>
				<td><i id="delete_product_btn" className="material-icons secondary-content" onClick={() => this.handleDeleteProduct(product.id)}>delete</i></td>
			</tr>)
		})
	}

	handleDeleteProduct(product_id) {
		this.props.deleteProductMutation({
			variables: { id: product_id }
		}).then(() => {
			this.props.getMerchantQuery.refetch()
		})
	}
}

export default compose(
	graphql(getMerchantQuery, {
		name: 'getMerchantQuery',
		options: (props) => {
			return {
				variables: { id: props.merchant_id }
			}
		}
	}),
	graphql(deleteProductMutation, {
		name: 'deleteProductMutation'
	})
)(ProductsList)