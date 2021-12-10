import express, { Router } from 'express';
import  mongoose from 'mongoose';
import cors from 'cors';
import route from './route/routes.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());
app.use('/users', route)


const PORT = 9000;

const URL = 'mongodb://user:areebkhan@crud-shard-00-00.0thgh.mongodb.net:27017,crud-shard-00-01.0thgh.mongodb.net:27017,crud-shard-00-02.0thgh.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-11g1ih-shard-0&authSource=admin&retryWrites=true&w=majority';


mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() =>{
    app.listen (PORT , ()=>{
        console.log(`Sercer is successfully running on Port ${PORT} `)
    });
}).catch (error =>{
    console.log("Error : ", error.message);
})



