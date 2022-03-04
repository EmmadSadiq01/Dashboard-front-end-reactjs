import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DashboardWrapper from "./components/dashboard/DashboardWrapper";
import Customer from "./screen/Customer";
import Home from "./screen/Home";
import './style/app.css'
function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  useEffect(() => {
    document.body.style.backgroundColor = darkTheme ? "rgb(0, 30, 60)" : "#edf3f7"
  }, [darkTheme])

  const handleTheme= () =>{
    setDarkTheme(!darkTheme)
  }
  
  return (
    <Router>
      <div className={darkTheme ? "my-dark-theme": "my-light-theme"}>
        <DashboardWrapper handleTheme={handleTheme}>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/customers" element={<Customer />}></Route>
          </Routes >
        </DashboardWrapper>
      </div>
    </Router>
  );
}

export default App;
