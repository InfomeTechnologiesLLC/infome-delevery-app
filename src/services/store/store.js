
import { configureStore } from '@reduxjs/toolkit'

import DialogSlice from './deliveryStatusReducer/dailogBoxSlice'
import DeliveryListSlice from './deliveryListReducer/deliveryListSlice'

export default configureStore({
    reducer: {
        deliverydialog: DialogSlice.reducer,
        deliverylist: DeliveryListSlice.reducer
    },
})