import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Detail from "./components/Detail/Detail";
import Home from './components/Home/Home';
import Hosting from './components/Hosting/Hosting'
import Results from "./components/Results/Results";
import BecomeHostIntro from "./components/Hosting/BecomeHostIntro";
import Header from "./components/header/Header";
import "./App.css"
import Footer from "./components/Footer/Footer";
import {ThemeProvider} from "@mui/material";
import MuiTheme from "./theme/MuiTheme";
import {AuthProvider} from "./components/context/AuthContext";
import {StyleProvider} from "./components/context/StyleContext";


function App() {
    return (
        <div className="app">
            <ThemeProvider theme={MuiTheme}>
                <AuthProvider>
                    <StyleProvider>
                        <BrowserRouter>
                            <Header/>
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/hosting" element={<Hosting/>}/>
                                <Route path="/becomeHost" element={<BecomeHostIntro/>}/>
                                <Route path="/search" element={<Results/>}/>
                                <Route path="/search/:roomId" element={<Results/>}/>
                                <Route path="/detail" element={<Detail/>}/>
                                <Route path="*" element={<Navigate to="/"/>}/>
                            </Routes>
                            <Footer/>
                        </BrowserRouter>
                    </StyleProvider>
                </AuthProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;


