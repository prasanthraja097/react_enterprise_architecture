import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@modules/auth/store/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // feature reducers go here (lazy-loaded modules can inject reducers)
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: import.meta.env.DEV,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
