import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Animal from "./Animal";
import Counter from "./Counter";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>천하제일 동물 설명회</header>
        <nav>
          <Link to="/">동물 설명 페이지</Link>
          <Link to="/counter">카운터 페이지</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Animal />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
