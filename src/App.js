import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home/Home';
import Hosting from './components/Hosting/Hosting'
import Results from "./components/Results/Results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/hosting" element={<Hosting/>}/>
          <Route path="/search" element={<Results/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;


