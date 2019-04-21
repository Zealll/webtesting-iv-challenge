const express = require('express')

const routers = require('../users/usersRouters.js')

const server = express()

server.use(express.json())


server.get('/', (req,res) => {
    res.send(
        res.send(
            `<h1>Welcome to Elan's Project</h1>`
        )
    )
})

server.use('/users', routers)


module.exports = server