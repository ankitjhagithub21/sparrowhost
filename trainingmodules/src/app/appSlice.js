import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modules: [],
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
   
    addTraingingModule: (state, action) => {
      state.modules.push(action.payload)
    },
  },
})


export const { addTraingingModule } = appSlice.actions

export default appSlice.reducer