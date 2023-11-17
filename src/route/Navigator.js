import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Login from '../page/Login';
import Signup from "../page/Signup";

const Navigator = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigator;