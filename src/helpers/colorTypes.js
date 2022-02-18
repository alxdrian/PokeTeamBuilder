export function colorTypes (type) {
    switch (type) {
        case 'grass':
          return '#5FBD58';
        case 'fire':
          return '#FBA54C'
        case 'water':
          return '#539DDF'
        case 'electric':
          return '#F2D94E'
        case 'fairy':
          return '#EE90E6'
        case 'normal':
          return '#A0A29F'
        case 'psychic':
          return '#FA8581'
        case 'ground':
          return '#DA7C4D'
        case 'poison':
          return '#B763CF'
        case 'flying':
          return '#A1BBEC'
        case 'fighting':
          return '#D3425F'
        case 'steel':
          return '#5695A3'
        case 'ghost':
          return '#5F6DBC'
        case 'ice':
          return '#75D0C1'
        case 'dragon':
          return '#0C69C8'
        case 'dark':
          return '#595761'
        case 'bug':
          return '#92BC2C'
        case 'rock':
          return '#C9BB8A'
        default:
          return '#A8A77A'
    }
}