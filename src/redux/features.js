import { createSlice } from '@reduxjs/toolkit'

export const featureSlice = createSlice({
  name: 'counter',
  initialState: {
    isLoading:false,
  },
  reducers: {
    openModal: (state) => {
        console.log(state.openPop);
      state.openPop = !state.openPop;
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
export const { openModal,openLoading,closeLoading } = featureSlice.actions

export default featureSlice.reducer