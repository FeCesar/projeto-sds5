import Dashboard from "pages/Dashboard"
import Home from "pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const RoutesConfig = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home></Home>}></Route>

                <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
            </Routes>

        </BrowserRouter>
    )
}

export default RoutesConfig