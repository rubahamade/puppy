import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useLocation, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Puppies from './Puppies'
import Singlepuppy from './Singlepuppy'
// import Puppiesform from './Puppiesform'



function App() {
  const [puppies, setPuppies] = useState([])
  const navigate = useNavigate()

  const location = useLocation()
  const {pathname} = location //const pathname = location.pathname


 


  useEffect(() => {
    const fetchPuppies = async () => {
      const data = await axios.get ('https://fsa-puppy-bowl.herokuapp.com/api/2310/players')
      setPuppies(data.data.data.players)
      console.log(data.data.data.players)    
    }
    fetchPuppies()
  }, [])




  return (
    <div>


      <Routes>   
        <Route path='/puppies' element={<Puppies puppies={puppies} />} />
        <Route path='/puppies/:id' element={<Singlepuppy puppies={puppies}  />} />
      </Routes>
    </div>
  )
}

export default App
