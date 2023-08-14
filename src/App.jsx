import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { pink, lightGreen } from "@mui/material/colors";
import { Provider } from "react-redux";
import store from "./app/store";
import { ToastContainer } from "react-toastify";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: pink["800"],
      },
      secondary: {
        main: lightGreen["700"],
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
