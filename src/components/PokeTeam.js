import { PokemonTeam } from "./UI/Container"
import { PokeTeamMember } from "./PokeTeamMember"

export function PokeTeam ({team}) {
  return (
    <PokemonTeam>
        {Object.keys(team).map(index => (
            <PokeTeamMember pokemon={team[index]} key={`member${index}`} index={index} />
        ))}
    </PokemonTeam>
  )
}