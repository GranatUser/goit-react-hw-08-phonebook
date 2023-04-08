import React from "react";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "../components/Filter";
function Contacts(){
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
        </div>
  
    );
}
export default withAuthRedirect(Contacts,'/login') ;