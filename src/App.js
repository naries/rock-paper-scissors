import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router } from "react-router-dom";
import Screen from "./components/Screen";

function App() {
  return (
    <Router>
      <CookiesProvider>
        <div className="App">
          <Screen />
        </div>
      </CookiesProvider>
    </Router>
  );
}

export default App;
