import React from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm";
import { Filter } from "./Filter";
import { ContactList } from "./ContactList";
import { AppStyled } from '../App.Styled'
export class App extends React.Component {
  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount() {
    this.setState({contacts: JSON.parse(localStorage.getItem("contacts"))})
  }
  
  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  handleClickDelete = (event) => {
    const currentId = event.currentTarget.id;
    this.setState((prev) => {
     return { contacts: (prev.contacts.filter((contact) => { return contact.id !== currentId })) }
    });
  }
  handleOnChange = (event) => {
    this.setState({ filter: event.target.value })
  }
  onAddContact = (contact) => {
    const existContact = this.state.contacts.find((contactApp) => { return contactApp.name === contact.name });
    if (existContact !== undefined) {
      alert(contact.name + " is already in contacts.");
      return;
    }
    const finalContact = {
      id: nanoid(),
      ...contact
    }
    this.setState((prev) => {
      return { contacts: [...prev.contacts, finalContact] }
    });

  }
  getFilterContacts = () => {
    return this.state.contacts.filter((contact) => { return contact.name.toLowerCase().includes(this.state.filter.toLowerCase()) });
  }
  render() {
    return (
      <AppStyled>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.onAddContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} handleOnChange={this.handleOnChange} />
        <ContactList contacts={this.getFilterContacts()} handleClickDelete={this.handleClickDelete} />
      </AppStyled>

    );
  }
} 
