import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import UserContext from "../../context/UserContext" 


const Login = () => {
  const [password, setPassword] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [err,setErr] = useState(null)
  const [, setResp] = useState(null)
  const [user ,setUser] = useContext(UserContext)
  let history = useHistory()


  // const [user, setUser] = useContext(UserContext)


  const validateCredentials = (event) => {
    event.preventDefault()
    axios.post("http://challenge-react.alkemy.org/", {
      email: userEmail,
      password,
    })
    .then(response => {
      setResp(response.data)
      const token = localStorage.setItem("token", response.data.token)
      setUser({email:userEmail, token:token})
      setErr("")
      // RECORDAR AUTENTICAR USUARIO
      history.push("/home")
    })
    .catch(error => {
      // setErr(error.response.data.error)
      setErr("Ingresá un mail o contraseña válida ")
      setResp("")
    })
    setPassword("")
    setUserEmail("")
  }



  return (
    <div className="container">
      {user ? (
        <p>Logueado con éxito.</p>
      ) : (
        <form className="form" action="" onSubmit={validateCredentials}>
          <h2 className="title title_mod">Ingresar</h2>
          <input className="input-text" onChange={(e) => setUserEmail((e.target.value).toLowerCase().trim())} value={userEmail} type="email" name="email" placeholder="Email" required />
          <input className="input-text" onChange={(e) => setPassword((e.target.value).trim())} value={password} type="password" name="password" placeholder="Contraseña" required />
          {err ? <p>{err} </p> : null}
          <input className="btn" type="submit" value="Enviar" />
        </form>
      )}
    </div>
  )
}

export default Login
