import { createSlice } from '@reduxjs/toolkit'

export const chatDetailUserSlice = createSlice({
    name: 'chatDetailUserSlice',
    initialState: {
        value: {

        }
    },
    reducers: {
        getUserInChatBox: (state,action) => {
            return {
                ...state,
                value: {
                    ...state.value,
                    [action.payload.idUser] : action.payload
                }
            }
        },
        removeIdUser : (state) => {
            state.value = {}
        }
    }
});

// Action creators are generated for each case reducer function
export const { getUserInChatBox, removeIdUser } = chatDetailUserSlice.actions;

export default chatDetailUserSlice.reducer;
