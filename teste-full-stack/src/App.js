import AppProvider from "./Context/AppProvider";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/header/header";

function App() {
  return (
    <>
    <AppProvider>
      <GlobalStyles />
      <Header />
    </AppProvider>
    </>
  );
}

export default App;
