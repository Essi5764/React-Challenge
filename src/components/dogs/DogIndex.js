import React, {useState} from 'react'





function DogIndex (){

    const [url,setUrl] = useState('')

    function fetch_data () {
        
        fetch('https://dog.ceo/api/breeds/image/random').then(res =>{
            if(res.ok){
                return res.json();
            }
            throw new Error('Request Failed')
        },networkError=> console.log(networkError.message)
        ).then(jsonRes=>{
            setUrl(jsonRes.message)
        })
    }
    
    
        return(
            <div className="dog_main">
                <button onClick={fetch_data}>Generate Image!</button>
                <h3>Smash the button to see dog pics.</h3>
                <img src={url} alt=""/>
                
            </div>
            
        )
    
    
}

export default  DogIndex;