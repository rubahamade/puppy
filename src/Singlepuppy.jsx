import { useParams, Link } from "react-router-dom"

const Singlepuppy = ({puppies, deletepuppy}) => {
    const params = useParams()
    const id = params.id*1

    const puppy =puppies.find((puppy) => {
        return puppy.id === id
    })

    if(!puppy){
        return null
    }



    return (
        <div>
            <h1>{puppy.name}</h1>
            <p>Breed: {puppy.breed}</p>
            <p>Status: {puppy.status}</p>
            <p>Team ID: {puppy.id}</p>
            <img src={puppy.imageUrl}/>
            <div className="link">
            <Link to='/'>
                Back to all puppies
            </Link>

            <button onClick={() => {deletepuppy(puppy)}}>X</button>
            </div>
            
            
        </div>
    )
}

export default Singlepuppy