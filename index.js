import express from 'express';
import bodyParser from 'body-parser';
import usersRouter from './routes/users.js';

const app=express();
const PORT=3000

app.use(bodyParser.json());
app.use('/users',usersRouter);

app.get('/',(req,res)=>{
    res.send('mre')
})

app.listen(PORT,()=> console.log(`hell0 ${PORT}`))