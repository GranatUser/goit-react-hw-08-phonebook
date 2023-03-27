import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://641fbb4a25cb6572103c6acb.mockapi.io/api/v1";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const contacts = await axios.get('/contacts');
            return contacts.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const addContact = createAsyncThunk(
    'contacts/AddContact',
    async ({ number, name }, thunkAPI) => {
        try {
            const contacts = await axios.post('/contacts', { number, name });
            return contacts.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)
export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const contacts = await axios.delete(`/contacts/${contactId}`);
            return contacts.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    })