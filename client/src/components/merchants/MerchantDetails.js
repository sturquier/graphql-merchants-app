import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import getMerchantsQuery from '../../queries/merchants/getMerchants'
import getMerchantQuery from '../../queries/merchants/getMerchant'
import deleteMerchantMutation from '../../mutations/merchants/deleteMerchant'

class MerchantDetails extends Component {

	render() {

		if (this.props.getMerchantQuery.loading) {
			return <div>Loading merchant</div>
		} else {
			return (
				<div>
					<div className="space-between">
						<h4>Details of {this.props.getMerchantQuery.merchant.firstName} {this.props.getMerchantQuery.merchant.lastName}</h4>
						<i id="delete_merchant_btn" className="material-icons secondary-content" onClick={() => this.handleDeleteMerchant()}>delete</i>						
					</div>

					<hr/>

					<p>First Name : {this.props.getMerchantQuery.merchant.firstName}</p>
					<p>Last Name : {this.props.getMerchantQuery.merchant.firstName}</p>
					<p>Address : {this.props.getMerchantQuery.merchant.address}</p>
				</div>
			)
		}
	}

	handleDeleteMerchant() {
		this.props.deleteMerchantMutation({
			variables: { id: this.props.match.params.id },
			refetchQueries: [{query: getMerchantsQuery}]
		}).then(() => {
			this.props.history.push('/merchants')
		})
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
	}),
	graphql(deleteMerchantMutation, {
		name: 'deleteMerchantMutation'
	})
)(MerchantDetails)