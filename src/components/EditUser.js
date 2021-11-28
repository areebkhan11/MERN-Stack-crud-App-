import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from "@material-ui/core";
import  {useState, useEffect} from 'react'
import { useHistory, useParams } from "react-router";
const useStyle = makeStyles({

    container:{
        width : '50%',
        margin: "5% 0 0 25%",
        '& > *' :{
        marginTop: 20
    }
    }

}) 


 

const EditUser = () =>{
    const [user , setUser] = useState({name:"", username:"", email:"", phone:"" })
    const classes = useStyle();
    const history = useHistory();
    const {id} = useParams();


    // useEffect(() => {
    //    loadUserData ();
    // }, [])

    // const loadUserData = async () => {
    //     const responce = await getUsers(id);
            // setUser (responce.data );

    // }


    const onValueChange= (e) =>{
        
        setUser ({...user , [e.target.name]: e.target.value})
     }
    
     const EditUserDetails = async () => {
        await editUsers (id , user)
        history.push('')
     }



        return (

            <FormGroup className = {classes.container}>
                <Typography> Edit user </Typography>
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
                        onClick={EditUserDetails}
                        variant = "contained"
                        color = "primary"> 
                        Add User
                    </Button>
                </FormControl>
            </FormGroup>
        );
}

export default EditUser