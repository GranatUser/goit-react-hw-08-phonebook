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
  handleClickDelete = (event) => {

    const arr = [];
    this.state.contacts.forEach((contact) => {
      if (contact.id === event.currentTarget.id) {
        return;
      }
      else {
        arr.push(contact);
      }

    })
    this.setState({ contacts: arr });
  }
  handleOnChange = (event) => {
    this.setState({ filter: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const fieldName = event.currentTarget.elements.name.value;
    for (const contact of this.state.contacts) {
      if (contact.name === fieldName) {
        alert(fieldName + " is already in contacts.");
        event.currentTarget.reset();
        return;
      }
    }
    const fieldNumber = event.currentTarget.elements.number.value;
    this.setState({ contacts: this.state.contacts.concat([{ name: fieldName, id: nanoid(), number: fieldNumber }]) });
    event.currentTarget.reset();

  };
  render() {
    return (
      <AppStyled>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} handleOnChange={this.handleOnChange} />
        <ContactList contacts={this.state.contacts} filter={this.state.filter} handleClickDelete={this.handleClickDelete} />
      </AppStyled>

    );
  }
} 
