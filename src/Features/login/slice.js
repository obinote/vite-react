import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  post: {
    username: '',
    password: '',
  },
}

export const login = createSlice({
  name: 'login',
  initialState: defaultState,
  reducers: {
    onChange: (state, { name, value }) => {
      state.post[name] = value
    },
  },
})

export const { onChange } = login.actions

export const loginSelector = ({ login }) => login

export default login.reducer
