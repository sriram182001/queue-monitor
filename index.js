const cron=require('node-cron')
const func=require('./functions/func.js')
require('dotenv').config()

cron.schedule('*/10 * * * * *',func)

//console.log(process.env)
