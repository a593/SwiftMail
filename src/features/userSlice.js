import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




export const userSlice = createSlice({
    name:'user',
    initialState:{
       id:null,
       photoURL:null
    },

    reducers:{
        signin: (state,action) =>{
            state.id=action.payload.id;
            state.photoURL=action.payload.photoURL;
        },
        signout: (state) =>{
            state.id=null
            state.photoURL=null;
        },
        
       
    },
});

export const {signin,signout}=userSlice.actions;


//export const selectSendMessageIsOpen=(state) => state.mail.sendMessageIsOpen;

export const selectedUser=(state) => state.user.value;

// export const selectUser=(state) => state.user.id;
// export const selectUser=(state) => state.user.photoURL;



export default userSlice.reducer;
