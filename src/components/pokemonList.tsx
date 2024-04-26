import { Link } from "react-router-dom";
import { PokemonResponseListProps } from "../types/pokemon";

const PokemonList = (item: PokemonResponseListProps) => {
  const baseImageUrl = import.meta.env.VITE_BASE_IMAGE_URL
  const imageUrl = `${baseImageUrl}/${item.id}.png`;
  
  return (
    <div key={`${item.id}`} className="flex items-center border-t border-[#ccc] px-10">
      <img src={imageUrl} alt={item?.name} height={50} width={50} />
      <div className="w-full text-center">
        <Link to={`/pokemon/${item.id}`} className="hover:underline hover:text-blue-600">
            {item.name}
        </Link>
      </div>
    </div>
  );
};

export default PokemonList;
