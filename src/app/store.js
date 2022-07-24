import { configureStore } from '@reduxjs/toolkit'
import additionReducer from '../features/Generator/slices/additionSlice'
import subtractionReducer from '../features/Generator/slices/subtractionSlice'
import displayReducer from '../features/Generator/slices/displaySlice'

export default configureStore({
  reducer: {
    additionConfig: additionReducer,
    subtractionConfig: subtractionReducer,
    displayConfig: displayReducer,
  }
})