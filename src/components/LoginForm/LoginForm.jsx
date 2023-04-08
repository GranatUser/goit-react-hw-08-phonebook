import { useRef } from "react";
import { useDispatch} from "react-redux";
import { requestLogin} from "../../redux/user/operations";
import { toast } from "react-toastify";
import { RegisterFormStyled } from "../RegisterForm/RegisterForm.styled";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function LoginForm(){

    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const dispatch = useDispatch();
    const handleSubmit = async(event)=>{
        event.preventDefault();
        const formData = {
            email:emailInputRef.current.querySelector('input').value,
            password:passwordInputRef.current.querySelector('input').value,
        }
        
        try{
            const responce = await dispatch(requestLogin(formData)).unwrap();
            toast.success(`User ${responce.user.name} successfully entered!`)
        }
        catch(e){
            if(e==="Request failed with status code 400") {
                toast.error(`No such user exists.`);
            }
            else{
                toast.error(`Ooops.....Something went wrong`);
            }
            
        }
    }
    return (
            <main>
                 <h2>Login</h2>
            <RegisterFormStyled onSubmit={handleSubmit} >
                <TextField  fullWidth label="Email" variant="standard" required ref={emailInputRef} type="email" name="userEmail" placeholder="OlegKunak@gmail.com"/>
                <TextField  fullWidth label="Password" variant="standard" required minLength={6} ref={passwordInputRef} type="password" name="userPassword" />
                <Button type="submit" variant="contained">Sign In</Button>
            </RegisterFormStyled>
            </main>
    );
}

