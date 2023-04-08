import React from "react";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { ContactList } from "../../components/ContactList/ContactList";
import { Filter } from "../../components/Filter";
import { ContactsStyled } from "./Contacts.styled";


function Contacts(){
    return (
      <main>
        <ContactsStyled>
          <h1>Phonebook</h1>
          <ContactForm/>
          <h2>Contacts</h2>
          <Filter/>
          <ContactList/>
        </ContactsStyled>
      </main>
   
   
  
    );
}
export default withAuthRedirect(Contacts,'/login') ;