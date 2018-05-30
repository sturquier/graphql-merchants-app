const app = require('./server/server')
require('dotenv').config()

app.listen(process.env.SERVER_PORT, () => {
	console.log('Server listening on port ' + process.env.SERVER_PORT)
})