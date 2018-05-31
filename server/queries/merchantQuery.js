const mongoose = require('mongoose')
const graphQL = require('graphql')
const MerchantType = require('../types/merchantType')
const Merchant = mongoose.model('merchant')

const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLID
} = graphQL

const MerchantQueryType = {
	// Find all merchants
	merchants: {
		type: new GraphQLList(MerchantType),
		resolve() {
			return Merchant.find({})
		}
	},
	// Find a single merchant
	merchant: {
		type: MerchantType,
		args: { id: { type: new GraphQLNonNull(GraphQLID) }},
		resolve(parentValue, { id }) {
			return Merchant.findById(id)
		}
	}
}

module.exports = MerchantQueryType