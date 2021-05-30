import axios from 'axios'
import React, { useState } from 'react'
import CardSearchSuperhero from '../CardSearchSuperhero/CardSearchSuperhero'


const HeroSearch = () => {
  const [superHeroName, setSuperHeroName] = useState("")

  const [superheros, setSuperheros] = useState([])
  const [errorAPI, setErrorAPI] = useState(false)
  const [errorSearch, setErrorSearch] = useState(false)
    
  function getSuperhero(event, name) {
    event.preventDefault()
    axios.get(`https://www.superheroapi.com/api.php/268297981650026/search/${name}`)
      .then(({data}) => {
        if (data.response === "error") {
          setSuperheros([])
          setErrorSearch(true)
          setErrorAPI(false)

          
        }
        if (data.response === "success") {
          setSuperheros(data.results)
          setErrorSearch(false)
          setErrorAPI(false)
        }
      })
      .catch((err) => {
        setErrorAPI(true)
    })
    
  }

  return (
    <div className="container">

      <form className="form container" action="" onSubmit={(e) => getSuperhero(e, superHeroName)}>
        <h2 className="title title_mod">Buscar superhéroe</h2>
        <input className="input-text" type="text" onChange={(e) => setSuperHeroName(e.target.value)}
          placeholder="ej: Batman" required />
        { errorAPI && <p>No se puede buscar, intente nuevamente más tarde</p>}
        { errorSearch && <p>No se encontro ningún superhéroe con ese nombre</p>}
        <input className="btn" type="submit" value="Buscar" />
      </form>
      {
        (!errorAPI & !errorSearch) ? (
          <div className="cards-container">{superheros.map(superhero => (
         
            <CardSearchSuperhero key={superhero.id} superhero={superhero} />
          ))
          }
          </div>
        ) : <p></p>
      }
      
      </div>
  )
}

export default HeroSearch
