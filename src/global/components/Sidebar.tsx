// src/global/components/Sidebar.tsx

import { NavLink } from "react-router-dom";
import "../css/sidebar.css";



export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                JE.hk
            </div>

            <nav className="sidebar-nav">
                <NavLink to="/" className="menu-item">Home</NavLink> 
                
                <NavLink to="/projects" className="menu-item">Projects</NavLink>
                <NavLink to="/mandalart" className="menu-item">Mandalart</NavLink>


                <NavLink to="/about" className="menu-item">About</NavLink>
                <NavLink to="/contact" className="menu-item">Contact</NavLink>
            </nav>

            <div className="sidebar-footer">
                @ 2025 Ji Eun Kim<br />
                All rights reserved.
            </div>
        </aside>
    );
}