import {Link} from "react-router-dom"

const Puppies  =({puppies}) => {
    return (
      
      <div>

        
        <h1>Puppies</h1>
        <ul>
          {
            puppies.map((puppy)=> {
              return (
                <li key={puppy.id}>
                    <Link to={`/puppies/${puppy.id}`}>
                    {puppy.name}
                    
                    </Link>

                    
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }


  export default Puppies