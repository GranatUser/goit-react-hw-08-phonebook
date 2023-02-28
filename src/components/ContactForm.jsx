import React from "react";
import PropTypes from 'prop-types';
export class ContactForm extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const contact = {
            name: event.currentTarget.elements.name.value,
            number: event.currentTarget.elements.number.value
        }

        this.props.onAddContact(contact);
        event.currentTarget.reset();
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <b>Name</b><br />
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <br />
                <label>
                    <b>Number</b><br />
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <br />
                <button type="submit">Add contact
                </button>
            </form>
        );
    }
}

ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired
}