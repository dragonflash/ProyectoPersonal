import React from "react"
import { Link } from "react-router-dom"
import "../assets/styles/components/Header.scss"
import logo from "../assets/static/logo.png"
import userIcon from "../assets/static/user-icon2.png"
 
const Header = () => {
    return (
        <header className="header">
            
            <Link to = "/">
                <img src = { logo } alt="logo" />
            </Link>
            <div className = "header_options">
                <div className = "options">
                    <div className = "header_op_home">
                       <Link to = "/" className="home">TIENDA</Link> 
                    </div>
                    <div className = "header_op_destacados">
                        <Link to = "/destacados" className="destacado">DESTACADOS</Link>
                    </div>
                    <div className = "header_op_news">
                    <Link to = "/noticias" className="news">NOTICIAS</Link>
                    </div>
                </div> 
            </div>

            <div className = "header_menu">
                <div className = "header_menu--profile">
                    <img src= { userIcon } alt="Usuario" />
                    <p>Perfil</p>
                </div>
                <ul>
                        
                </ul>

            </div>

                

        </header>
    )
}

export default Header;