export function colorTypes (type) {
    switch (type) {
        case 'grass':
          return 'linear-gradient(270deg, #24a528 0.15%, #64d368 70.88%);'
        case 'fire':
          return 'linear-gradient(270deg, #d1892a 0.15%, #ffa760 100%)'
        case 'water':
          return 'linear-gradient(270deg, #20b0f3 0.15%, #6dcaf8 100%)'
        case 'electric':
          return 'linear-gradient(180deg, #f2cb07 0%, #f2c307 41.15%, #f2b807 100%)'
        case 'fairy':
          return 'linear-gradient(270deg, #f89eae 0.15%, #f8c9d2 100%)'
        case 'normal':
          return 'linear-gradient(270deg, #9e9e41 0.15%, #a8a878 100%)'
        case 'psychic':
          return 'linear-gradient(270deg, #f85888 0.15%, #f85888 100%)'
        case 'ground':
          return 'linear-gradient(270deg, #e4b32c 0.15%, #e0c068 100%)'
        case 'poison':
          return 'linear-gradient(270deg, #b927b9 0.15%, #ca71ca 100%)'
        case 'flying':
          return 'linear-gradient(270deg, #a890f0 0.15%, #b8a0f0 100%)'
        case 'fighting':
          return 'linear-gradient(270deg, #d56723 0.15%, #e67a2c 100%)'
        case 'steel':
          return 'linear-gradient(270deg, #9b9b9b 0.15%, #b2b2b2 100%)'
        case 'ghost':
          return 'linear-gradient(270deg, #7b7b7b 0.15%, #9e9e9e 100%)'
        case 'ice':
          return 'linear-gradient(270deg, #5bc4c4 0.15%, #7ec9c9 100%)'
        case 'dragon':
          return 'linear-gradient(270deg, #6f35fc 0.15%, #8e44fd 100%)'
        case 'dark':
          return 'linear-gradient(270deg, #707070 0.15%, #8c8c8c 100%)'
        case 'bug':
          return 'linear-gradient(270deg, #a8b820 0.15%, #c0d23f 100%)'
        case 'rock':
          return 'linear-gradient(270deg, #a38c21 0.15%, #c0b93b 100%)'
        default:
          return '#A8A77A'
    }
}