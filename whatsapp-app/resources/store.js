import { configureStore } from '@reduxjs/toolkit'
import modalBox from './js/features/modalBox'
import modalBoxChatUser from './js/features/modalBoxChat';

export default configureStore({
    reducer: {
        modalBox,
        modalBoxChatUser,
    }
})
