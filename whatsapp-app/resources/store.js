import { configureStore } from '@reduxjs/toolkit'
import modalBox from './js/features/modalBox'
import modalBoxChatUser from './js/features/modalBoxChat';
import userSlice from './js/features/getDetailUser';
import chatSlice from './js/features/getChats';
import notificationsSlice from './js/features/getNotifications'
import chatBoxUserDetail from './js/features/chatBoxUserDetail';

export default configureStore({
    reducer: {
        modalBox,
        modalBoxChatUser,
        userSlice,
        chatSlice,
        notificationsSlice,
        chatBoxUserDetail,
    }
})
