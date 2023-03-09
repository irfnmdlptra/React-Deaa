import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NotFound from './Components/NotFound';
import About from './Pages/About';
import Home from './Pages/Home';

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
    )
}

export default Routing