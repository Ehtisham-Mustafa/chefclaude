import React from 'react'

export default function StartWar (){
    const [starWarsData,setStarWarsData]=React.useState({})
    const [count,setCount]=React.useState(1)
    console.log('rendered')
    React.useEffect(()=>{
    fetch(`https://swapi.dev/api/people/${count}`).then(res=>res.json())
    .then(data=>setStarWarsData(data))

    },[count])
    return(
        <div>
                <h2>The count is {count}</h2>
                <button onClick={()=>setCount(prev=>prev+1)}>Next Meme</button>
            <pre>{JSON.stringify(starWarsData,null,2)}</pre>
        </div>
    )
}