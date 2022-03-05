import { useEffect, useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DashboardWrapper from "./components/dashboard/DashboardWrapper";
import Customer from "./screen/Customer";
import Home from "./screen/Home";
import './style/app.css'



const DarkTheme = createContext()

function App() {
  const darkTheme = useState(true);
  useEffect(() => {
    document.body.style.backgroundColor = darkTheme[0] ? "rgb(0, 30, 60)" : "#edf3f7"
  }, [darkTheme[0]])



  return (
    <Router>
      <DarkTheme.Provider value={darkTheme}>
        <div className={darkTheme[0] ? "my-dark-theme" : "my-light-theme"}>
          <DashboardWrapper>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/customers" element={<Customer />}></Route>
            </Routes >
          </DashboardWrapper>
        </div>
      </DarkTheme.Provider>
    </Router>
  );
}

export default App;
export { DarkTheme }
