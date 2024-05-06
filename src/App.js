import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatBot from "./components/chatBot/chatBot";

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ChatBot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
