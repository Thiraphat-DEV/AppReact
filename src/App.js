import { useMemo } from "react";
import Navbar from "./components/Navbar/Navbar";
import MyTimeline from "./components/Timeline/MyTimeline";
// import ImageProject from "./components/ImageProject/ImageProject";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import Footer from './components/Footer/Footer'

function App() {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const ToggleTheme = {
    toggle: () =>
      createTheme({
        palette: {
          mode: prefersDark ? "dark" : "light",
        },
      }),
  };

  let theme = useMemo(ToggleTheme.toggle, [prefersDark]);
  theme = responsiveFontSizes(theme)
  return (
    // <div className="App">
    
    <ThemeProvider theme={theme}>
      <Navbar />
      <MyTimeline />
      {/* <ImageProject /> */}
      <Footer />
    </ThemeProvider>
    

  );
}

export default App;
