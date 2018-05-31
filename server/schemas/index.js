const graphQL = require('graphql')
const {
	GraphQLSchema
} = graphQL

require('./merchantSchema')
require('./productSchema')

const RootQueryType = require('../queries/rootQuery')
const MutationType = require('../mutations/rootMutation')

module.exports = new GraphQLSchema({
	query: RootQueryType,
	mutation: MutationType
})