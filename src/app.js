import express from 'express'
import router from './route/router.js';
const app = express()

app.use(express.json());
app.use('/', router);

 
const PORT = 8080
 app.listen(PORT,()=>{
    console.log(`server running at PORT ${PORT}`)
 })