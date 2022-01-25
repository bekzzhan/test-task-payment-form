import {BrowserRouter, Routes, Route} from "react-router-dom";
import PaymentPage from "./components/PaymentPage/PaymentPage";
import ResultPage from "./components/ResultPage/ResultPage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaymentPage />}/>
        <Route path='/result' element={<ResultPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
