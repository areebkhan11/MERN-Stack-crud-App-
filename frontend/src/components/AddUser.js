import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from "@material-ui/core";
import {useState, useEffect} from 'react'
import { useHistory } from "react-router";
import { addUser } from "../Database/Service/api";



const useStyle = makeStyles({

    container:{
        width : '50%',
        margin: "5% 0 0 25%",
        '& > *' :{
        marginTop: 20
    }
    }

}) 


 

const AddUser = () =>{
    const [user , setUser] = useState({name:"", username:"", email:"", phone:"" })
    const classes = useStyle();
    const history = useHistory();

    const onValueChange= (e) =>{
        
        setUser ({...user , [e.target.name]: e.target.value})
     }
    
     const addUserDetails = async () =>{
            await addUser(user);
            history.push('/AllUsers');
        }

        


        return (

            <FormGroup className = {classes.container}>
                <Typography> Add user </Typography>
                <FormControl >
                    <InputLabel>Name</InputLabel>
                    <Input onChange = {(e)=>{onValueChange(e)}} name='name' />
                    </FormControl>
                    <FormControl>
                    <InputLabel>UserName</InputLabel>
                    <Input onChange = {(e)=>{onValueChange(e)}} name='username' />
                    </FormControl>
                    <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange = {(e)=>{onValueChange(e)}} name='email'/>
                    </FormControl>
                    <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input  onChange = {(e)=>{onValueChange(e)}} name='phone'/>
                    </FormControl>
                    <FormControl>
                    <Button 
                        onClick={addUserDetails}
                        variant = "contained"
                        color = "primary"> 
                        Add User
                    </Button>
                </FormControl>
            </FormGroup>
        );
}

export default AddUser