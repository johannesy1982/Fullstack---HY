import { useState,useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import personService from './services/persons'
import Notification from './components/Notification'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [Message, setMessage] = useState(null)
  useEffect(() => {
    personService
    .getAll()
    .then(initialNotes => {
    setPersons(initialNotes)
  })
  }, [])

  const showNotification = (message, duration = 5000) => {
  setMessage(message)

  setTimeout(() => {
    setMessage(null)
  }, duration)
}

  const addName = (event) => {
  event.preventDefault()
  const check = persons.find(
    person => person.name === newName
  )

  if (check) {
    const change = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
    if (!change){
      return
    }
  

  const updated = {
    ...check,
    number:newNumber
  }

  personService.update(updated.id,updated).then(returnedObject => {
    setPersons(prevPersons =>
      prevPersons.map(person =>
        person.id === returnedObject.id
        ? returnedObject
        :person
      )
    )
      setNewName('')
      setNewNumber('')
    })

  .catch((error) => {
        showNotification({type:"error", message:`Information on ${updated.name} was already removed from server`})
      })
  
  personService.getAll().then(persons => {
    setPersons(persons)
  })
    

    return
  }
  

  

  
  
  const nameObject = {
    name: newName,
    number: newNumber
    
  }
  personService.create(nameObject).then((returnedObject) => {
    setPersons(prevPersons=>
    prevPersons.concat(returnedObject))
    setNewName('')
    setNewNumber('')

    showNotification({type:"add",message:`Added ${returnedObject.name}`}
    )
    
    })
  }
  
  
 


  /*setPersons(persons.concat(nameObject))
  setNewName('')
  console.log(persons.name)
}*/

const deletePerson = (id) => {
  if (window.confirm('Delete this person?')){
    personService.remove(id).then(() => {
      setPersons(prevPersons =>
        prevPersons.filter(person => person.id !== id))
    })
  }
}



  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  
  const filteredPersons = persons.filter(person =>
  person.name.toLowerCase().includes(filter.toLowerCase())
)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} filterChange={(event) => setFilter(event.target.value)}/>
      
      <Notification notification={Message} />
      
      
      

      <h2>add new</h2>
      <PersonForm addName={addName}
      newName={newName}
      handleNameChange={handleNameChange}
      newNumber={newNumber}
      handleNumberChange={handleNumberChange}/>

      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons}
      deletePerson={deletePerson}  />
      
    </div>
  )
}



export default App