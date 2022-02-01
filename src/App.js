import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Message from './components/Message';
import Result from './components/Result';


const App = () => {

  const [entry, setEntry] = useState(0);
  const [term, setTerm] = useState("");
  const [totalPay, setTotalPay] = useState(0);
  

  let component;

if(totalPay === 0){
    component = <Message />
  } else{
    component = <Result 
      
      totalPay={totalPay}
      term={term}
      entry={entry}

    />
  }

  return (
      <Fragment>
        <Header 
          title="Cotizador de Prestamos"
        />

        <div className='container'>
          <Form 
            entry={entry}
            setEntry={setEntry}
            term={term}
            setTerm={setTerm}
            totalPay={totalPay}
            setTotalPay={setTotalPay}
          />
          <div className='mensajes'>
            {component}
          </div>
        </div>
      </Fragment>
  )
}

export default App;
