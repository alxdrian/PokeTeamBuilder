import { BugIcon, 
        DarkIcon, 
        DragonIcon, 
        ElectricIcon, 
        FairyIcon, 
        FightingIcon, 
        FireIcon, 
        FlyingIcon, 
        GhostIcon, 
        GrassIcon, 
        GroundIcon, 
        IceIcon, 
        NormalIcon, 
        PoisonIcon, 
        PsychicIcon, 
        RockIcon, 
        SteelIcon, 
        WaterIcon } from "./UI/Icons"

export function IconTypes ({type}) {
    switch (type) {
        case 'grass':
          return <GrassIcon />;
        case 'fire':
          return <FireIcon />;
        case 'water':
          return <WaterIcon />;
        case 'electric':
          return <ElectricIcon />;
        case 'fairy':
          return <FairyIcon />;
        case 'normal':
          return <NormalIcon />;
        case 'psychic':
          return <PsychicIcon />;
        case 'ground':
          return <GroundIcon />;
        case 'poison':
          return <PoisonIcon />;
        case 'flying':
          return <FlyingIcon />;
        case 'fighting':
          return <FightingIcon />;
        case 'steel':
          return <SteelIcon />;
        case 'ghost':
          return <GhostIcon />;
        case 'ice':
          return <IceIcon />;
        case 'dragon':
          return <DragonIcon />;
        case 'dark':
          return <DarkIcon />;
        case 'bug':
          return <BugIcon />;
        case 'rock':
          return <RockIcon />;
        default:
          return <NormalIcon />;
    }
}