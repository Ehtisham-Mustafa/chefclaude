import { languages } from "../DataSource/languages"
import React from "react"
export default function AssemblyEndGame(){

    const [currentWord,setCurrentWord]=React.useState("react")

    const languageElements=languages.map(lang=>{
        const styles={
            backgroundColor:lang.backgroundColor,
            color:lang.color
        }
        return(
        <span key={lang.name} className="chip" style={styles}>{lang.name}</span>
    )
        
})

const letterElements=currentWord.split("").map((letter,index)=>(
    <span key={index}>{letter.toLocaleUpperCase()}</span>
)

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
        </main>
    )
}