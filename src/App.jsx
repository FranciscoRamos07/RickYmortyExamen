import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [Characters,setCharacters]= useState([])
 
  const getApi= async() => {
    try{
      const res = await fetch('https://rickandmortyapi.com/api/character');
      const data = await res.json();

      console.log(data.results)
      setCharacters(data.results)
    }catch(error){
      console.log(error)

    }
  }

  useEffect(()=> {
    getApi();
  },[])

  return (
<div className="App">
  {
    Characters.map((character)=>
     <div  className="all" key={character.id}> 
      <img src={character.image} alt=''/>
      <div className='text'> 
      <h3>{character.name}</h3>
      <p>{character.species}</p>
      <p>{character.type}</p>
      </div>

      </div>
      


    )
  }
</div>
  )
}

export default App
