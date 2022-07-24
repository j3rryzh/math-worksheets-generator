import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  x: [0, 9],
  y: [0, 9],
  borrowing: false,
}

const subtractionSlice = createSlice({
  name: 'subtractionConfig',
  initialState,
  reducers: {
    updateX: (state, action) => { state.x = action.payload },
    updateY: (state, action) => { state.y = action.payload },
    updateBorrowing: (state, action) => { state.borrowing = action.payload },
  }
})

export const { updateX, updateY, updateBorrowing } = subtractionSlice.actions
export default subtractionSlice.reducer