const express = require('express')
const expressGraphQL = require('express-graphql')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const schema = require('./schemas')
const server = express()

require('dotenv').config()

const MONGO_URI = process.env.MONGODB_URI
if (!MONGO_URI) {
	throw new Error('Invalid MongoDB URL')
}

mongoose.Promise = require('bluebird')
mongoose.connect(MONGO_URI)

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use('/graphql', expressGraphQL({
	graphiql: true,
	schema: schema
}))

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
server.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = server