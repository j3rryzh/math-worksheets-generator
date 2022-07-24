import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  vertical: false,
}

const displaySlice = createSlice({
  name: 'displayConfig',
  initialState,
  reducers: {
    vertical: (state, action) => { state.vertical = action.payload },
  }
})

export const { vertical } = displaySlice.actions
export default displaySlice.reducer