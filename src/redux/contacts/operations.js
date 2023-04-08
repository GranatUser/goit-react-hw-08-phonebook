import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserAPI,ContactsAPI } from "../../services/ContactsAPI";

export const requestUserContacts=createAsyncThunk(
    'user/getAll',
    async(_,thunkAPI)=>{
        try{
            const responce = await ContactsAPI.getContacts();

            return responce;
        }
        catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const requestAddContact=createAsyncThunk(
    'user/addContact',
    async(formData,thunkAPI)=>{
        try{
            const responce = await ContactsAPI.addContact(formData);

            return responce;
        }
        catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)