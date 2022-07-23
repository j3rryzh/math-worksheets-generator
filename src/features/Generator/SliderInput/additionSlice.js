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
    setX: (state, action) => { state.x = action.payload },
    setY: (state, action) => { state.y = action.payload },
    setCarrying: (state, action) => { state.carrying = action.payload },
  }
})

export default additionSlice.reducer