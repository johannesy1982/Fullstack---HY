const Persons = (props) => {
    return(
        props.filteredPersons.map((person,name) => (
      <div key={person.id}>{person.name} {person.number} <button onClick={() => props.deletePerson(person.id)}>
      delete </button> </div>
       )))}
    

export default Persons