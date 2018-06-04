import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import addMerchantMutation from '../../mutations/merchants/addMerchant'
import getMerchantsQuery from '../../queries/merchants/getMerchants'

class MerchantForm extends Component {

	constructor(props) {
		super(props)
		this.state = {
			firstName: '',
			lastName: '',
			address: '',
			errors: []
		}
	}

	render() {
		return (
			<div>
				<h4>Merchant Form</h4>
				<div className="row errors">{this.renderFormErrors()}</div>
				<hr/>

				<form className="col s12">
					<div className="row">
						<div className="input-field col s6">
							<input
								type="text"
								id="firstName"
								className="validate"
								placeholder="First Name"
								onChange={e => this.setState({
									firstName: e.target.value
								})}
							/>
							<label for="firstName" className="active">First Name</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s6">
							<input
								type="text"
								id="lastName"
								className="validate"
								placeholder="Last Name"
								onChange={e => this.setState({
									lastName: e.target.value
								})}
							/>
							<label for="lastName" className="active">Last Name</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s6">
							<input
								type="text"
								id="address"
								className="validate"
								placeholder="Address"
								onChange={e => this.setState({
									address: e.target.value
								})}
							/>
							<label for="address" className="active">Address</label>
						</div>
					</div>
					<div className="row">
						<button
							className="btn waves-effect waves-light"
							onClick={this.handleSubmitMerchantForm.bind(this)}
						>Submit
							<i className="material-icons right">send</i>
						</button>
					</div>
				</form>
			</div>
		)
	}

	handleSubmitMerchantForm() {
		this.props.mutate({
			variables: {
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				address: this.state.address
			},
			refetchQueries: [{query: getMerchantsQuery}]
		}).then(() => {
			this.props.history.push('/merchants')
		}).catch((errors) => {
			const errorMsgs = errors.graphQLErrors.map(err => err.message)
			this.setState({errors: errorMsgs})
		})
	}

	renderFormErrors() {
		return this.state.errors.map(err => err)
	}
}

export default graphql(addMerchantMutation)(MerchantForm)