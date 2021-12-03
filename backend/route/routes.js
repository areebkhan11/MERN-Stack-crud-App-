import express from 'express';
import {getusers , adduser, getuserById}  from '../controller/user-Controller.js'


const route = express.Router();

route.get('/', getusers )
route.post('/add',adduser)
route.get('/:id', getuserById)


export default route