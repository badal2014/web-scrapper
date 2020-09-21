var express = require('express')
var app = express()
const bodyParser = require('body-parser');
var cheerio = require("cheerio");
var axios = require('axios');

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/', async (req, res) => {
    console.log(req.body)
    var document = ""
    await axios.get(req.body.url)
        .then(function (response) {
            document = cheerio.load(response.data);
            console.log(document('img').length)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    console.log('document', document)


    res.send({ status: 200, image: image })
})
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');
