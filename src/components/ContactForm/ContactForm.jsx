import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import React from "react";
import { useDispatch} from "react-redux";
import { requestAddContact } from "../../redux/contacts/operations";
import { toast } from "react-toastify";
import { useRef } from "react";
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
export function ContactForm() {
    const contacts = useSelector(selectContacts);
    const nameInputRef = useRef();
    const numberInputRef = useRef();
    const dispatch = useDispatch();
    const handleSubmit =async (event) => {
        event.preventDefault();
        const name =  nameInputRef.current.querySelector('input').value;
        const number = numberInputRef.current.querySelector('input').value;

        const existContact = contacts.find((contactApp) => { return contactApp.name === name });
        if (existContact !== undefined) {
            toast.error(`This contact is already exist.`);
            return;
        }
        try{
            await dispatch(requestAddContact({name,number})).unwrap();
            toast.success(`The contact was successfully added!`)
        }
        catch(e){
                toast.error(`Ooops.....Something went wrong`);
            
        }
        reset();
   }
  
   const reset = ()=>{
    nameInputRef.current.querySelector('input').value ="";
    numberInputRef.current.querySelector('input').value ="";
   }
    return (
        <form  onSubmit={handleSubmit}>
             <TextField  fullWidth label="Name" variant="standard" ref={nameInputRef}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required />
             <TextField  fullWidth label="Email" variant="standard" ref={numberInputRef}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required/>
              <Button style={{width:'200px',margin:'20px auto 0 auto',display:'block'}} type="submit" variant="contained">Add contact</Button>
        </form>
    );
}
