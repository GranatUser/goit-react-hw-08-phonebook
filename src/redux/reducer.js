import { nanoid } from "nanoid";
import { combineReducers } from "redux";


const initialContacts = JSON.parse(localStorage.getItem("contacts")) ?? [];
const initialFilter = '';
const contactsReducer = (contacts = initialContacts, action) => {
    switch (action.type) {
        case 'contacts/addContact': {
            const existContact = contacts.find((contactApp) => { return contactApp.name === action.payload.name });
            if (existContact !== undefined) {
                alert(action.payload.name + " is already in contacts.");
                return contacts;
            }
            const finalContact = {
                id: nanoid(),
                ...action.payload
            }
            return [...contacts, finalContact];
        }
        case 'contacts/deleteContact': {
            return contacts.filter((contact) => { return contact.id !== action.payload.id });
        }
        default:
            return contacts;
    }
}

const filterReducer = (filter = initialFilter, action) => {
    switch (action.type) {
        case "filter/setFilter": {
            return action.payload.filter;

        }
        default:
            return filter;
    }
}
export const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer

});