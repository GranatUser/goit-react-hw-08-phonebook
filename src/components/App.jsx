import React,{useEffect} from "react";
import { ContactForm } from "./ContactForm";
import { Filter } from "./Filter";
import { ContactList } from "./ContactList";
import { AppStyled } from '../App.Styled';
import { fetchContacts } from "../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectError } from "../redux/selectors";


export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <AppStyled>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error</p>}
      <ContactList />
    </AppStyled>

  );

} 
