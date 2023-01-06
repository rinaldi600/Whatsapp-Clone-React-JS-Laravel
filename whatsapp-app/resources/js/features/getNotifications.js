import { createSlice } from '@reduxjs/toolkit'

export const notificationsSlice = createSlice({
    name: 'coverNotifications',
    initialState: {
        value: {

        }
    },
    reducers: {
        addNotifications: (state, action) => {
            return {
                ...state,
                value : {
                    ...state.value,
                    [action.payload.message['id_user']] : action.payload.message,
                }
            }
        },
    }
});

// Action creators are generated for each case reducer function
export const { addNotifications } = notificationsSlice.actions;

export default notificationsSlice.reducer
