import React, { Component } from 'react'
import addProductMutation from '../../mutations/products/addProduct'

class ProductForm extends Component {

	render() {
		return (
			<div>
				<h4>Product Form of {this.props.match.params.id}</h4>
			</div>
		)
	}
}

export default ProductForm