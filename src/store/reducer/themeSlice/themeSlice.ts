import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface IFThemeState {
    currentTheme : string
}


const initialState : IFThemeState = {
    currentTheme : "dark",
}

const themeSlice = createSlice({
    name : "theme",
    initialState : initialState,
    reducers : {
        setTheme : (state, action : PayloadAction<string>) => {
            state.currentTheme = action.payload
        }
    }
})
export const {setTheme} = themeSlice.actions
export default themeSlice.reducer