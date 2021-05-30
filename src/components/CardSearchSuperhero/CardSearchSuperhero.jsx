import React, { useContext} from 'react'
import TeamContext from '../../context/TeamContext'
import './CardSearchSuperhero.css'
import { useHistory } from "react-router-dom"
import { BsFillPersonPlusFill } from 'react-icons/bs'


const CardSearchSuperhero = ({ superhero }) => {
  const [team, setTeam] = useContext(TeamContext)
  const history = useHistory()

  const isDisabled = (id) => {
    return team.find(item => item.id === id)
  }

  function addSuperheroToTeam() {
    const teamSize = team.length;
    const amountBadSuperheros = team.filter(superhero => superhero.biography.alignment ==="bad").length
    const amountGoodSuperheros = team.filter(superhero => superhero.biography.alignment === "good").length

    if (teamSize < 6 & team.filter(item=> item.id === superhero.id).length === 0) {
      if (amountBadSuperheros < 3 & superhero.biography.alignment === "bad" || amountGoodSuperheros < 3 & superhero.biography.alignment === "good") {
        setTeam([...team, superhero])

        
  
      } else {
        if (amountBadSuperheros === 3) {
          window.alert("Llegaste al máximo de 3 superhéroes malos")
        } else {
          window.alert("Llegaste al máximo de 3 superhéroes buenos")
          
        }

      }
      
    } else {
      if (team.length === 6) {
        window.alert("Llegaste al máximo de 6 superhéroes en tu equipo")
          
      } else {
        window.alert("Este superhéroe ya forma parte de tu equipo")
        
        }
    }
  }
  
    const handleClick = (id) => {
    history.push(`/details/${id}`)
  }

  const addFallbackImg = (event) => {
    event.target.src = process.env.PUBLIC_URL + "/bubble-img.jpg"
  }


  return (
    <div className="superhero-card">
      {!isDisabled(superhero.id) &&
        <button className="btn btn_mod" onClick={addSuperheroToTeam}  >
          <BsFillPersonPlusFill  />
        </button>
      
      }

      
      <img className="card-image" src={superhero.image.url} alt={superhero.name} onError={ addFallbackImg} />

      <h3 className="card-title">
        {superhero.name}
      </h3>
      <button className="btn" onClick={() =>handleClick(superhero.id)}> Ver más</button>
    </div>
  )
}

export default CardSearchSuperhero
