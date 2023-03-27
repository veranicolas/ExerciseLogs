import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../types/DataTypes'

const initialState = {
  value:{
    email: '',
    _id: '',
    name: '',
    lastName: '',
    photo: '', // url
    language: '' ,
    country:'',
    weight:0,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action){
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserData } = userSlice.actions

export default userSlice.reducer