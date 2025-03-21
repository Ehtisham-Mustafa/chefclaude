import React from 'react'
import Die from './Die'

export default function Tenzie(){

    const [dice,setDice]=React.useState(generateAllNewDice())
    function generateAllNewDice(){
      return new Array(10).fill(0).map(()=>Math.ceil(Math.random()*6))
    }

    const diceElements=dice.map(num=><Die val={num}/>)
    return(
        <main>
            <div className="dice-container">
      {diceElements}
         </div>
        </main>
    )
}