import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
const initialState = {
    pastes:localStorage.getItem("pastes")
    ?JSON.parse(localStorage.getItem("pastes")):[]
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;

      // 1. Check if a paste with the same title already exists
      const existingPaste = state.pastes.find((item) => item.title === paste.title);

      if (existingPaste) {
        // If it exists, show an error and STOP the function
        toast.error("Paste already exists!");
        return; 
      }

      // 2. If it doesn't exist, proceed as normal
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste Created Successfully!");
    },
    updateToPastes: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);

      if (index >= 0) {
        // Replace the old paste with the new updated one
        state.pastes[index] = paste;
        
        // Save to local storage
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        
        // Show success toast
        toast.success("Paste Updated!");
      }
    },
    resetAllPastes: (state) => {
      state.pastes=[];
      localStorage.removeItem("pastes");
    },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;

      console.log("Deleting paste with ID:", pasteId); // Debugging check

      const index = state.pastes.findIndex((item) => item._id === pasteId);

      if (index >= 0) {
        // Remove the item from the array
        state.pastes.splice(index, 1);
        
        // Update LocalStorage
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        
        // Show success message
        toast.success("Paste deleted!");
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes} = pasteSlice.actions

export default pasteSlice.reducer