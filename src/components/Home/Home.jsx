import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CardTeamSuperhero from '../CardTeamSuperhero/CardTeamSuperhero'
import TeamContext from '../../context/TeamContext'





const Home = () => {
  const [team] = useContext(TeamContext)

  const getTotalTeamPowerstats = (team) => {
    const getNumberPowerstat = (value) => {
      const number = Number(value)
      if (Number.isNaN(number)) {
        return 0
      }
      return number
    }
      
    const getPowerstats = (accum, superPowerstats) => {
      const findPowerstat = (powerstat) => accum.find(item => Object.keys(item).includes(powerstat))
      for (const powerstat in superPowerstats) {
        if (superPowerstats[powerstat]) {
          if (findPowerstat(powerstat)) { 
            findPowerstat(powerstat)[powerstat] = getNumberPowerstat(findPowerstat(powerstat)[powerstat]) + getNumberPowerstat(superPowerstats[powerstat])
          } else {
            accum.push({ [powerstat]: Number(superPowerstats[powerstat]) || 0 })
          }
        }
      }
      return accum
    }

    return (
      team.reduce((accum,superhero) => {
        return getPowerstats(accum, superhero.powerstats)
      }, []))

  }
  
  const sortedPowerstats = (team) => {
    const compare = (a, b) => {
      if (a[getObjectKey(a)] > b[getObjectKey(b)]) return -1;
      if (b[getObjectKey(b)] > a[getObjectKey(a)]) return 1;

      return 0;
    }
    return getTotalTeamPowerstats(team).sort(compare)
  }

  function getObjectKey(object) {
    for (const key in object) {
      return key
    }
  }

  const getAverageProp = (team, prop) => {
    const getNumber = (string) => {
      const stringToArray = string.split(" ")
    return Number(stringToArray[0])
    }

    const total = team.reduce((accum, superhero) => {
  
      return accum +  getNumber(superhero.appearance[prop][1])
    }, 0)

  return  Math.floor(total/team.length)
  }
  const traduccionEstadisticas = {
    combat: "combate",
    intelligence: "inteligencia",
    power: "poder",
    durability: "Durabilidad",
    speed: "rapidez",
    strength: "fuerza",
  }
  
  return (
    <div className="container">
      <h2 className="title">Mi equipo</h2>

      { team.length === 0 && <p> Aún no hay ningún miembro en tu equipo</p>}

      {team.length < 6 ? (
        <Link className="btn btn-add" to="/search">
          Agregar Superheroe
        </Link>
        ) : <p>Alcanzaste el número máximo de superhéroes en tu equipo</p>}
        
        {(team.length > 0) && (
          <div className="container-team-info">
            <div className="container-stats">
            <h3 className="title-stats">Información del equipo:</h3>
            <div className="stats-data">
                <p> <span className="bold">Altura promedio: </span>{ getAverageProp(team, "height")} cm.</p>
                <p> <span className="bold">Peso promedio: </span>{ getAverageProp(team, "weight")} kg.</p>
                <ul className="powerstats-list">
                  {sortedPowerstats(team).map(powerstat => {
                    return (
                      <li key={getObjectKey(powerstat)}>
                        <span className="bold">
                          {traduccionEstadisticas[getObjectKey(powerstat)]}: {` `}
                        </span>
                         {powerstat[getObjectKey(powerstat)]}
                      </li>
                    )
                  })}
                </ul>

            </div>



            </div>
            <div className="cards-container">
              {team.map(superhero => <CardTeamSuperhero key={ superhero.id} superhero={superhero} /> )}
            </div>
          </div>
              
        )
          }



        


    </div>
  )
}

export default Home
