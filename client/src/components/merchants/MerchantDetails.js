import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { Link } from 'react-router-dom'
import getMerchantsQuery from '../../queries/merchants/getMerchants'
import getMerchantQuery from '../../queries/merchants/getMerchant'
import deleteMerchantMutation from '../../mutations/merchants/deleteMerchant'
import ProductsList from '../products/ProductsList'

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

					<section>
						<p><h6>First Name : </h6>{this.props.getMerchantQuery.merchant.firstName}</p>
						<p><h6>Last Name : </h6>{this.props.getMerchantQuery.merchant.lastName}</p>
						<p><h6>Address : </h6>{this.props.getMerchantQuery.merchant.address}</p>
					</section>

					<hr/>

					<section>
						<div className="space-between">
							<h5>Products List</h5>
							<Link to={`/merchants/${this.props.getMerchantQuery.merchant.id}/product/new`} id="add_product_btn" className="btn-floating waves-effect waves-light blue">
								<i className="material-icons">add</i>
							</Link>
						</div>
						<ProductsList merchant_id={this.props.getMerchantQuery.merchant.id} products={this.props.getMerchantQuery.merchant.products}/>
					</section>

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