
export const addContact = (name, number) => {
    return {
        type: "contacts/addContact",
        payload: {
            name: name,
            number: number,
        }
    }
};

export const deleteContact = (contactId) => {
    return {
        type: "contacts/deleteContact",
        payload: {
            id: contactId
        }
    }
}
export const setFilter = (filter) => {
    return {
        type: "filter/setFilter",
        payload: {
            filter: filter
        }
    }
}