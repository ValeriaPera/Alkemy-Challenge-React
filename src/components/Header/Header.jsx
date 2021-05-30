import { React, useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import {AiFillHome} from "react-icons/ai"
import { FaSearchPlus } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi"
import { useHistory } from 'react-router-dom'
import UserContext from "../../context/UserContext" 
import TeamContext from "../../context/TeamContext" 




const Header = () => {
  let history = useHistory()
  const [user, setUser] = useContext(UserContext)
  const [, setTeam] = useContext(TeamContext)


  const handleLogout = () => {
    localStorage.removeItem("token")
    setUser(null)
    history.push("./login")
    setTeam([])
    
  }

  return (
    <div className="header-container">
      <p className="credits">Image from Pixabay  </p>
      <div className="titles">
      <Link className="header-title" to="/home">Superhéroes</Link>
      
      <p className="header-subtitle">Creá tu equipo de superhéroes.</p>

      </div>
      <div className="header-nav">
        <Link className="header-nav-item" to="/home">
          <AiFillHome />
          <span className="nav-item_mod">Home</span>
        </Link>
        <Link className="header-nav-item" to="/search">
          <FaSearchPlus />
          <span className="nav-item_mod">Buscar</span>
        </Link>
        {user &&
        <button onClick={ handleLogout } className="header-nav-item nav-item_btn" to="/login">
          <FiLogOut />
          <span className="nav-item_mod"> Logout</span>
        </button>
         }
      </div>

    </div>
  )
}

export default Header
