import React from "react";
/*
import pokemon from "../assets/images/pokemon-fire.png";
*/
import PokemonName from "./components/PokemonName";
/*
import PokemonPhoto from "./components/PokemonPhoto";
import PokemonPhotoType from "./components/PokemonPhotoType";
import PokemonDescription from "./components/PokemonDescription";
*/
import data from "./pokemon.json";
/*
const styles = {
  containerApp: {
    width: "40%",
    padding: ".4em",
    border: "1px solid",
    margin: "auto",
  },
  widthDescription: {
    width: "80%",
    margin: "auto",
  },
  pokemonName: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
};
*/

class PokemonNames extends React.Component {
  render() {
    return (
      <div>
      {
        this.props.data.map((name, i) => {
        return <PokemonName key={i} names={name} />
        })
      }
    </div>
    )
  }
}


class  App extends React.Component {
  render () {
    console.log(data)
    return (
      <div>
        <PokemonNames data={this.props.data} />
      </div>
    );
  }
}

/*
function App() {
  console.log(data)
  return (
    <div style={styles.containerApp}>
      <PokemonPhotoType image={pokemon} alt="fire" />
      <div style={styles.widthDescription}>
        <PokemonDescription description="Al luchar, Chikorita agita la hoja que tiene para mantener a raya al rival. Pero, al mismo tiempo, libera una suave fragancia que apacigua el encuentro y crea un ambiente agradable y de amistad." />
      </div>
        <div style={styles.pokemonName}>
          <PokemonName name="Chikorita" />
          <PokemonPhoto
            width="100px !important"
            name="Chikorita"
            photo="https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png"
          />
        </div>

    </div>
  );
}
*/

export default App;
