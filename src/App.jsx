import { useState } from 'react'
import SearchBar from './Components/SearchBarh'
import ImageList from './Components/ImagenList'
import searchImage from './api'
import './App.css'




function App() {
  const [images,setImages] = useState([])

  const handleSubmit = async(term) => {
    console.log('Usted esta buscando: ', term)
    const result = await searchImage(term)
  
    console.log('coco')
    console.log(result)
  
    setImages(result)

  }


  return (
    <div>
      <i><h2>Pictures2</h2></i>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images}/>
    </div>
  )
}


export default App