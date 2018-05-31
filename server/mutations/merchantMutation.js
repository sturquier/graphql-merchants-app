const mongoose = require('mongoose')
const graphQL = require('graphql')
const MerchantType = require('../types/merchantType')
const Merchant = mongoose.model('merchant')

const {
	GraphQLString
} = graphQL

const MerchantMutationType = {
	// Add a single merchant
	addMerchant: {
		type: MerchantType,
		args: {
			firstName: { type: GraphQLString },
			lastName: { type: GraphQLString },
			address: { type: GraphQLString }
		},
		resolve(parentValue, { firstName, lastName, address }) {
			return (new Merchant({ firstName, lastName, address })).save()
		}
	}
}

module.exports = MerchantMutationType