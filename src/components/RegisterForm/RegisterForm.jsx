import { useRef } from "react";
import { useDispatch} from "react-redux";
import { requestRegister } from "../../redux/user/operations";
import { toast } from "react-toastify";

import{RegisterFormStyled} from './RegisterForm.styled';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function RegisterForm(){
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const dispatch = useDispatch();
    const handleSubmit = async(event)=>{
        event.preventDefault();
        const formData = {
            name:nameInputRef.current.querySelector('input').value,
            email:emailInputRef.current.querySelector('input').value,
            password:passwordInputRef.current.querySelector('input').value,
        }
        try{
            const responce = await dispatch(requestRegister(formData)).unwrap();
            toast.success(`User ${responce.user.name} successfully registred!`)
        }
        catch(e){
            if(e==="Request failed with status code 400") {  
                toast.error(`This user is already exist`);
            }
            else{
                toast.error(`Ooops.....Something went wrong`);
            }
            
        }
    }
    return (
        <main>
            <h2>Register</h2>
            <RegisterFormStyled onSubmit={handleSubmit} >
             <TextField  fullWidth label="Name" variant="standard" required ref={nameInputRef} type="text" name="userName" placeholder="Oleg Kunak" />
             <TextField  fullWidth label="Email" variant="standard" required ref={emailInputRef} type="email" name="userEmail" placeholder="OlegKunak@gmail.com"/>
             <TextField  fullWidth label="Password" variant="standard" required minLength={6} ref={passwordInputRef} type="password" name="userPassword" />
                <Button type="submit" variant="contained">Sign Up</Button>
             </RegisterFormStyled>
        </main>
    );
}
