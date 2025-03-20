import React from "react"

export default function Pad(props) {
    const [on, setOn] = React.useState(props.on)
    
    function toggle() {
        setOn(prevOn => !prevOn)
    }

    return (
        <button 
            style={{backgroundColor: props.color}}
            className={props.on ? "on" : null}
            onClick={()=>props.toggle(props.id)}
        ></button>
    )
}