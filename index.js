import dotenv from 'dotenv';
import express from 'express';
import {StatusCodes} from 'http-status-codes'
import {getVersion,PORT} from './getVersion.js';
console.log('hello form index');
const app=express();

app.get('/version',(req,res)=>{
res.status(StatusCodes.BAD_REQUEST).send(getVersion());
})

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`)
})