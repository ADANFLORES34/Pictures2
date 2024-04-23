function ImageShow ({ image }){
return ( 
    <div> 
           <img src={image.urls.smalll}
            alt={image.alt_description}/>
    </div>

)
}

export default ImageShow