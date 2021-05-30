import React, { useContext } from 'react'
import TeamContext from "../../context/TeamContext"
import { useHistory } from "react-router-dom"
import './CardTeamSuperhero.css'
import { superheroAlignment } from '../../helpers'
// import { FaRegTrashAlt, FaPlus } from 'react-icons/fa'


const CardTeamSuperhero = ({ superhero }) => {
  const [team, setTeam] = useContext(TeamContext)
  const history = useHistory()

  const deleteSuperhero = (id) => {
    const confirmacion = window.confirm("Estas seguro que quieres eliminar este superhéroe?")
    if (confirmacion) {
      setTeam( team.filter((superhero) => superhero.id !== id)) 
      
    }
  }
  const handleClick = (id) => {
    history.push(`/details/${id}`)
  }

    const addFallbackImg = (event) => {
    event.target.src = process.env.PUBLIC_URL + "/bubble-img.jpg"
  }



  return (

    <div className="team-card">
      <div>
        <img className="superhero-img" src={superhero.image.url} alt={superhero.name} onError={addFallbackImg} />
      </div>
      <h3>{superhero.name}</h3>
      <p>{ superheroAlignment(superhero)}</p>
      <div className="stats">
        <div className="container mod_container">
          <span><strong>Combate</strong>: {Number(superhero.powerstats.combat) || 0} </span>
          <span><strong>Durabilidad</strong>: {Number(superhero.powerstats.durability) || 0} </span>
          <span><strong>Inteligencia</strong>: {Number(superhero.powerstats.intelligence) || 0} </span>
        </div>
        <div className="container mod_container">
          <span><strong>Poder</strong>: {Number(superhero.powerstats.power) || 0} </span>
          <span><strong>Rapidez</strong>: {Number(superhero.powerstats.speed) || 0} </span>
          <span><strong>Fuerza</strong>: {Number(superhero.powerstats.strength) || 0} </span>
        </div>
      </div>

        <div className="action-options">
        <button className="btn" onClick={() => deleteSuperhero(superhero.id)}>
          Borrar
        </button>
        <button className="btn" onClick={() => handleClick(superhero.id)}>
          Ver más
        </button>
        </div>

    </div>
    // <tr>
    //   <td>
    //     <img className="superhero-img" src={superhero.image.url} alt={superhero.name} onError={addFallbackImg} />
    //     <h3>{superhero.name}</h3>
    //   </td>
    //   <td>
    //     { superheroAlignment(superhero)}
    //   </td>
    //   <td>
    //     {Number(superhero.powerstats.combat) || 0} 
    //   </td>
    //   <td>
    //     {Number(superhero.powerstats.durability) || 0}
    //   </td>
    //   <td>
    //     {Number(superhero.powerstats.intelligence) || 0}
    //   </td>
    //   <td>
    //     {Number(superhero.powerstats.power) || 0}
    //   </td>
    //   <td>
    //     {Number(superhero.powerstats.speed) || 0}
    //   </td>
    //   <td>
    //     {Number(superhero.powerstats.strength) || 0}
    //   </td>
    //   <td className="action-options">

    //     <button className="btn_icon" onClick={() => deleteSuperhero(superhero.id)}>
    //       <FaRegTrashAlt
    //         className="action-icon red"
    //       title="Borrar"/>
    //     </button>

    //     <button className="btn_icon" onClick={() => handleClick(superhero.id)}>
    //       <FaPlus
    //         className="action-icon blue"
    //       title= "Ver más"/>
    //     </button>
    //   </td>
    // </tr>


  )
}

export default CardTeamSuperhero
