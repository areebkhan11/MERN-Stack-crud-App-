import express from 'express';
import {getusers , adduser, getuserById, editUser, deleteUser}  from '../controller/user-Controller.js'


const route = express.Router();

route.get('/', getusers )
route.post('/add',adduser)
route.get('/:id', getuserById)
route.put('/:id', editUser)
route.delete('/:id', deleteUser)


export default route