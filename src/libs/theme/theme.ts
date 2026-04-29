import { createTheme } from "@mui/material/styles"

export type ColorMode = "light" | "dark"

// フォントを設定
const fontFamily = [
  "Helvetica Neue",
  "Arial",
  "Hiragino Kaku Gothic ProN",
  "Hiragino Sans",
  "Meiryo",
  "sans-serif",
  "sans-serif",
].join(",")

const lightPalette = {
  primary: {
    solid: "#347EED",
  },
  black: {
    high: "#4F4F4F",
    medium: "#828282",
    20: "#E0E0E0",
    10: "#F2F2F2",
  },
  white: {
    high: "#ffffff",
  },
  surface: {
    high: "#ffffff",
    elevated: "rgba(255, 255, 255, 0.92)",
    header: "rgba(255, 255, 255, 0.88)",
  },
}

const darkPalette = {
  primary: {
    solid: "#7CB1FF",
  },
  black: {
    high: "#F2F2F2",
    medium: "#BDBDBD",
    20: "#4F4F4F",
    10: "#151515",
  },
  white: {
    high: "#ffffff",
  },
  surface: {
    high: "#242424",
    elevated: "rgba(36, 36, 36, 0.92)",
    header: "rgba(21, 21, 21, 0.88)",
  },
}

export const createWeckenTheme = (mode: ColorMode) =>
  createTheme({
  typography: {
    fontFamily: fontFamily, // フォント
    h1: {
      fontSize: 28,
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: 1.3,
    },
    h2: {
      fontSize: 24,
      fontWeight: 300,
      letterSpacing: 0.25,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: 0.15,
      lineHeight: 1.3,
    },
    subtitle1: {
      fontSize: 17,
      fontWeight: 600,
      letterSpacing: 0.15,
      lineHeight: 1.3,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: 0.1,
      lineHeight: 1.3,
    },
  },
  palette: {
    mode,
    // Primaryカラーを設定
    primary: {
      light: "#54C527",
      main: "#0B0B3A",
      dark: "#b26a00",
      contrastText: "#000000",
    },
    // Secondaryカラーを設定
    secondary: {
      light: "#33eb91",
      main: "#00e676",
      dark: "#00a152",
      contrastText: "#ffffff",
    },
    background: {
      default: mode === "light" ? "#F2F2F2" : "#151515",
      paper: mode === "light" ? "#ffffff" : "#242424",
    },
    wecken: mode === "light" ? lightPalette : darkPalette,
  },
  mixins: {
    // ツールバーの高さ
    toolbar: {
      minHeight: 64,
    },
  },
})

const theme = createWeckenTheme("light")

export default theme
