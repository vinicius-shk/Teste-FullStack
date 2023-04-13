import AppProvider from "./Context/AppProvider";
import GlobalStyles from "./GlobalStyles";
import Main from "./Pages/main";

function App() {
  return (
    <>
    <AppProvider>
      <GlobalStyles />
      <Main />
    </AppProvider>
    </>
  );
}

export default App;
