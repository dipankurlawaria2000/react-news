import {React, useState} from 'react'
import './Navbar.css'
import { FaFacebookSquare,  FaInstagramSquare} from "react-icons/fa"
import { GiHamburgerMenu} from "react-icons/gi"
import NewsList from './NewsList'
import NewsItem from './NewsItem'
import About from './About'
import Tech from "./Tech"

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] =  useState(false);

    const[active, setActive] = useState("WSJ");
    return (
        <>
        <nav className="main-nav">
            <div className="logo">
                <h2>
                    <span>N</span>ews 
                    <span> A</span>pplication
                </h2>
            </div>

            <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link "}>
                <ul>
                    <li>
                        <a onClick={() =>setActive("WSJ")}>General</a>
                    </li>
                    <li>
                        <a onClick={() =>setActive("Tech")}>Technology</a>
                    </li>
                    <li>
                        <a onClick={() =>setActive("About")}>About</a>
                    </li>
                </ul>
            </div>
            <div className="social-media">
                <ul className="social-media-desktop">
                    <li>
                        <a href="" target="_fb"><FaFacebookSquare className="facebook"/></a>
                    </li>
                </ul>
                <ul className="social-media-desktop">
                    <li>
                        <a href="" target="_ig"><FaInstagramSquare className="instagram"/></a>
                    </li>
                </ul>
                {/* Hamburger Menu */}
                <div className="hamburger-menu">
                    <a href="#" onClick={()=>
                        setShowMediaIcons(!showMediaIcons)}>
                        <GiHamburgerMenu/>
                    </a>
                    </div>
            </div>
        </nav>

        {active === "WSJ" && <NewsList/>}
        {active === "Tech" && <Tech/>}
        {active === "About" && <About/>}
        <section className="hero-section">
            <p>Welcome to</p>
            <h1>News Application Homepage</h1>
        </section>
        </>
    )
}

export default Navbar
