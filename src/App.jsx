import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useLocation, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Puppies from './Puppies'
import Singlepuppy from './Singlepuppy'
import Puppiesform from './Puppiesform'
import Searchbar from './Searchbar'



function App() {
  const [puppies, setPuppies] = useState([])
  const navigate = useNavigate()

  const fetchPuppies = async () => {
      const response = await axios.get ('https://fsa-puppy-bowl.herokuapp.com/api/2310/players')
      const data = response.data.data.players
      console.log(data)
      
      setPuppies(data)
    }

  useEffect(() => {
    fetchPuppies()
  }, [])

  const create = async (newpuppy) => {
    await axios.post('https://fsa-puppy-bowl.herokuapp.com/api/2310/players', newpuppy)
    fetchPuppies()
  }

  const deletepuppy = async (puppy) => {
    await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/2310/players/${puppy.id}`)
    setPuppies(puppies.filter((_puppy) => {return _puppy.id !== puppy.id}))
    navigate('/')
  }

  return (
    <div>
      

      <Routes>

        <Route path='/' element={<Puppies puppies={puppies}/>} />
        
        <Route path='/puppies/:id' element={<Singlepuppy puppies={puppies} deletepuppy={deletepuppy}/>} />

      </Routes>
    <h3>Create Player:</h3>
    <Puppiesform create={create} />
    
    <h3>Search:</h3>
    <Searchbar puppies={puppies} />


    </div>
  )
}

export default App


      