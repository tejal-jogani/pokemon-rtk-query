import { useGetProductByIdQuery } from "../../../services/pokemon";
import { useParams } from "react-router-dom";
import PokemonDetail from "../../../components/pokemonDetail";

const PokemonDetailsPage = () => {
  const params = useParams();

  const { data, isError, isLoading } = useGetProductByIdQuery(params.id);

  if (isError) {
    return <p data-testid="d-error">Something went wrong!</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="h-screen">
      <div className="w-60 text-left">
        <h1 className="bg-blue-600 py-5 px-2 text-white text-lg font-bold capitalize">
          {data?.name}
        </h1>
        <PokemonDetail {...data} />
      </div>
    </div>
  );
};

export default PokemonDetailsPage;
