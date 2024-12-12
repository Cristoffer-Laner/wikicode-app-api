import express from 'express';
import cors from 'cors';
import { Task } from './models/Task.js';
import { sequelize } from './databases/connectDb.js';
import router from './routes/index.js';

const app = express()
let port = 3030

app.use(express.json())
app.use(cors())
app.use(router)

async function connectDb() {
    try {
        // syncs
        await sequelize.authenticate()
        await Task.sync({force:true})
        console.log('Conection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

connectDb();

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});
