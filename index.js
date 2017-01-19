const express = require('express')
const path = require('path')

const app = express()
const port = 8000
const rootname = path.join(__dirname, 'startbootstrap-landing-page-gh-pages')

app.use(express.static(rootname))

app.listen(port, function () {
	console.log("allo")
})
