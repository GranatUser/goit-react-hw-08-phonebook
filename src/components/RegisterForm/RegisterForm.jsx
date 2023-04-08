import { useRef } from "react";
import { useDispatch} from "react-redux";
import { requestRegister } from "../../redux/user/operations";
import { toast } from "react-toastify";

export function RegisterForm(){
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const dispatch = useDispatch();
    const handleSubmit = async(event)=>{
        event.preventDefault();
        const formData = {
            name:nameInputRef.current.value,
            email:emailInputRef.current.value,
            password:passwordInputRef.current.value,
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
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label >
                    <p>Name:</p>
                    <input required ref={nameInputRef} type="text" name="userName" placeholder="Oleg Kunak" />
                </label>
                <label >
                    <p>Email:</p>
                    <input required ref={emailInputRef} type="email" name="userEmail" placeholder="OlegKunak@gmail.com" />
                </label>
                <label >
                    <p>Password:</p>
                    <input required minLength={6} ref={passwordInputRef} type="password" name="userPassword"/>
                </label>
                <button type="submit"> Sign Up</button>
            </form>
        </div>
    );
}