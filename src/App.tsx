import React, { useState } from 'react'

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>

const App = () => {
  const [name, setName] = useState('')
  const [lName, setLName] = useState('')
  const [age, setAge] = useState('-')

  const handleInputName = (event: InputChangeEvent) => {
    setName(event.target.value)
  }

  const handleInputLName = (event: InputChangeEvent) => {
    setLName(event.target.value)
  }

  const handleInputAge = (event: InputChangeEvent) => {
    setAge(event.target.value)
  }

  return (
    <div>
      <div>
        Nome:
        <input type="text" onChange={handleInputName} />
      </div>
      <div>
        Sobrenome:
        <input type="text" onChange={handleInputLName} />
      </div>
      <div>
        Idade:
        <input type="text" onChange={handleInputAge} />
      </div>
      <hr />
      Olá {`${name} ${lName}`}, tudo bem?
      <br />
      Você tem {age} anos.
    </div>
  )
}

export default App
