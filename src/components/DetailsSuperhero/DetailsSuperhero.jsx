import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import { superheroAlignment } from '../../helpers'




const DetailsSuperhero = () => {
  const [superhero, setSuperhero] = useState(null)
  const [, setError] = useState(false)
  // const [team] = useContext(TeamContext)
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    axios.get(`https://superheroapi.com/api.php/268297981650026/${id}`)
      .then(({ data }) => {
        if (data.response !== "error") {
          setSuperhero(data)
          setError(false)
  
          
        } else {
          setError(true)
          
        }
        // setError(false)
      })
      .catch((err) => {
        setError(true)
    })
    

  }, [id])

  


  const goHome = () => {
    history.push("/home")
  }
     const addFallbackImg = (event) => {
    event.target.src = process.env.PUBLIC_URL + "/bubble-img.jpg"
  }


  // const getSuperHeroByID = (team, id) => {

  //   return team.find(item => item.id === id)
  // }
  // const superhero = getSuperHeroByID(team, id)

  return (superhero ? (
      
      <div className="container">
        <div className="container_row details-container_mod">
          <img className="details-image" src={superhero.image.url} alt={superhero.name} onError={addFallbackImg} />
          <div className="container details-container">
            <h2 className="title">{superhero.name}</h2>
            <ul className="details-powerstats">
              <li> <span className="bold"> Nombre completo: </span>  { superhero.biography["full-name"]}.</li>
              <li> <span className="bold"> Peso: </span> { superhero.appearance.weight[1]}.</li>
              <li> <span className="bold"> Altura: </span> {superhero.appearance.height[1]}.</li>
              <li> <span className="bold"> Alias: </span>{superhero.biography.aliases.map(alias => <span key={ alias }>{alias} </span>)}.</li>
              <li> <span className="bold"> Color  de ojos: </span> { superhero.appearance["eye-color"]}.</li>
              <li> <span className="bold"> Cabello: </span> {superhero.appearance["hair-color"]}.</li>
              <li> <span className="bold"> Lugar de trabajo: </span> { superhero.work.base}.</li> 
              <li> <span className="bold"> Alineación: </span> { superheroAlignment(superhero) }.</li> 
            </ul>


          </div>
        </div>
        
      </div>
     
     ) : (
      <div className="container">
         <p> Volve a intentarlo</p>
        <button className="btn" onClick={ goHome }>Home</button>


      </div>
    )
  )
}

export default DetailsSuperhero
