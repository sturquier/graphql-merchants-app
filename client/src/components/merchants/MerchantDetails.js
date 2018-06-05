import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import getMerchantQuery from '../../queries/merchants/getMerchant'

class MerchantDetails extends Component {

	render() {

		if (this.props.getMerchantQuery.loading) {
			return <div>Loading merchant</div>
		} else {
			return (
				<div>
					<h4>
						Details of {this.props.getMerchantQuery.merchant.firstName} {this.props.getMerchantQuery.merchant.lastName}
					</h4>
					<hr/>

					<p>First Name : {this.props.getMerchantQuery.merchant.firstName}</p>
					<p>Last Name : {this.props.getMerchantQuery.merchant.firstName}</p>
					<p>Address : {this.props.getMerchantQuery.merchant.address}</p>
				</div>
			)
		}
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
)(MerchantDetails)