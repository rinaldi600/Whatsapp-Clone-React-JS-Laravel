import { configureStore } from '@reduxjs/toolkit'
import modalBox from './js/features/modalBox'
import modalBoxChatUser from './js/features/modalBoxChat';
import userSlice from './js/features/getDetailUser';

export default configureStore({
    reducer: {
        modalBox,
        modalBoxChatUser,
        userSlice
    }
})
