import React, { Component } from 'react'

class MerchantDetails extends Component {

	render() {
		return (
			<div>
				<h4>Details of {this.props.match.params.id}</h4>
			</div>
		)
	}
}

export default MerchantDetails