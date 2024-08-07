import { createSlice } from '@reduxjs/toolkit'
export const DeliveryListSlice = createSlice({
    name: 'deliverlist',
    initialState: {
        list: [],
        offset: 0
    },
    reducers: {
        setList: (state, action) => {
            // if (action.payload.list.lenght == 0) {
            //     state.offset = 0
            // } else {

            if (action.payload.offset != null) {
                state.offset = action.payload.offset

            } else {
                state.offset = state.offset + 20
            }

            // }
            state.list = action.payload.list
            console.log(state.offset);
        }
    }
})
export const { setList } = DeliveryListSlice.actions
export default DeliveryListSlice
