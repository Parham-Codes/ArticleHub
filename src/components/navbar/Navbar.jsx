import './Navbar.css'
import { NavLink } from "react-router-dom"


function Header() {
  return (
    <header className="header sticky-top TopNavDisNoneResponsive">
        <nav className="headerNav">
            <h2 className="lalezar" >پرهام آرتیکل</h2>
            
            <div>
                <NavLink className='navbarLink' to="/">صفحه اصلی</NavLink>
                <NavLink className='navbarLink' to="/add-article">ساخت مقاله</NavLink>
                <NavLink className='navbarLink' to="/about">درباره ما</NavLink>
            </div>
            
        </nav>
    </header>
  )
}

export default Header