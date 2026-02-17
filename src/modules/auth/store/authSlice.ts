import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { User } from '@modules/auth/types'
import { tokenStorage } from '@infrastructure/auth/tokenStorage' 

type AuthState = {
  user: User | null
  isAuthenticated: boolean
  status: 'idle' | 'loading' | 'failed'
  error?: string | null
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: !!tokenStorage.getAccessToken(),
  status: 'idle',
  error: null,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, action: PayloadAction<User>) {
      state.user = action.payload
      state.isAuthenticated = true
      state.error = null
    },
    logout(state) {
      tokenStorage.clear()
      state.user = null
      state.isAuthenticated = false
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload
      state.status = 'failed'
    },
  },
})

export const { setCredentials, logout, setError } = slice.actions
export default slice.reducer
