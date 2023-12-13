import { useState } from "react"

const Puppiesform = ({create}) => {
    const [name, setName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name)
        const newpuppy = {
            name
        }
        create(newpuppy)
        setName('')
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
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default Puppiesform