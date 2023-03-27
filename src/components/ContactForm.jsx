import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { selectContacts } from "../redux/selectors";
import { addContact } from "../redux/operations";
export function ContactForm() {
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.currentTarget.elements.name.value;
        const number = event.currentTarget.elements.number.value;
        const existContact = contacts.find((contactApp) => { return contactApp.name === name });
            if (existContact !== undefined) {
                alert(name + " is already in contacts.");
                return;
            }
        dispatch(addContact({
            name,
            number
        }));
        event.currentTarget.reset();
   }
    return (
        <form onSubmit={handleSubmit}>
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