import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  x: [0, 9],
  y: [0, 9],
  carrying: false,
}

const additionSlice = createSlice({
  name: 'additionConfig',
  initialState,
  reducers: {
    updateX: (state, action) => { state.x = action.payload },
    updateY: (state, action) => { state.y = action.payload },
    updateCarrying: (state, action) => { state.carrying = action.payload },
  }
})

export const { updateX, updateY, updateCarrying } = additionSlice.actions
export default additionSlice.reducer