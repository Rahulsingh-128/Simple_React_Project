import logo from "./logo.svg";
import "./App.css";
import Header from "./header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact={true} element={<Header />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
