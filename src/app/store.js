import { configureStore } from '@reduxjs/toolkit'
import additionReducer from '../features/Generator/SliderInput/additionSlice'
import subtractionReducer from '../features/Generator/SliderInput/substractionSlice'

export default configureStore({
  reducer: {
    additionConfig: additionReducer,
    subtractionConfig: subtractionReducer,
  }
})