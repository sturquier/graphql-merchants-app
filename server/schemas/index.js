const graphQL = require('graphql')
const {
	GraphQLSchema
} = graphQL

require('../models/merchantModel')
require('../models/productModel')

const RootQueryType = require('../queries/rootQuery')
const MutationType = require('../mutations/rootMutation')

module.exports = new GraphQLSchema({
	query: RootQueryType,
	mutation: MutationType
})