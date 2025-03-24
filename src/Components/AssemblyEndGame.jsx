import clsx from "clsx"
import { languages } from "../DataSource/languages"
import React from "react"
import { getFarewellText, getRandomWord } from "../DataSource/utils"
import Confetti from "react-confetti"
export default function AssemblyEndGame(){

    const [currentWord,setCurrentWord]=React.useState(getRandomWord())
    const alphabet="abcdefghijklmnopqrstuvwxyz"
    const [guessedLetters,setGuessedLetters]=React.useState([])
    const wrongGuessCount=guessedLetters.filter(letter=>!currentWord.includes(letter)).length
    const isGameLost=wrongGuessCount >= languages.length-1
    const isGameWon= currentWord.split("").every(letter=>guessedLetters.includes(letter)) 
    const isGameOver=isGameLost || isGameWon
    const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
    const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)

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

const letterElements = currentWord.split("").map((letter, index) => {
    const shouldRevealLetter = isGameLost || guessedLetters.includes(letter)
    const letterClassName = clsx(
        isGameLost && !guessedLetters.includes(letter) && "missed-letter"
    )
    return (
        <span key={index} className={letterClassName}>
            {shouldRevealLetter ? letter.toUpperCase() : ""}
        </span>
    )
})
function startNewGame(){
    setCurrentWord(getRandomWord())
    setGuessedLetters([])
}

const keyboardElements=alphabet.split("").map(letter=>{
    const isGuessed=guessedLetters.includes(letter)
    const isCorrect=isGuessed && currentWord.includes(letter)
    const isWrong=isGuessed && !currentWord.includes(letter)

    const className=clsx({
            correct:isCorrect,
            wrong:isWrong,

    })
    return (
    <button className={className} key={letter} onClick={()=>addGuessedLetter(letter)} disabled={isGameOver}>{letter.toUpperCase()}</button>
)

}

)
const gameStatusClass = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
    farewell:!isGameOver && isLastGuessIncorrect
})

function renderGameStatus() {
    if (!isGameOver && isLastGuessIncorrect) {
        return <p className="farewell-message"> {getFarewellText(languages[wrongGuessCount - 1].name)}</p>
    }
    if (isGameWon) {
        return (
            <>
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </>
        )
    } 
           if (isGameLost) {
        return (
            <>
                <h2>Game over!</h2>
                <p>You lose! Better start learning Assembly 😭</p>
            </>
        )
    }
    return null
}
    return (
        <main>
                  {
                isGameWon && 
                    <Confetti
                        recycle={false}
                        numberOfPieces={1000}
                    />
            }
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>
            </header>
        <section className={gameStatusClass}>
            {renderGameStatus()}
            
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
        {isGameOver &&
        <button className="new-game" onClick={startNewGame}>New Game</button>}
        </main>
    )
}