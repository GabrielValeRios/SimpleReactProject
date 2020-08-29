import React from 'react'

function Joke(props) {

    return (
        <div>
            <p style={{color: props.content.question ? "#888888" : "#855585"}}>
                {props.content.question}
            </p>
            <p>{props.content.punchline}</p>
            <hr />
        </div>
    )
}

export default Joke