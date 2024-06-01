import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    name: '',
    email: ''
  },
  reducers: {
    updateName: (state,action) => {
      state.name = action.payload
    },
    updateEmail: (state, action) => {
      state.email = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateName, updateEmail } = dataSlice.actions

export default dataSlice.reducer