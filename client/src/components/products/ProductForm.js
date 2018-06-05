import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import getMerchantQuery from '../../queries/merchants/getMerchant'
import addProductToMerchantMutation from '../../mutations/products/addProduct'

class ProductForm extends Component {

	constructor(props) {
		super(props)
		this.state = {
			name: '',
			description: '',
			price: '',
			errors: []
		}
	}

	render() {

		if (this.props.getMerchantQuery.loading) {
			return <div>Loading merchant form</div>
		} else {
			return (
				<div>
					<h4>Product Form of {this.props.getMerchantQuery.merchant.firstName} {this.props.getMerchantQuery.merchant.lastName}</h4>
					<div className="row errors">{this.renderFormErrors()}</div>
					<hr/>

					<form className="col s12">
						<div className="row">
							<div className="input-field col s6">
								<input
									type="text"
									id="name"
									className="validate"
									placeholder="Name"
									onChange={e => this.setState({
										name: e.target.value
									})}
								/>
								<label for="name" className="active">Name</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<input
									type="text"
									id="description"
									className="validate"
									placeholder="Description"
									onChange={e => this.setState({
										description: e.target.value
									})}
								/>
								<label for="description" className="active">Description</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<input
									type="text"
									id="price"
									className="validate"
									placeholder="Price"
									onChange={e => this.setState({
										price: e.target.value
									})}
								/>
								<label for="price" className="active">Price</label>
							</div>
						</div>
						<div className="row">
							<button
								className="btn waves-effect waves-light"
								onClick={this.handleSubmitProductForm.bind(this)}
							>Submit
								<i className="material-icons right">send</i>
							</button>
						</div>
					</form>
				</div>
			)
		}
	}

	handleSubmitProductForm() {
		console.log('Submitted')
	}

	renderFormErrors() {
		return this.state.errors.map(err => err)
	}
}

export default compose(
	graphql(getMerchantQuery, {
		name: 'getMerchantQuery',
		options: (props) => {
			return {
				variables: { id: props.match.params.id }
			}
		}
	})
)(ProductForm)