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
    setX: (state, action) => { state.x = action.payload },
    setY: (state, action) => { state.y = action.payload },
    setBorrowing: (state, action) => { state.borrowing = action.payload },
  }
})

export default subtractionSlice.reducer