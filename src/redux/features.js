import { createSlice } from '@reduxjs/toolkit'

export const featureSlice = createSlice({
  name: 'counter',
  initialState: {
    isLoading:false,
    isAuthenticated:false,
  },
  reducers: {

    confirmAuth:(state)=>{
      state.isAuthenticated = true;
    },

    declineAuth:(state)=>{
      state.isAuthenticated = false;
    },

    openLoading:(state)=>{
      state.isLoading = true;
    },
    closeLoading:(state)=>{
      state.isLoading = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { openLoading,closeLoading,confirmAuth,declineAuth } = featureSlice.actions

export default featureSlice.reducer