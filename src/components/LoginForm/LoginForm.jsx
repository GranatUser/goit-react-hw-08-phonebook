import { useRef } from "react";
import { useDispatch} from "react-redux";
import { requestLogin} from "../../redux/user/operations";
import { toast } from "react-toastify";


export function LoginForm(){

    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const dispatch = useDispatch();
    const handleSubmit = async(event)=>{
        event.preventDefault();
        const formData = {
            email:emailInputRef.current.value,
            password:passwordInputRef.current.value,
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
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label >
                    <p>Email:</p>
                    <input required ref={emailInputRef} type="email" name="userEmail" placeholder="OlegKunak@gmail.com" />
                </label>
                <label >
                    <p>Password:</p>
                    <input required minLength={6} ref={passwordInputRef} type="password" name="userPassword"/>
                </label>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}