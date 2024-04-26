export interface PokemonResponseListProps {
  name: string;
  url: string;
  id: string;
}

export interface PokemonResponseDetailProps {
  name: string;
  height: number;
  weight: number;
  types: TypesProps[];
  sprites: {
    front_default: string;
  };
}

export interface SubTypesProps {
  name: string;
  url: string;
}

export interface TypesProps {
  slot: number;
  type: SubTypesProps;
}
