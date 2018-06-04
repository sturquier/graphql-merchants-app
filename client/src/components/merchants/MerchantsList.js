import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import getMerchantsQuery from '../../queries/merchants/getMerchants'

class MerchantsList extends Component {

	render() {
		return (
			<div>
				<h4>Merchants List</h4>
				<table className="table striped responsive-table">
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Address</th>
							<th>Products</th>
						</tr>
					</thead>
					<tbody>
						{this.renderMerchants()}
					</tbody>
				</table>
			</div>
		)
	}

	renderMerchants() {
		if (!this.props.getMerchantsQuery.loading) {
			return this.props.getMerchantsQuery.merchants.map((merchant) => {
				return(<tr key={merchant.id}>
					<td>{merchant.firstName}</td>
					<td>{merchant.lastName}</td>
					<td>{merchant.address}</td>
					<td>ADD LINK</td>
				</tr>)
			})
		} else {
			return 'Loading merchants'
		}
	}
}

export default compose(
	graphql(getMerchantsQuery, {
		name: 'getMerchantsQuery'
	})
)(MerchantsList)