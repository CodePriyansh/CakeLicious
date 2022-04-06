const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://root:vVevJky93l9yzQEL@neha.rvvto.mongodb.net/cakeliciouh?retryWrites=true&w=majority", () => {

});
// const cache = require('route-cache')

const adminRoute = require('./routes/admin/adminRoute')
const customerRoute = require('./routes/customer/customerRoute')

app.use(cors())

app.use(express.json({ limit: '50MB' }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Base route for Admin
app.use('/admin', adminRoute)
    // app.use('/admin', cache.cacheSeconds(20), adminRoute)
    // app.use('/index', indexRoute)
    //Base route for Customer
    // app.use('/customer', customerRoute)

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log("Server is running on port: ", port)
})