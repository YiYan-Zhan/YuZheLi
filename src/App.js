import "./style/index.scss";
import "./style/normalize.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import About from "./page/about";
import Profolio from "./page/profolio";
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
                <Routes>
                    <Route path="/about" element={<About />}></Route>
                </Routes>
                <Routes>
                    <Route path="/profolio" element={<Profolio />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
