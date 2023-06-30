import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Slice/userSlice'
import ProdSlice from './Slice/ProdSlice'
import cartSlice from './Slice/cartSlice'

export const store = configureStore({
  reducer: {
    auth:userSlice,
    prod:ProdSlice,
    shopCart:cartSlice,
  }
})