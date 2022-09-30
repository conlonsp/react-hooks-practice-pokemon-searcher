import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ poke }) {
  const [sprite, setSprite] = useState(poke.sprites.front)

  function handleClick() {
    if(sprite === poke.sprites.front) {
      return setSprite(poke.sprites.back)
    } else {
      return setSprite(poke.sprites.front)
    }
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={sprite} alt={poke.name} />
        </div>
        <div className="content">
          <div className="header">{poke.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poke.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
