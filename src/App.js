import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardDollar } from "./Components/Page/Dashboard/index";
import { DashboardBit } from "./Components/Page/Bitcoin/index.jsx";
import { GlobalStyle } from "./styles/global";
import {DashboardEuro} from './Components/Page/Euro/index'
import { HomePage } from "./Components/Homepage";





function App() {
  return (
    <> 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/dollar" element={<DashboardDollar/>}/>
      <Route path="/bitcoin" element={<DashboardBit/>}/>
      <Route path="/euro" element={<DashboardEuro/>}/>
    </Routes>
  </BrowserRouter>


    <GlobalStyle/>
    </>
  );
}

export default App;
