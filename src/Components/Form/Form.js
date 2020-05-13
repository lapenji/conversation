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
        maxWidth: '500px',
        maxHeight: '400px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        border: '1px solid black',
        borderRadius: '10px',
        fontSize: '10px',
        padding: '15px',
        textAlign: 'center'
        
    }
    const inputStyle = {
        marginLeft: '5px',
        marginRight: '10px'
    }

    return(
        <div style={divStyle}>
            <h1>Insert your data</h1>
            <div style={{display: 'flex', alignItems:'center'}}><span style={{width: '35px'}}>Name:</span><input style={inputStyle} type="text" name="name" value={name} onChange={changeHandler}/></div>
            <div style={{display: 'flex', alignItems:'center'}}><span style={{width: '35px'}}>Role:</span><input style={inputStyle} type="text" name="ruolo" value={ruolo} onChange={changeHandler}/></div>
            <button onClick={submitHandler} style={{marginTop: '10px'}}>GO</button>

            
        </div>
    )
}

export default Form