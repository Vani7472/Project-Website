import React from 'react'
import { Link } from "react-router-dom";
import BackgroundImage from '../assets/background.jpg';
import '../styles/Home.css'

export default function Home() {
    return (
        <div className='home' style={{backgroundImage: `url(${BackgroundImage})` }}>
            <div className='headerContainer'>
                <h1>Outstanding Services and parts at the lowest price</h1>
                <p>Trust the professionals, we will take a good care of your vehicle</p>
                <Link to="/parts-accessories">
                    <button>BUY PARTS</button>
                </Link>
            </div>
        </div>
    )
}

