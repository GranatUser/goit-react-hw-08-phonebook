import React,{useEffect} from "react";
import { ContactForm } from "../components/ContactForm";
import { Filter } from "../components/Filter";
import { ContactList } from "../components/ContactList";
import { fetchContacts } from "../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectError } from "../redux/selectors";

export default function Contacts(){
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
  
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter />
        {isLoading && <p>Loading...</p>}
        {error && <p>Error</p>}
        <ContactList />
      </div>
  
    );
}