import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";

axios.defaults.baseURL = "https://66d71576006bfbe2e64fc1c2.mockapi.io/tasklist";
createRoot(document.getElementById("root")).render(<App />);
