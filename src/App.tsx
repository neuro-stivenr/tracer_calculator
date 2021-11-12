import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

const appStyle: any = {
  InputLine: {
    marginTop: '20px',
    marginBottom: '20px'
  }
}

interface InputLineProps {
  placeholder: string;
  setter: Function;
}

function InputLine(props:InputLineProps) {
  const handleChange = (e:any) => {
    props.setter(e.target.value)
  }
  return (
    <div style={appStyle.InputLine}>
      <input
        type='text'
        placeholder={props.placeholder}
        onChange={handleChange}
      />
    </div>
  )
}

function App() {
  
  const [patid, setPatid] = useState('')
  const patidProps: InputLineProps = {
    placeholder: 'Participant ID',
    setter: setPatid
  } 

  const [tracer, setTracer] = useState('')
  const tracerProps: InputLineProps = {
    placeholder: 'Tracer',
    setter: setTracer
  }

  const [dose, setDose] = useState('')
  const doseProps: InputLineProps = {
    placeholder: 'Dose',
    setter: setDose
  }

  const handleSubmit = (e:any) => {
    console.log(`patid: ${patid}`)
    console.log(`tracer: ${tracer}`)
    console.log(`dose: ${dose}`)
  }

  return (
    <div className="App">
      <div>
        <InputLine 
          {...patidProps}
        />
        <InputLine
          {...tracerProps}
        />
        <InputLine
          {...doseProps}
        />
        <input 
          type='button' 
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;
