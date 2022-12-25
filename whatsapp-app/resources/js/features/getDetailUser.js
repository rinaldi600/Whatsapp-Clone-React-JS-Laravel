import { createSlice } from '@reduxjs/toolkit'

export const userDetailSlice = createSlice({
    name: 'userSlice',
    initialState: {
        value: {
            idUser : '',
            name : '',
            photo_profile : '',
        }
    },
    reducers: {
        getDetail: (state, action) => {
            return {
                ...state,
                value : {
                    idUser: action.payload.idUser,
                    name : action.payload.name,
                    photo_profile : action.payload.profile,
                }
            }
        },
    }
});

// Action creators are generated for each case reducer function
export const { getDetail } = userDetailSlice.actions;

export default userDetailSlice.reducer
