import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { SlyledThemeProvider } from "./components/ThemeProvider/ThemeProvider";
import { Styles } from "./components/GlobalStyles/Styles"

function App () {
  return (
    <SlyledThemeProvider>
      <Styles  />
      <RouterProvider router={router} />
    </SlyledThemeProvider>
  )
};

export default App;

