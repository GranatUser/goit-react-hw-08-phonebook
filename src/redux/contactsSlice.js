import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const contactsInitialState = {
    contacts: []
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                const existContact = state.contacts.find((contactApp) => { return contactApp.name === action.payload.name });
                if (existContact !== undefined) {
                    alert(action.payload.name + " is already in contacts.");
                    return state;
                }
                const finalContact = {
                    id: nanoid(),
                    ...action.payload
                }
                return {
                    ...state,
                    contacts: [...state.contacts, finalContact]
                };
            },
            prepare(name, number) {
                return {
                    payload: {
                        name,
                        number
                    }
                }
            }
        },
        deleteContact(state, action) {
            return { contacts: state.contacts.filter((contact) => { return contact.id !== action.payload }) };
        }

    }
})
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;