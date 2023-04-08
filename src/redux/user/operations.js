import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserAPI,ContactsAPI } from "../../services/ContactsAPI";

export const requestRegister=createAsyncThunk(
    'user/register',
    async(formData,thunkAPI)=>{
        try{
            const responce = await UserAPI.register(formData);
            responce?.token&&localStorage.setItem('token',responce.token);
            return responce;
        }
        catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)
export const requestLogin=createAsyncThunk(
    'user/login',
    async(formData,thunkAPI)=>{
        try{
            const responce = await UserAPI.login(formData);
            responce?.token&&localStorage.setItem('token',responce.token);
            return responce;
        }
        catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)
export const requestLogout=createAsyncThunk(
    'user/logout',
    async(_,thunkAPI)=>{
        try{
            const responce = await UserAPI.logout();
            localStorage.removeItem("token")
            return responce;
        }
        catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)


export const requestDeleteContact=createAsyncThunk(
    'user/deleteContact',
    async(contactID,thunkAPI)=>{
        try{
            const responce = await ContactsAPI.deleteContact(contactID);

            return responce;
        }
        catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)
export const requestRefresh=createAsyncThunk(
    'user/refresh',
    async(_,thunkAPI)=>{
        try{
            const responce = await UserAPI.refresh();

            return responce;
        }
        catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)