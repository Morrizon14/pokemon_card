import React from "react";

const styles = {
  photoTypeSize: {
    height: "2.7em",
  },
};

function PokemonPhotoType(props) {
  return <img style={styles.photoTypeSize} src={props.image} alt={props.alt}/>;
}

export default PokemonPhotoType;
