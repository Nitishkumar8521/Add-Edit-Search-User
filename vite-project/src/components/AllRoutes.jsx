import Home from "../pages/Home";
import Login from "../pages/Login";
import Edit from "../pages/Edit";
import Users from "../pages/Users";

import {Routes, Route } from "react-router-dom"

function AllRoutes(){
    return<>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:id" element={<Edit />}></Route>
    </Routes>
    </>
}

export default AllRoutes;
