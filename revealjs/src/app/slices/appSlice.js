import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  slides: [],
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    
    addSlide: (state, action) => {
      state.slides.push(action.payload)
    },
  },
})


export const { addSlide } = appSlice.actions

export default appSlice.reducer