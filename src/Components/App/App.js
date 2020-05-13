import React, {useState} from 'react';
import Conversation from '../Conversation/Conversation';
import Form from '../Form/Form';

const App = () => {

  const generateNum = () => {
    return Math.floor(Math.random() * 66);
  }
  const generatePair = () => {
    let array = []
    let num1 = generateNum();
    let num2 = generateNum();
    while(num1 === num2){
    num2 = generateNum()
  }
    array.push(num1);
    array.push(num2);
    return array
  }
  
  const [numeri, setNumeri] = useState(generatePair())
  const [nomeRuolo, setNomeRuolo] = useState([])
  const [compilato, setCompilato] = useState(false)
  const handleSubmit = (nome, ruolo) => {
    if(nome === '' || ruolo === ''){
      return;
    }
    else{
    setNomeRuolo([nome, ruolo])
    setCompilato(true)
    }
  }

  const backHandler = () => {
    setNomeRuolo([]);
    setCompilato(false);
    setNumeri(generatePair())

  }
  
  return(
    <div>
      
      {compilato ? <Conversation nome={nomeRuolo[0]} ruolo={nomeRuolo[1]} numeri={numeri} backHandler={backHandler}/> : <Form handler={handleSubmit}/>}
    </div>
  )
}


export default App;
