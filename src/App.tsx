import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import { ThemeSwitcher } from "./ThemeSwitcher";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light"); // Stores current theme

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }; //  Function for changing theme, activates by pressing the Switch Theme button

  return (
    <div
      style={{
        background: theme === "light" ? "#ffffff" : "#242424",
        color: theme === "light" ? "#000000" : "#ffffff",
        transition: "background-color 0.5s, color 0.5s",
        height: "100vh",
        width: "175vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }} // Necessary adjustments depending on state of theme
    >
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ThemeSwitcher
        theme={theme}
        changeTheme={changeTheme}
        render={({ changeTheme }) => (
          <button
            onClick={changeTheme}
            style={{
              backgroundColor: theme === "light" ? "#f9f9f9" : "#1a1a1a",
              color: theme === "light" ? "#213547" : "#fff",
            }}
          >
            Switch Theme
          </button>
        )}
      />
      {/* Passing props to ThemeSwitcher component, passing function by render props, when button is toggled */}
    </div>
  );
}

export default App;
