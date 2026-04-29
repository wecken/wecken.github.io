import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles"
import { ThemeProvider as StyledThemeProvider } from "@emotion/react"
import { createContext, FC, useContext, useMemo, useState } from "react"
import { ColorMode, createWeckenTheme } from "./theme"

interface ColorModeContextValue {
  mode: ColorMode
  toggleMode: () => void
}

const ColorModeContext = createContext<ColorModeContextValue>({
  mode: "light",
  toggleMode: () => undefined,
})

const getInitialMode = (): ColorMode => {
  const savedMode = window.localStorage.getItem("colorMode")

  if (savedMode === "light" || savedMode === "dark") {
    return savedMode
  }

  if (!window.matchMedia) {
    return "light"
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

export const useColorMode = (): ColorModeContextValue => {
  return useContext(ColorModeContext)
}

export const ThemeProvider: FC = ({ children }) => {
  const [mode, setMode] = useState<ColorMode>(getInitialMode)
  const theme = useMemo(() => createWeckenTheme(mode), [mode])

  const toggleMode = () => {
    setMode((currentMode) => {
      const nextMode = currentMode === "light" ? "dark" : "light"
      window.localStorage.setItem("colorMode", nextMode)
      return nextMode
    })
  }

  return (
    <ColorModeContext.Provider value={{ mode, toggleMode }}>
      <MuiThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  )
}
