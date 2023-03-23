import { ItemContactForm } from "./ItemContactList";
import { useSelector } from "react-redux";
import { getContacts,getFilter } from "../redux/selectors";
const getVisibleContacts = (contacts, filter) => {
    if (filter.trim() === "") return contacts;
    return contacts.filter((contact) => { return contact.name.toLowerCase().includes(filter.toLowerCase()) });
}
export function ContactList() {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const visibleContacts = getVisibleContacts(contacts, filter) ?? [];
   
    return (
        <ul>
            { visibleContacts.map((contact) => (
                <ItemContactForm id ={contact.id}key={contact.id}>
                    {contact.name}: {contact.number}
                </ItemContactForm>))}
        </ul>
    );
}
