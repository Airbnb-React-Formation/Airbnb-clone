import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Detail from "./components/Detail/Detail";
import Home from './components/Home/Home';
import Hosting from './components/Hosting/Hosting'
import Results from "./components/Results/Results";
import BecomeHostIntro from "./components/Hosting/BecomeHostIntro";
import Header from "./components/header/Header";
import "./App.css"
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/hosting" element={<Hosting/>}/>
                    <Route path="/becomeHost" element={<BecomeHostIntro/>}/>
                    <Route path="/search" element={<Results/>}/>
                    <Route path="/detail" element={<Detail/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;


