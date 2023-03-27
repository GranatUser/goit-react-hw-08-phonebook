import { createSelector } from "@reduxjs/toolkit";
export const selectContacts = state => state.contacts.contacts;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
    [selectFilter, selectContacts],
    (filter, contacts) => {
        if (filter.trim() === "") return contacts;
        return contacts.filter((contact) => { return contact.name.toLowerCase().includes(filter.toLowerCase()) });
    })