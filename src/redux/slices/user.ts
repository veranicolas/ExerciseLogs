import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:{
    email: '',
    id: '',
    givenName: '',
    familyName: '',
    photo: '', // url
    name: '' ,
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, action){
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { loginUser } = userSlice.actions

export default userSlice.reducer