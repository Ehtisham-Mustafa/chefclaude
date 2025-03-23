import clsx from "clsx"
import { languages } from "../DataSource/languages"
import React from "react"
export default function AssemblyEndGame(){

    const [currentWord,setCurrentWord]=React.useState("react")
    const alphabet="abcdefghijklmnopqrstuvwxyz"
    const [guessedLetters,setGuessedLetters]=React.useState([])
    const wrongGuessCount=guessedLetters.filter(letter=>!currentWord.includes(letter)).length
    function addGuessedLetter(letter){
        setGuessedLetters(prevLetters=>{
            // prevLetters.includes(letter)?prevLetters:[...prevLetters,letter]
            const letterSet=new Set(prevLetters)
            letterSet.add(letter)
            return Array.from(letterSet)
        }
        )
    }

    const languageElements=languages.map((lang,index)=>{
        const isLanguageLost=index<wrongGuessCount
        const styles={
            backgroundColor:lang.backgroundColor,
            color:lang.color
        }
        const className = clsx("chip", isLanguageLost && "lost")
        return(
        <span 
        key={lang.name} 
        className={className}
        style={styles}
         >
            {lang.name}
            </span>
    )
        
})

const letterElements=currentWord.split("").map((letter,index)=>(
    <span key={index}>{guessedLetters.includes(letter)?letter.toLocaleUpperCase():""}</span>
))

const keyboardElements=alphabet.split("").map(letter=>{
    const isGuessed=guessedLetters.includes(letter)
    const isCorrect=isGuessed && currentWord.includes(letter)
    const isWrong=isGuessed && !currentWord.includes(letter)

    const className=clsx({
            correct:isCorrect,
            wrong:isWrong,

    })
    return (
    <button className={className} key={letter} onClick={()=>addGuessedLetter(letter)}>{letter.toUpperCase()}</button>
)

}
)
    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>
            </header>
        <section className="game-status">
            <h2>You win!</h2>
            <p>Well done! 🎉 </p>
        </section>
        <section className="language-chips">

            {languageElements}
        </section>
        <section className="word">
                {letterElements}
        </section>
        <section className="keyboard">
                {keyboardElements}
        </section>
        <button className="new-game">New Game</button>
        </main>
    )
}