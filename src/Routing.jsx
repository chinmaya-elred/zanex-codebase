import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Widgets from  './Pages/Widgets/Widgets'

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/widgets" element={<Widgets />} />
            </Routes>
        </Router >
    )
}

export default Routing;