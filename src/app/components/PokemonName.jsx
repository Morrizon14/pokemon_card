import React from 'react'

const styles = {
  titleHead: {
    backgroundColor: '#61a8d4',
    borderRadius: '50%',
    color: '#77dd77',
    padding: '.5em',
    margin: 0
  }
}

class PokemonName extends React.Component {
  render() {
    return <h2 style={styles.titleHead}>{this.props.names.name}</h2>
  }
}

export default PokemonName