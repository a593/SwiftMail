import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




export const userSlice = createSlice({
    name:'user',
    initialState:{
       value:null,
    },

    reducers:{
        signin: (state,action) =>{
            state.value=action.payload
        },
        signout: (state) =>{
            state.value=null
        },
        
       
    },
});

export const {signin,signout}=userSlice.actions;


//export const selectSendMessageIsOpen=(state) => state.mail.sendMessageIsOpen;

// export const selectUser=(state) => state.user.value;

export const selectedUser=(state) => state.user.value;


export default userSlice.reducer;