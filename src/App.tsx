import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { LoginForm } from "./components/auth/login";
import toast, { Toaster } from "react-hot-toast";
import Play from "./play/Play";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Play />
    </>
  );
}

export default App;
