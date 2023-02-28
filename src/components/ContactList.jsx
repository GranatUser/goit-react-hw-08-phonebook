import React from "react";
import { ItemContactForm } from "./ItemContactList";
import PropTypes from 'prop-types';

export class ContactList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.contacts.map((contact) => {
                    if (contact.name.toLowerCase().includes(this.props.filter.toLowerCase())) {
                        return (<ItemContactForm id={contact.id} onClick={this.props.handleClickDelete} key={contact.id}>
                            {contact.name}: {contact.number}
                        </ItemContactForm>);
                    }
                    return null;
                })}
            </ul>
        );
    }
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