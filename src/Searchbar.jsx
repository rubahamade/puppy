import { useState } from "react"

const Searchbar = ({puppies}) => {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredTerms = puppies.filter((puppy) => {
        return puppy.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    })
    
    return(
        <div>
            <label>
                <input 
                    type="text"
                    value={searchTerm}
                    onChange={(event) => {setSearchTerm(event.target.value)}}
                />
            </label>
            {
                searchTerm.length > 0 ?
                <div> 
                    <h3>Viewing {filteredTerms.length} of {puppies.length}</h3>
                    <ul>
                        {
                            filteredTerms.map((puppy) => {
                                return <li key={puppy.id}>{puppy.name}</li>
                            })
                        }
                    </ul>
                </div> 
                
                : null
            }
        </div>
    )
}

export default Searchbar