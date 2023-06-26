import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Slice/userSlice'
import ProdSlice from './Slice/ProdSlice'

export const store = configureStore({
  reducer: {
    auth:userSlice,
    prod:ProdSlice,
  }
})