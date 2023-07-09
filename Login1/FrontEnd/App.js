import React, {useState} from 'react'
import axios from 'axios'

export default function App() {

  const [userName , setUserName] = useState("loading");
  const [userPass , setUserPass] = useState("loading");


  function setName(e){
    setUserName(e.target.value)
  }

  function setPass(e){
    setUserPass(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    axios.post('http://localhost:3500/form', {name:userName, pass:userPass})
     .then((res) => {
      console.log("connected"); //res.data
     })
     .catch((error) => {
      console.log(error)
    })
  }
  
  

  return (
    <div>
        <h1>Please enter your name and password to login</h1>

        <form onSubmit={handleSubmit}>
            <label for="username"><b>Username</b></label>
            <input onChange={setName} placeholder="Username" type='text' name='username' ></input>

            <br></br>
            <br></br>

            <label for="password"><b>Password</b></label>
            <input onChange={setPass} placeholder="password" type='text' name='password' ></input>

            <br></br>
            <br></br>

            <button type='submit' name='submit_button'>Login</button>
        </form>


        <h2>New user Added , see details below</h2>
        <h3>Username : {userName}</h3>
        <h3>Password : {userPass}</h3>

    </div>
  )
}
