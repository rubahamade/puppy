import { useState } from "react"

const Puppiesform = ({create}) => {
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [status, setStatus] = useState('')
    const [teamid, setTeamid] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name)
        const newpuppy = {
            name,breed,status,teamid
        }
        
        create(newpuppy)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input 
                        type="text"
                        value={name}
                        onChange={(event) => {setName(event.target.value)}}
                    />
                </label>

                <label>
                    Breed:
                    <input 
                        type="text"
                        value={breed}
                        onChange={(event) => {setBreed(event.target.value)}}
                    />
                </label>

                <label>
                    Status:
                    <input 
                        type="text"
                        value={status}
                        onChange={(event) => {setStatus(event.target.value)}}
                    />
                </label>

                <label>
                    Team ID:
                    <input 
                        type="text"
                        value={teamid}
                        onChange={(event) => {setTeamid(event.target.value)}}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default Puppiesform