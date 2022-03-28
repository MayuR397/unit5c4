import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  
  const [users, setusers]= useState([])  

  // useEffect(() =>{
  //   axios.get("http://localhost:8080/users").then(({data}) =>{
  //     setusers(data);
  //     console.log(users);
  //   })
  // })

  return (
    <div className="App">
      <Navbar/>
      
    </div>
  )
}

export default App
