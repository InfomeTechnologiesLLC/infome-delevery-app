import { createSlice } from '@reduxjs/toolkit'

export const DialogSlice = createSlice({
    name: 'deliverydialog',
    initialState: {
        show: false,
        value: 0
    },

    reducers: {
        setDailog: (state, action) => {

            state.value = action.payload.value
            state.show = action.payload.show
            if (action.payload.selected_id) {
                state.selected_id = action.payload.selected_id
            }

            // state = { show: action.payload.show, value: action.payload.value }
        }
    }
})

export const { setDailog } = DialogSlice.actions
export default DialogSlice