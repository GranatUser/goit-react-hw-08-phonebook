import { createSlice } from "@reduxjs/toolkit";
import { requestLogout, requestRegister ,requestLogin,requestRefresh} from "./operations";

const initialState = {
    user:{
        name:null,
        email:null,
    },
    token:null,
    isLoggedIn:false,
    status:"idle",
    error:null,
    isRefreshing:false
}


const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers:(builder)=>builder
    //registerUser
    .addCase(requestRegister.pending,pendingReducer)
    .addCase(requestRegister.fulfilled,(state,{payload})=>{
        state.status = 'resolved';
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn=true;
        
    })
    .addCase(requestRegister.rejected,errorReducer)

      //loginUser

      .addCase(requestLogin.pending,pendingReducer)
    .addCase(requestLogin.fulfilled,(state,{payload})=>{
        state.status = 'resolved';
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn=true;
        
    })
    .addCase(requestLogin.rejected,errorReducer)
     //logoutUser

     .addCase(requestLogout.pending,pendingReducer)
    .addCase(requestLogout.fulfilled,(state)=>{
        state.status = 'resolved';
        state.user = {
            name:null,
            email:null
        };
        state.token = null;
        state.isLoggedIn=false;
    })
    .addCase(requestLogout.rejected,errorReducer)
//user refresh
.addCase(requestRefresh.pending,pendingReducer)
.addCase(requestRefresh.fulfilled,(state,{payload})=>{
    state.status = 'resolved';
    state.user = {
        name:payload.name,
        email:payload.email
    };
    state.token = null;
    state.isLoggedIn=true;
})
.addCase(requestRefresh.rejected,errorReducer)


})
function pendingReducer(state){
    state.error=null;
    state.status = 'pending';
}
function errorReducer(state,{payload}){
    state.status = 'rejected';
    state.error = payload.error;
}
export const userReducer = userSlice.reducer;