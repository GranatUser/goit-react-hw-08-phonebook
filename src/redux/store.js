import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filter/filterSlice";
import { userReducer } from "./user/userSlice";
import { contactsReducer } from "./contacts/contactsSlice";


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        user: userReducer
    },
});



