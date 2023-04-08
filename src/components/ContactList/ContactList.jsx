import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {selectContactsStatus,selectContacts} from '../../redux/contacts/selectors'
import { useEffect } from "react";
import { requestDeleteContact, requestUserContacts } from "../../redux/contacts/operations";
import { selectIsLoggedIn } from "../../redux/user/selectors";
import { toast } from "react-toastify";
import { ItemContactForm } from "../ItemContactList/ItemContactList";
import { selectVisibleContacts } from "../../redux/contacts/selectors";
export function ContactList(){

    const isLoggedIn = useSelector(selectIsLoggedIn)
    const dispatch  = useDispatch();
    const status = useSelector(selectContactsStatus);
    const contacts = useSelector(selectContacts);
    const visibleContacts = useSelector(selectVisibleContacts) ;
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
        <>
        {status==="pending"&&<p>Loading...</p>}
        {status==="resolved"
        && contacts!==null
        &&
        <ul>
            {visibleContacts.map(contact=>{
                return <ItemContactForm contact={contact} handleDelete={()=>{ handleDeleteContact(contact.id)}}></ItemContactForm>
            })}
        </ul>
        }
        </>
      
    );
}