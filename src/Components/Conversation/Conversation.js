import React from 'react';
import competenze from '../Lominger/lominger.js'


const Conversation = ({numeri, nome, ruolo, backHandler}) => {
   
    const divStyle = {
        maxWidth: '500px',
        maxHeight: '400px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        border: '1px solid black',
        borderRadius: '10px',
        padding: '15px',
        fontSize: '10px',
        textAlign: 'center'
    }
    return(
        <div style={divStyle}>
            <h1>Hi {nome}, so you want to be a {ruolo}</h1>
            <h2>that would be great since you're really good in {competenze[numeri[0]].name}</h2>
            <h2>but it's too soon, first you need to get better in {competenze[numeri[1]].name}</h2>
            <button onClick={backHandler}>Back</button>
        </div>
    )
}

export default Conversation