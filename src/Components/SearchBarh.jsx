import { useState } from "react"
import './SearchBar.css'

function SearchBar ({onSubmit}) {
const [term, setTerm] = useState ('')

const handleFormSubmit  = (event) => {
    event.preventDefault()
    console.log('Necesito decirle al componente padre sobre los datos')
    onSubmit(term)
}


const handleChange = (event) => {
    console.log(event.target.value)
    setTerm(event.target.value)


}
const handleClick = () => {
     onSubmit(term)
}

   return (
   <div className= "search-bar">
    <i><h2> Barra de busqueda</h2></i>
    <form onSubmit={handleFormSubmit}>
        <b>Confirma tu busqueda: {term}</b>
        <input onChange={handleChange} value={term}/>
        </form>
        <button onClick={handleClick}>Buscar </button>

        </div>
        )
}


export default SearchBar