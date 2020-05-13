import React, {useState} from 'react';


const Form = ({handler}) => {
    const [name, setName] = useState('');
    const [ruolo, setRuolo] = useState('')
    const submitHandler = () => {
        handler(name, ruolo);
        setName('');
        setRuolo('')
    }
    const changeHandler = e => {
        if(e.target.name === 'name'){
            setName(e.target.value)
        }
        else if(e.target.name === 'ruolo'){
            setRuolo(e.target.value)
        }
    }
    const divStyle = {
        width: '500px',
        height: '400px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        border: '1px solid black',
        borderRadius: '10px',
        fontSize: '10px',
        padding: '15px',
    }
    const inputStyle = {
        marginLeft: '5px',
        marginRight: '10px'
    }

    return(
        <div style={divStyle}>
            <h1>Insert your data</h1>
            <div><span>Name:</span><input style={inputStyle} type="text" name="name" value={name} onChange={changeHandler}/><span>Role:</span><input style={inputStyle} type="text" name="ruolo" value={ruolo} onChange={changeHandler}/></div>
            <button onClick={submitHandler}>GO</button>

            
        </div>
    )
}

export default Form