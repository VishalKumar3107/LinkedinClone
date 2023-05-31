import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header.js';
import Page from './Components/LoginSignupPage/Page';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Page />} />
          <Route exact path="/header" element={<Header />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

