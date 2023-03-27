import { ItemContactForm } from "./ItemContactList";
import { useSelector } from "react-redux";
import {selectVisibleContacts} from "../redux/selectors";



export function ContactList() {
    const visibleContacts = useSelector(selectVisibleContacts) ;
   
    return (
        <ul>
            { visibleContacts.map((contact) => (
                <ItemContactForm id ={contact.id}key={contact.id}>
                    {contact.name}: {contact.number}
                </ItemContactForm>))}
        </ul>
    );
}
