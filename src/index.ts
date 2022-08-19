const express = require('express')
import { AppDataSource } from "./data-source"
import { router } from "./routes"
import * as bodyParser from "body-parser"
AppDataSource.initialize()

const app = express()

app.use(bodyParser.json())
app.use(router)

app.listen(3001, () =>{
    console.log('servidor on')
})


    
