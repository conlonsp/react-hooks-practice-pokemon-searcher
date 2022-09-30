import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ handleChange, handleSubmit, newPoke }) {

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input
            onChange={handleChange}
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={newPoke.name}
          />
          <Form.Input
            onChange={handleChange}
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={newPoke.hp}
          />
          <Form.Input
            onChange={handleChange}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={newPoke.front}
          />
          <Form.Input
            onChange={handleChange}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={newPoke.back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
