import { useGetAllPokemonQuery } from "../../services/pokemon";
import { PokemonResponseListProps } from "../../types/pokemon";
import PokemonList from "../../components/pokemonList";

const PokemonPage = () => {
  const { data, isError, isLoading } = useGetAllPokemonQuery({});

  if (isError) {
    return <p data-testid="error">Something went wrong!</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="h-screen">
      <div className="w-60 text-left">
        <h1 className="bg-blue-600 py-5 px-2 text-white text-lg font-bold">
          PokeReact
        </h1>
        <div>
          {data?.results.map((item: PokemonResponseListProps) => {
            const parts = item.url.split("/");
            const id = parts[parts.length - 2];
            return (
              <PokemonList {...item} key={id} id={id} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
