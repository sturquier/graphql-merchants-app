import React, { Component } from 'react'

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
						{this.props.products && this.renderProducts()}
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
			</tr>)
		})
	}
}

export default ProductsList