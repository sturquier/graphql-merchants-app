import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { Link } from 'react-router-dom'
import getMerchantsQuery from '../../queries/merchants/getMerchants'

class MerchantsList extends Component {

	render() {
		return (
			<div>
				<div className="space-between">
					<h4>Merchants List</h4>
					<Link to="/merchants/new" id="add_merchant_btn" className="btn-floating waves-effect waves-light blue">
						<i className="material-icons">add</i>
					</Link>
				</div>

				<hr/>

				<table className="table striped responsive-table">
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Address</th>
							<th>Details</th>
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
					<td>
						<Link to={`/merchants/${merchant.id}`}>
							<i className="material-icons">find_in_page</i>
						</Link>
					</td>
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