import React from 'react'

const styles = {
  photoSize: {
    height: '4.5em',
  }
}


function PokemonPhoto(props) {
  return <img style={styles.photoSize} src={props.photo} alt={props.name} />
}

export default PokemonPhoto