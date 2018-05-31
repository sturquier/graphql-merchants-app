const mongoose = require('mongoose')
const graphQL = require('graphql')
const MerchantType = require('../types/merchantType')
const Merchant = mongoose.model('merchant')

const {
	GraphQLList
} = graphQL

const MerchantQueryType = {
	// Find all merchants
	merchants: {
		type: new GraphQLList(MerchantType),
		resolve() {
			return Merchant.find({})
		}
	}
}

module.exports = MerchantQueryType