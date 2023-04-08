import React from "react";
import { useDispatch} from "react-redux";
import { requestAddContact } from "../../redux/contacts/operations";
import { toast } from "react-toastify";
import { useRef } from "react";
export function ContactForm() {
    const nameInputRef = useRef();
    const numberInputRef = useRef();
    const dispatch = useDispatch();
    const handleSubmit =async (event) => {
        event.preventDefault();
        const name =  nameInputRef.current.value;
        const number = numberInputRef.current.value;

        try{
             await dispatch(requestAddContact({name,number})).unwrap();
            toast.success(`The contact was successfully added!`)
        }
        catch(e){
            if(e==="Request failed with status code 400") {
                toast.error(`This contact is already exist.`);
            }
            else{
                toast.error(`Ooops.....Something went wrong`);
            }
            
        }
        reset();
   }
  
   const reset = ()=>{
    nameInputRef.current.value ="";
    numberInputRef.current.value ="";
   }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <b>Name</b><br />
                <input
                    ref={nameInputRef}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <br />
            <label>
                <b>Number</b><br />
                <input
                     ref={numberInputRef}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <br />
            <button type="submit">Add contact
            </button>
        </form>
    );
}