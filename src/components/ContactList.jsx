import { ItemContactForm } from "./ItemContactList";
import PropTypes from 'prop-types';

export function ContactList(props) {
    return (
        <ul>
            {props.contacts.map((contact) => {
                if (contact.name.toLowerCase().includes(props.filter.toLowerCase())) {
                    return (<ItemContactForm id={contact.id} onClick={props.handleClickDelete} key={contact.id}>
                        {contact.name}: {contact.number}
                    </ItemContactForm>);
                }
                return null;
            })}
        </ul>
    );
}
ContactList.propTypes = {
    handleClickDelete: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }
    ).isRequired).isRequired
}