import { createSlice } from "@reduxjs/toolkit";
import { requestUserContacts, requestAddContact, requestDeleteContact} from "./operations";

const initialState = {
    contacts:null,
    status:"idle",
    error:null
}


const contactsSlice = createSlice({
    name:'contacts',
    initialState,
    extraReducers:(builder)=>builder


     //getUserContacts

     .addCase(requestUserContacts.pending,pendingReducer)
    .addCase(requestUserContacts.fulfilled,(state,{payload})=>{
        state.status = 'resolved';
        state.contacts = payload;
        
    })
    .addCase(requestUserContacts.rejected,errorReducer)

    //addUserContact

    .addCase(requestAddContact.pending,pendingReducer)
    .addCase(requestAddContact.fulfilled,(state,{payload})=>{
        state.status = 'resolved';
        state.contacts =state.contacts===null
        ?[payload]
        :[...state.contacts,payload];
        
    })
    .addCase(requestAddContact.rejected,errorReducer)

       //deleteUserContact

       .addCase(requestDeleteContact.pending,pendingReducer)
       .addCase(requestDeleteContact.fulfilled,(state,{payload})=>{
           state.status = 'resolved';
           state.contacts = state.contacts.filter((contact)=>contact.id!==payload.id);

       })
       .addCase(requestDeleteContact.rejected,errorReducer)
})
function pendingReducer(state){
    state.error=null;
    state.status = 'pending';
}
function errorReducer(state,{payload}){
    state.status = 'rejected';
    state.error = payload.error;
}
export const contactsReducer = contactsSlice.reducer;