import React, {useState} from 'react';
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
    return (
        <div className='navbar'>
            <div className='leftSide' id= {openLinks ? "open" : "close"}>
                <Link to="/"><img src={Logo} alt="Logo" /> </Link>
                <div className='hiddenLinks'>
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/parts-accessories">Parts & Accessories</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/contact-us">Contact Us</Link>
                </div>
            </div>
            <div className='rightSide'>
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/parts-accessories">Parts & Accessories</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/contact-us">Contact Us</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar
