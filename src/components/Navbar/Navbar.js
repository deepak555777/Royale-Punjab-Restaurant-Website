import './Navbar.css'
import {FaTimes,FaBars} from 'react-icons/fa'
import {useRef} from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
const NavRef = useRef();

const handleClick=()=>{
    NavRef.current.classList.toggle("responsive_nav");
}
  return (
    <header>
       <Link to="/"> <h3>Royale Punjab</h3></Link>
        <nav ref={NavRef}>
                    <Link to="/" onClick={handleClick}>Home</Link>
                    <Link to="/menu" onClick={handleClick}>Menu</Link>
                    <Link to="/about" onClick={handleClick}>About</Link>
                    <Link to="/contact" onClick={handleClick}>Contact</Link>
                    <button className="nav-btn nav-close-btn" onClick={handleClick}><FaTimes/></button>
        </nav>
        <button className="nav-btn" onClick={handleClick}><FaBars/></button>
    </header>
  )
}

export default Navbar