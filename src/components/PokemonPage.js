import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState('')
  const [newPoke, setNewPoke] = useState({
    name: '',
    hp: '',
    front: '',
    back: '',
  })

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(r => r.json())
    .then(data => setPokemon(data))
  }, [])

  function handleSearch(event) {
    setSearch(event.target.value)
  }


  function handleChange(event) {
    setNewPoke({
      ...newPoke,
      [event.target.name]: event.target.value
    })
    console.log(event.target.value)
  }

  // function handleNestedChange(event) {
  //   setNewPoke({
  //     ...newPoke,
  //     [event.target.name]: {
  //       [event.target.name]: event.target.value
  //     }
  //   })
  // }

  function handleSubmit(event) {
    event.preventDefault()
    const addPoke = {
      name: newPoke.name,
      hp: parseInt(newPoke.hp),
      sprites: {
        front: newPoke.front,
        back: newPoke.back,
      }
    }
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addPoke)
    })
    .then(r => r.json())
    .then(data => setPokemon([...pokemon, data]))
    setNewPoke({
      name: '',
      hp: '',
      front: '',
      back: '',
    })
  }

  const filterPokemon = pokemon.filter(poke => {
    return poke.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm
        handleChange={handleChange}
        // handleNestedChange={handleNestedChange}
        handleSubmit={handleSubmit}
        newPoke={newPoke}
      />
      <br />
      <Search handleSearch={handleSearch} />
      <br />
      <PokemonCollection pokemon={filterPokemon}/>
    </Container>
  );
}

export default PokemonPage;
