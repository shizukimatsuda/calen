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
            } catch (err) {
                console.log(err)
            }

        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.post('/api/Addschedule', function (req, res) {
            try {
                let text = fs.readFileSync("./test.json", "utf8")
                let textjson = JSON.parse(text)
                let data = req.body
                textjson.push(data)
                let writedata = JSON.stringify(textjson)
                fs.writeFileSync("./test.json", writedata)
                res.json(req.body)
            } catch (err) {
                console.log(err)
            }
        })

        server.all("/api/DeleteSchedules", function (req, res) {
            try {
                let text = fs.readFileSync("./test.json", "utf8")
                let textjson = JSON.parse(text)
                let data = req.body
                let filter = textjson.filter(s => s.id !== data.id)
                let newdata = JSON.stringify(filter)
                fs.writeFileSync("./test.json", newdata)
                res.json(req.body)
            } catch(err) {
                console.log(err)
            }
        })

        server.all("/api/EditSchedule", function (req, res) {
            try {
                let text = fs.readFileSync("./test.json", "utf8")
                let textjson = JSON.parse(text)
                let data = req.body
                let newSchedules = textjson.filter(s => s.id !== data.id);
                newSchedules.push(data)
                let edit = JSON.stringify(newSchedules)
                fs.writeFileSync("./test.json", edit)
                res.json(req.body)
                console.log(req.body)
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
