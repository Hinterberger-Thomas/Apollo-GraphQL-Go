
import React from 'react'

function ButtonGetData(props) {
    return (
        <div>
            <input id="get-text" type="text"></input>
            <button onClick= {props.onGetData}>Get data</button>
        </div>
    )
}

export default ButtonGetData

