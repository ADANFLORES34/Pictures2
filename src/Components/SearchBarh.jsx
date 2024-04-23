import {usestate } from "react"
import './SerachBar.css'

function SearchBar ({onSubmit}) {
const [term, setTerm] = useState ('')

const handleFormSubmit  = (event) => {
    event.preventDefault()
    console.log('Necesito decirle al componente padre sobre los datos')
    onSubmit(Term)
}


const handleChange = (event) => {
    console.log(event.target.value)
    setTerm(event.target.value)


}
const handleClick = () => {
     onSubmit(Term)
}

   return (
   <div className= "search-bar">
    <h1> Search Bar</h1>
    <form onSubmit={handleFormSubmit}>
        confirma tu busqueda: {term}
        <input onChange={handleChange} value={term}/>
        </form>
        <button onClick={handleClick}>Click Me! </button>

        </div>
        )
}


export default SearchBar