import app from './express'
import db from './models/db'
import config from './config/config'

app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.log(`Server listening on port: ${config.port}`)
})