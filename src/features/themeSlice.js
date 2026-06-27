import { createSlice } from "@reduxjs/toolkit"


export const themeSlice = createSlice({
    initialState: {darkMode: false},
    name: "theme",
    reducers: {
        toggleTheme(state){
            state.darkMode = !state.darkMode;
        }
    }
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer