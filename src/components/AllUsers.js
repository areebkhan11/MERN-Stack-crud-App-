import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles, Button } from "@material-ui/core";
import {Link} from 'react-router-dom'


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

    const users = 
    [
    {
        id: '1',
        name : 'areeb',
        username: 'areeb khan',
        email:'AreebKhan123123@gmail.com',
        phone: '03062306838'
    
    
     }]

     console.log(users)

    const classes = useStyles();

    // const [users, serUsers] = useState([]);

    // useEffect(() => {
    //     getAllUsers();
        
    // }, [])

    // const getAllUsers = async () =>{
    //     const response = await getUsers();
    //     console.log(response.data)
    //     setUsers(response.data)
    // }

    // const deleteuser = async (id) =>{
    //     await deleteuser (id);
    //     getAllUsers();
    // }


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
                        <TableRow>
                         <TableCell>{user.id}</TableCell>
                         <TableCell>{user.name}</TableCell>
                         <TableCell>{user.username}</TableCell>
                         <TableCell>{user.email}</TableCell>
                         <TableCell>{user.phone}</TableCell>
                         <TableCell>
                             <Button variant = "contained" color = "primary"  style={{margin : "10px"}} component = {Link}to = {`/Edit/${user.id}`}>Edit</Button>
                             <Button variant = "contained" color = "secondary" onClick = {()=> deleteuser(user.id) }> Delete</Button>
                         </TableCell>
                         </TableRow>
                    ))
                }
            </TableBody>
        </Table>
       
    );
}

export default AllUsers;