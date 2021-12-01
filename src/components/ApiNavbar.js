import {React, useState} from 'react'

import { FaFacebookSquare,  FaInstagramSquare} from "react-icons/fa"
import { GiHamburgerMenu} from "react-icons/gi"
import NewsList from './NewsList'

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] =  useState(false);

    const[active, setActive] = useState("Api");


    return (
        <>
        <nav className="main-nav">

            <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link "}>
                <ul>
                    <li>
                        <a onClick={() =>setActive("Apple")}>All articles mentioning Apple from yesterday, sorted by popular publishers first</a>
                    </li>
                    <li>
                        <a onClick={() =>setActive("Tesla")}>All articles about Tesla from the last month, sorted by recent first</a>
                    </li>
                    <li>
                        <a onClick={() =>setActive("Business")}>Top business headlines in the US right now</a>
                    </li>
                    <li>
                        <a onClick={() =>setActive("Technology")}>Top headlines from TechCrunch right now</a>
                    </li>
                    <li>
                        <a onClick={() =>setActive("Wall-Street-Journal")}>All articles published by the Wall Street Journal in the last 6 months, sorted by recent first</a>
                    </li>
                </ul>
            </div>
            

        </nav>

        {active === "Apple" && <NewsList name="Apple"/>}
        {active === "Tesla" && <NewsList name="Tesla"/>}
        {active === "Business" && <NewsList name="Business"/>}
        {active === "Technology" && <NewsList name="Technology"/>}
        {active === "Wall-Street-Journal" && <NewsList name="Wall-Street-Journal"/>}
        <section className="hero-section">
            <p>Welcome to</p>
            <h1>News Application Homepage</h1>
        </section>
        </>
    )
}

export default Navbar
