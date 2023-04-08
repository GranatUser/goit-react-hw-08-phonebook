import React from "react";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import {selectContactsStatus,selectContacts} from '../redux/contacts/selectors'
import { useEffect } from "react";
import { requestDeleteContact, requestUserContacts } from "redux/contacts/operations";
import { selectIsLoggedIn } from "../redux/user/selectors";
import { toast } from "react-toastify";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
function Contacts(){
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const dispatch  = useDispatch();
    const status = useSelector(selectContactsStatus);
    const contacts = useSelector(selectContacts);
    const handleDeleteContact=async(contactID)=>{
      try{
        await dispatch(requestDeleteContact(contactID)).unwrap();
        toast.success(`The contact was deleted`)
    }
    catch(e){
            toast.error(`Ooops.....Something went wrong`);
        
    }
      
    }

    useEffect(()=>{
      if(!isLoggedIn) return;
      dispatch(requestUserContacts());
    },[dispatch,isLoggedIn])
    return (
      <div>
        <ContactForm/>
        {status==="pending"&&<p>Loading...</p>}
        {status==="resolved"
        && contacts!==null
        &&<ul>
            {contacts.map(contact=>{
                return <li key={contact.id}>
                    <p>Name: {contact.name}</p>
                    <p>Number:{contact.number}</p>
                    <button onClick={()=>{handleDeleteContact(contact.id)}} >Delete</button>
                </li>
            })}
        </ul>

        }
      </div>
  
    );
}

export default withAuthRedirect(Contacts,'/login') ;