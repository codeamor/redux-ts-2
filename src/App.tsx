import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemonData } from "./actions/PokemonActions";
import { RootReducerType } from "./Store";
import "./App.css";
function App() {
  const [pokemonName, setPokemonName] = useState("");
  const pokemonReducer = useSelector(
    (state: RootReducerType) => state.PokemonReducer
  );
  const dispatch = useDispatch();

  const handlePokemonName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPokemonName(event.target.value);
  const searchButtonTapped = () => {
    dispatch(fetchPokemonData(pokemonName));
  };

  return (
    <div className="App">
      <input value={pokemonName} onChange={handlePokemonName} />
      <button onClick={searchButtonTapped}>포켓몬 검색</button>
      {pokemonReducer.success && (
        <div>
          <p>{`포켓몬 이름: ${pokemonName}`}</p>
          <img
            alt="pokemon_sprites"
            src={pokemonReducer.pokemon?.sprites.front_default}
            style={{ width: 250 }}
          />
          {pokemonReducer.pokemon?.abilities.map((el, idx) => {
            return (
              <div key={idx}>
                <p>{`특성: ${el.ability.name}`}</p>
                <p>{`이 특성은 ${el.slot}번 특성이고, 히든 특성 여부는 ${el.is_hidden}입니다.`}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
