import React from 'react'

function ConctactCard(props) {
    console.log(props)
    return (
        <div>
            <div>
                <img src={props.imgURL} />
                <h3>{props.name}</h3>
                <p>{props.phone}</p>
                <p>{props.email}</p>
            </div>

        </div>
    )
}

export default ConctactCard