import {useAppDispatch, useAppSelector} from "../../hooks/useRedux"
import { setTheme } from "../../store/reducer/themeSlice/themeSlice"
function useThemes() {
    const dispatch = useAppDispatch()
    const {currentTheme} = useAppSelector((state) => state.theme)
    
    const toggleTheme = () => {
      const newTheme = currentTheme === "dark" ? "light" : "dark"
      dispatch(setTheme(newTheme)) 
    }

  return {
    currentTheme,
    toggleTheme
  }
}

export default useThemes