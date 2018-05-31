const mongoose = require('mongoose')
const graphQL = require('graphql')
const MerchantType = require('../types/merchantType')
const Merchant = mongoose.model('merchant')

const {
	GraphQLString,
	GraphQLID,
	GraphQLFloat
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
	},
	// Delete a single merchant
	deleteMerchant: {
		type: MerchantType,
		args: { id: { type: GraphQLID }},
		resolve(parentValue, { id }) {
			return Merchant.remove({ _id: id })
		}
	},
	// Add a single product to a single merchant
	addProductToMerchant: {
		type: MerchantType,
		args: {
			name: { type: GraphQLString },
			description: { type: GraphQLString },
			price: { type: GraphQLFloat },
			merchantId: { type: GraphQLID }
		},
		resolve(parentValue, { merchantId, name, description, price }) {
			return Merchant.addProductToMerchant(merchantId, name, description, price)
		}
	},
}

module.exports = MerchantMutationType