import { createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
    name: 'chats',
    initialState: {
        value: []
    },
    reducers: {
        chatsFetch: (state, action) => {
            state.value = action.payload
        },
    }
});

// Action creators are generated for each case reducer function
export const { chatsFetch } = chatSlice.actions;

export default chatSlice.reducer;
