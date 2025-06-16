import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#011532";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  // const changeTheme = (theme) => {
  //   if (theme === "green") {
  //     setMode("green");
  //     document.body.style.backgroundColor = "#006400";
  //     showAlert("Green mode has been enabled", "success");
  //   } else if (theme === "grey") {
  //     setMode("grey");
  //     document.body.style.backgroundColor = "#D3D3D3";
  //     showAlert("Grey mode has been enabled", "success");
  //   } else if (theme === "red") {
  //     setMode("red");
  //     document.body.style.backgroundColor = "#FF0000";
  //     showAlert("Red mode has been enabled", "success");
  //   } else {
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // };

  return (
    <>
      <Router basename="/TextUtils-React">
        <Navbar
          title="Karan"
          about="About Karan"
          mode={mode}
          toggleMode={toggleMode}
          // changeTheme={changeTheme}
        />
        {/* <Navbar /> */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/about"
              element={
                <About
                  styleMode={{
                    backgroundColor: mode === "dark" ? "#011532" : "white",
                    color: mode === "dark" ? "white" : "black",
                  }}
                />
              }
            />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - Word Counter, Character Counter"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
