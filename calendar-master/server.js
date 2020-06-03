const express = require("express")
const next = require('next')
const fs = require("fs")
const bodyParser = require('body-parser')
// const request = require('request')
// const { parse } = require('url')

const dev = process.env.NODE_ENV !== 'production'
const port = 3000

const app = next({ dev })
const handle = app.getRequestHandler()



app
    
    .prepare()
    .then(() => {
        const server = express();
        server.use(bodyParser.urlencoded({ extended: true }))
        server.use(bodyParser.json())
        server.all("/api/schedules", async (req, res) => {
            try {
                let text = fs.readFileSync("./test.json", "utf8")
                res.json(text)
                console.log(text)
            } catch(err) {
                console.log(err)
            }

        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.post('/api/Addschedule', function (req, res) {
            try {
                let date = JSON.stringify(req.body)
                console.log(date)
                fs.appendFileSync("./test.json", date)
            } catch (err) {
                console.log(err)
            }
        })


        server.listen(port, (err) => {
            if (err) {
                throw err;
            }
            console.log(`> Ready on http://localhost:${port}`)
        })
    }).catch(e => {
        console.log(e)
        process.exit(1)
    })
