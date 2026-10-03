import type { Technology } from "../type/tech.ts";

interface TechCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
}

const TechCard = ({ technology, onAdd, isAdded }: TechCardProps) => {
  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

     
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-9 w-9 object-contain"
        />

        <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-medium text-blue-500">
          {technology.badge}
        </span>
      </div>

     
      <h3 className="mt-4 text-lg font-bold text-gray-900">
        {technology.name}
      </h3>

      
      <p className="mt-2 flex-grow text-xs leading-5 text-gray-500">
        {technology.description}
      </p>

    
      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-[10px]">

        <span className="rounded bg-gray-100 px-2 py-1 text-gray-600">
          {technology.category}
        </span>

        <span className="text-gray-500">
          {technology.difficulty}
        </span>

        <span className="font-medium text-gray-700">
          <span className="text-yellow-400">★</span>{" "}
          {technology.rating}
        </span>
      </div>

      
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-lg py-2.5 text-xs font-medium transition ${
          isAdded
            ? "cursor-not-allowed bg-green-100 text-green-600"
            : "bg-gray-950 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;