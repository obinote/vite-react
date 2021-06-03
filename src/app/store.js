import { configureStore } from '@reduxjs/toolkit'

import loginReducer from '../Features/login/slice'

export default configureStore({
  reducer: {
    login: loginReducer,
  },
})
