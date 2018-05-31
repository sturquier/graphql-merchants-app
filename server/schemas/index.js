const graphQL = require('graphql')
const {
	GraphQLSchema
} = graphQL

require('../models/merchantModel')
require('../schemas/productSchema')

const RootQueryType = require('../queries/rootQuery')
const MutationType = require('../mutations/rootMutation')

module.exports = new GraphQLSchema({
	query: RootQueryType,
	mutation: MutationType
})