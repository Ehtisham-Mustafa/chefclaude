import React, { useState,useRef,useEffect } from 'react'
import Die from './Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

export default function Tenzie(){

    const [dice,setDice]=React.useState(()=>generateAllNewDice())
    const [tenzies,setTenzies]=useState(false)
    const buttonRef = useRef(null)
    const gameWon=dice.every(die=>die.isHeld) && dice.every(die=>die.value===dice[0].value)
    useEffect(() => {
        if (gameWon) {
            buttonRef.current.focus()
        }
    }, [gameWon])
    function generateAllNewDice(){
      return new Array(10)
      .fill(0)
      .map(()=>(
        {
            value:Math.ceil(Math.random()*6),
            isHeld:false,
            id:nanoid()

        }))
    }
        function hold(id){
            setDice(oldDice=> oldDice.map(die=>
                die.id===id?{...die,isHeld:!die.isHeld}:die
                )
            )
        }
    const diceElements=dice.map(dieObject=>(
    <Die 
    key={dieObject.id} 
    val={dieObject.value}
     isHeld={dieObject.isHeld} 
     hold={hold}
     id={dieObject.id}
     />

))
    function rollDice(){
        if(!gameWon){
        setDice(oldDice=>oldDice.map(die=>
            die.isHeld?die:{...die,value:Math.ceil(Math.random()*6)}
        ))
    }else{
        setDice(()=>generateAllNewDice())
    }
    }
    return(
        <main>
            {gameWon && <Confetti/>}
               <h1 className="title">Tenzies</h1>
               <p className="instructions">Roll until all dices are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
      {diceElements}
         </div>
         <button ref={buttonRef} className='roll-dice' onClick={rollDice}>{gameWon?"New Game":"Roll"}</button>
        </main>
    )
}