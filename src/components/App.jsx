import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm";
import { Filter } from "./Filter";
import { ContactList } from "./ContactList";
import { AppStyled } from '../App.Styled'
export function App() {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem("contacts")) ?? []);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts])


  const handleClickDelete = (event) => {
    const currentId = event.currentTarget.id;
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => { return contact.id !== currentId })
    });
  }
  const handleOnChange = (event) => {
    setFilter(event.target.value);
  }
  const onAddContact = (contact) => {
    const existContact = contacts.find((contactApp) => { return contactApp.name === contact.name });
    if (existContact !== undefined) {
      alert(contact.name + " is already in contacts.");
      return;
    }
    const finalContact = {
      id: nanoid(),
      ...contact
    }
    setContacts((prev) => {
      return [...prev, finalContact];
    });

  }
  const getFilterContacts = () => {
    return contacts.filter((contact) => { return contact.name.toLowerCase().includes(filter.toLowerCase()) });
  }

  return (
    <AppStyled>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleOnChange={handleOnChange} />
      <ContactList contacts={getFilterContacts()} handleClickDelete={handleClickDelete} />
    </AppStyled>

  );

} 
