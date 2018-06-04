import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import addMerchantMutation from '../../mutations/merchants/addMerchant'
import getMerchantsQuery from '../../queries/merchants/getMerchants'

class MerchantForm extends Component {

	render() {
		return (
			<div>
				<h4>Merchant Form</h4>

				<hr/>

				<form className="col s12">
					<div className="row">
						<div className="input-field col s6">
							<input
								type="text"
								id="firstName"
								className="validate"
								placeholder="First Name"
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
							/>
							<label for="address" className="active">Address</label>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default MerchantForm