import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Novo from './pages/Novo';
import Header from './components/header';
function RoutesApp() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/novo" element={<Novo/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;