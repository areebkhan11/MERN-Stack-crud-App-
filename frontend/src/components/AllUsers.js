import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles, Button } from "@material-ui/core";
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { getUsers, deleteUser  } from "../Database/Service/api";


const useStyles = makeStyles ({
    table: {
        width :"90%",
        margin: ' 50px 0 0 50px'
    },
    thead:{
        '& > *' :{
            background : '#000000',
            color:'#ffffff',
            fontsize: 20
        }
    }
})



const AllUsers = () =>{

  

   
    const classes = useStyles();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
        
    }, [])

    const getAllUsers = async () =>{
        const response = await getUsers();
        setUsers(response.data)
    }

    const deleteuserdata = async (id) =>{
        await deleteUser (id);
        getAllUsers();
    }


    return (
        <Table className = {classes.table}>
            <TableHead>
                <TableRow className = {classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>User Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user =>(
                        <TableRow key={user._id}>
                         <TableCell>{user._id}</TableCell>
                         <TableCell>{user.name}</TableCell>
                         <TableCell>{user.username}</TableCell>
                         <TableCell>{user.email}</TableCell>
                         <TableCell>{user.phone}</TableCell>
                         <TableCell>
                             <Button variant = "contained" color = "primary"  style={{margin : "10px"}} component = {Link}to = {`/Edit/${user._id}`}>Edit</Button>
                             <Button variant = "contained" color = "secondary" onClick = {()=> deleteuserdata(user._id) }> Delete</Button>
                         </TableCell>
                         </TableRow>
                    ))
                }
            </TableBody>
        </Table>
       
    );
}

export default AllUsers;