import { PokemonResponseDetailProps, TypesProps } from "../types/pokemon";

const PokemonDetail = (data: PokemonResponseDetailProps) => {
  return (
    <>
      <input type="text" />
      <label>Surname</label>
      <div className="flex justify-center">
        <img
          src={data?.sprites?.front_default}
          alt={data?.name}
          height={100}
          width={100}
        />
      </div>
      <div className="flex justify-between border-t border-[#ccc] p-2 text-center">
        <label className="font-bold w-1/4">Name</label>
        <span className="w-1/3">{data?.name}</span>
      </div>
      <div className="flex justify-between border-t border-[#ccc] p-2 text-center">
        <label className="font-bold w-1/4">Height</label>
        <span className="w-1/3">{data?.height} cm</span>
      </div>
      <div className="flex justify-between border-t border-[#ccc] p-2 text-center">
        <label className="font-bold w-1/4">Weight</label>
        <span className="w-1/3">{data?.weight} kg</span>
      </div>
      <div className="flex justify-between border-t border-[#ccc] p-2 text-center">
        <label className="font-bold w-1/4">Types</label>
        <div className="w-1/3">
          {data?.types?.map((item: TypesProps) => (
            <p key={item.slot}>{item?.type?.name}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default PokemonDetail;
