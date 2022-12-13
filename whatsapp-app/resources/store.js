import { configureStore } from '@reduxjs/toolkit'
import modalBox from './js/features/modalBox'

export default configureStore({
    reducer: {
        modalBox,
    }
})
