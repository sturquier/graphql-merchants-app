const express = require('express')
const expressGraphQL = require('express-graphql')
const bodyParser = require('body-parser')

const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use('/graphql', expressGraphQL({
	graphiql: true
}))

module.exports = server