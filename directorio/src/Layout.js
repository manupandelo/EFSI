import { Outlet } from "react-router-dom"
import MyNavbar from "./components/navbar"

export default function Layout() {
    return (
        <div>
            <MyNavbar />
            <Outlet />
        </div>
    );
}